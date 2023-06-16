import { Field } from 'formik';
import {
  FieldWrapper,
  SelectIngredientStyled,
} from './SelectIngredient.styled';
import Sprite from 'images/sprite.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewRecipe } from 'redux/general/selectors';
import { setNewRecipe } from 'redux/general/slice';
import { selectFoundIngredients } from 'redux/ingredients/selectors';
import { searchIngredients } from 'redux/ingredients/operations';
import { emptyFoundIngredients } from 'redux/ingredients/slice';
import { measureTypes } from 'constants';

const SelectIngredient = ({ index }) => {
  const dispatch = useDispatch();
  const newRecipe = useSelector(selectNewRecipe);
  const ingredients = newRecipe.ingredients.slice();
  const { searchQuery, ingredient, measure, measureType } = ingredients[index];
  const foundIngredients = useSelector(selectFoundIngredients);
  const [measureTypesOpened, setMeasureTypesOpened] = useState(false);

  const removeIngredient = index => {
    ingredients.splice(index, 1);
    dispatch(setNewRecipe({ ...newRecipe, ingredients }));
  };

  const openMeasureTypes = () => {
    setMeasureTypesOpened(!measureTypesOpened);
  };

  const setMeasureType = value => {
    ingredients[index] = {
      ...ingredients[index],
      measureType: value,
    };
    dispatch(setNewRecipe({ ...newRecipe, ingredients }));
    setMeasureTypesOpened(false);
  };

  const findIngredients = () => {
    if (searchQuery.length >= 2) {
      dispatch(searchIngredients({ query: searchQuery }));
    } else {
      dispatch(emptyFoundIngredients());
    }
  };

  const setIngredient = (index, item) => {
    ingredients[index] = {
      ...ingredients[index],
      searchQuery: '',
      ingredient: item.name,
      ingredientId: item._id,
    };
    dispatch(setNewRecipe({ ...newRecipe, ingredients }));
  };

  return (
    <SelectIngredientStyled>
      <FieldWrapper>
        <Field
          className="ingredient"
          type="text"
          name={`ingredient[${index}]`}
          placeholder=" "
          value={ingredient}
          onKeyUp={findIngredients}
        />
        <Field type="hidden" name="ingredientId" placeholder=" " value="" />
        <svg className="arrow-down">
          <use href={`${Sprite}#icon-arrow-down`}></use>
        </svg>
        {!!foundIngredients.length && searchQuery && (
          <div className="select">
            {foundIngredients.map((item, key) => (
              <div key={key} onClick={() => setIngredient(index, item)}>
                {item.name}
              </div>
            ))}
          </div>
        )}
      </FieldWrapper>
      <FieldWrapper>
        <Field
          className="measure"
          type="text"
          name={`measure[${index}]`}
          placeholder=" "
          value={measure}
        />
        <div className="selected" onClick={openMeasureTypes}>
          {measureType}
        </div>
        <svg className="arrow-down" onClick={openMeasureTypes}>
          <use href={`${Sprite}#icon-arrow-down`}></use>
        </svg>
        {measureTypesOpened && (
          <div className="select">
            {measureTypes.map((type, key) => (
              <div
                key={key}
                className={measureType === type ? 'active' : ''}
                onClick={() => setMeasureType(type)}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </FieldWrapper>
      <svg className="delete" onClick={() => removeIngredient(index)}>
        <use href={`${Sprite}#icon-delete`}></use>
      </svg>
    </SelectIngredientStyled>
  );
};

export default SelectIngredient;
