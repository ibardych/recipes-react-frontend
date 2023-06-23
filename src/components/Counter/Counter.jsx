import { useDispatch, useSelector } from 'react-redux';
import { Button, CounterStyled } from './Counter.styled';
import Sprite from 'images/sprite.svg';
import { selectNewRecipe } from 'redux/general/selectors';
import { setNewRecipe } from 'redux/general/slice';

const Counter = ({ arrayHelpers }) => {
  const dispatch = useDispatch();
  const newRecipe = useSelector(selectNewRecipe);

  const defaultIngredient = {
    searchQuery: '',
    ingredient: '',
    ingredientId: null,
    measure: '',
    measureType: 'g',
    modalOpened: false,
  };

  const handleCounter = action => {
    const ingredients = newRecipe.ingredients.slice();
    if (action === 'add') {
      arrayHelpers.insert(ingredients.length, {
        ingredient: '',
        measure: '',
      });
      ingredients.push(defaultIngredient);
    } else if (ingredients.length > 1) {
      arrayHelpers.pop();
      ingredients.pop();
    }
    dispatch(setNewRecipe({ ...newRecipe, ingredients }));
  };

  return (
    <CounterStyled>
      <Button type="button" onClick={() => handleCounter('remove')}>
        <svg className="minus">
          <use href={`${Sprite}#icon-minus`}></use>
        </svg>
      </Button>
      {newRecipe.ingredients && newRecipe.ingredients.length}
      <Button type="button" onClick={() => handleCounter('add')}>
        <svg className="plus">
          <use href={`${Sprite}#icon-plus`}></use>
        </svg>
      </Button>
    </CounterStyled>
  );
};

export default Counter;
