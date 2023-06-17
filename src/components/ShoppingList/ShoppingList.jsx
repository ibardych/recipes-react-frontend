import { useDispatch, useSelector } from 'react-redux';
import {
  Ingredient,
  IngredientList,
  ShoppingListStyled,
  TableHead,
} from './ShoppingList.styled';
import { selectShoppingList } from 'redux/user/selectors';
import { removeIngredientFromShoppingList } from 'redux/user/operations';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  const removeFromShopingList = id => {
    dispatch(removeIngredientFromShoppingList(id));
  };

  return (
    <ShoppingListStyled>
      <TableHead>
        <div>Product</div>
        <div>Amount</div>
        <div>Remove</div>
      </TableHead>
      <IngredientList>
        {shoppingList &&
          shoppingList.map(({ id, name, measure, img }, key) => (
            <Ingredient key={key}>
              <img src={img} alt={name} />
              <div>{name}</div>
              <div>{measure}</div>
              <div onClick={() => removeFromShopingList(id)}>X</div>
            </Ingredient>
          ))}
      </IngredientList>
    </ShoppingListStyled>
  );
};

export default ShoppingList;
