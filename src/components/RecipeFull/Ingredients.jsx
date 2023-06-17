import { useDispatch, useSelector } from 'react-redux';
import { selectRecipe } from 'redux/recipes/selectors';
import {
  Ingredient,
  IngredientList,
  IngredientsStyled,
  TableHead,
} from './Ingredients.styled';
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
} from 'redux/user/operations';
import { selectShoppingList } from 'redux/user/selectors';

const Ingredients = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const shoppingList = useSelector(selectShoppingList);

  const toggleShopingList = (action, ingredientId, name, measure, img) => {
    const id = `${recipe._id}-${ingredientId}`;
    if (action === 'add') {
      dispatch(
        addIngredientToShoppingList({
          id,
          name,
          measure,
          img,
        })
      );
    }
    if (action === 'remove') {
      dispatch(removeIngredientFromShoppingList(id));
    }
  };

  return (
    <IngredientsStyled>
      <TableHead>
        <div>Ingredients</div>
        <div>Number</div>
        <div>Add to list</div>
      </TableHead>
      <IngredientList>
        {recipe.ingredients &&
          recipe.ingredients.map(({ _id: id, name, measure, img }, key) => (
            <Ingredient key={key}>
              <img src={img} alt={name} />
              <div>{name}</div>
              <div>{measure}</div>

              {shoppingList.some(obj => obj.id === `${recipe._id}-${id}`) ? (
                <div onClick={() => toggleShopingList('remove', id)}>-</div>
              ) : (
                <div
                  onClick={() =>
                    toggleShopingList('add', id, name, measure, img)
                  }
                >
                  +
                </div>
              )}
            </Ingredient>
          ))}
      </IngredientList>
    </IngredientsStyled>
  );
};

export default Ingredients;
