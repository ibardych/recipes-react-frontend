import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  ImageName,
  Ingredient,
  IngredientList,
  Measure,
  Name,
  ShoppingListStyled,
  TableHead,
} from './ShoppingList.styled';
import { selectIsRefreshing, selectShoppingList } from 'redux/user/selectors';
import { removeIngredientFromShoppingList } from 'redux/user/operations';
import Sprite from 'images/sprite.svg';
import { useState } from 'react';
import { LoaderSmall } from 'components/Loader/Loader';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [ingrLoading, setIngrLoading] = useState([]);

  const removeIngrLoading = ingrId => {
    setIngrLoading(prevIngrLoading =>
      prevIngrLoading.filter(id => id !== ingrId)
    );
  };

  const removeFromShopingList = async id => {
    if (ingrLoading.includes(id)) return;
    setIngrLoading([...ingrLoading, id]);
    await dispatch(removeIngredientFromShoppingList(id));
    removeIngrLoading(id);
  };

  return (
    <ShoppingListStyled>
      <TableHead>
        <div>Product</div>
        <div>
          <div>Amount</div>
          <div>Remove</div>
        </div>
      </TableHead>
      <IngredientList>
        {isRefreshing ? (
          <LoaderSmall scale="1" top="100px" />
        ) : (
          shoppingList &&
          shoppingList.map(({ id, name, measure, img }, key) => (
            <Ingredient key={key}>
              <ImageName>
                <Image url={img} />
                <Name>{name}</Name>
              </ImageName>
              <Measure>{measure}</Measure>
              <div className="delete" onClick={() => removeFromShopingList(id)}>
                <svg>
                  <use href={`${Sprite}#icon-close`}></use>
                </svg>
              </div>
              {ingrLoading.includes(id) && <LoaderSmall name="shoppinglist" />}
            </Ingredient>
          ))
        )}
      </IngredientList>
    </ShoppingListStyled>
  );
};

export default ShoppingList;
