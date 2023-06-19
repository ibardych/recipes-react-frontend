import { useDispatch, useSelector } from 'react-redux';
import { selectRecipe } from 'redux/recipes/selectors';
import {
  Checkbox,
  Image,
  ImageName,
  Ingredient,
  IngredientList,
  IngredientsStyled,
  Measure,
  Name,
  TableHead,
} from './Ingredients.styled';
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
} from 'redux/user/operations';
import { selectShoppingList } from 'redux/user/selectors';
import { LoaderSmall } from 'components/Loader/Loader';
import { useState } from 'react';

const Ingredients = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const shoppingList = useSelector(selectShoppingList);
  const [ingrLoading, setIngrLoading] = useState([]);

  const removeIngrLoading = ingrId => {
    setIngrLoading(prevIngrLoading =>
      prevIngrLoading.filter(id => id !== ingrId)
    );
  };

  const toggleShopingList = async (action, ingrId, name, measure, img) => {
    if (ingrLoading.includes(ingrId)) return;

    setIngrLoading([...ingrLoading, ingrId]);

    const id = `${recipe._id}-${ingrId}`;
    if (action === 'add') {
      await dispatch(
        addIngredientToShoppingList({
          id,
          name,
          measure,
          img,
        })
      );
    }
    if (action === 'remove') {
      await dispatch(removeIngredientFromShoppingList(id));
    }
    removeIngrLoading(ingrId);
  };

  return (
    <IngredientsStyled>
      <TableHead>
        <div>Ingredients</div>
        <div>
          <div>Amount</div>
          <div>Add to list</div>
        </div>
      </TableHead>
      <IngredientList>
        {recipe.ingredients &&
          recipe.ingredients.map(({ _id: id, name, measure, img }, key) => (
            <Ingredient key={key}>
              <ImageName>
                <Image url={img} />
                <Name>{name}</Name>
              </ImageName>
              <Measure>{measure}</Measure>

              {shoppingList.some(obj => obj.id === `${recipe._id}-${id}`) ? (
                <Checkbox
                  className="checked"
                  onClick={() => toggleShopingList('remove', id)}
                ></Checkbox>
              ) : (
                <Checkbox
                  onClick={() =>
                    toggleShopingList('add', id, name, measure, img)
                  }
                ></Checkbox>
              )}
              {ingrLoading.includes(id) && <LoaderSmall name="ingredient" />}
            </Ingredient>
          ))}
      </IngredientList>
    </IngredientsStyled>
  );
};

export default Ingredients;
