import { Field } from 'formik';
import {
  Error,
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
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { perfectScrollOptions } from 'constants';
import { useRef } from 'react';

const {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} = require('body-scroll-lock');

const SelectIngredient = ({ index, arrayHelpers, errors }) => {
  const dispatch = useDispatch();
  const newRecipe = useSelector(selectNewRecipe);
  const ingredients = newRecipe.ingredients.slice();
  const { searchQuery, ingredient, ingredientId, measure, measureType } =
    ingredients[index];
  const foundIngredients = useSelector(selectFoundIngredients);
  const [measureTypesOpened, setMeasureTypesOpened] = useState(false);

  const options = {
    reserveScrollBarGap: true,
  };

  const handleMouseOver = () => {
    const targetElement = document.body;
    disableBodyScroll(targetElement, options);
  };

  const handleMouseOut = () => {
    const targetElement = document.body;
    enableBodyScroll(targetElement, options);
  };

  const removeIngredient = index => {
    arrayHelpers.remove(index);
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
    clearAllBodyScrollLocks();
  };

  const findIngredients = () => {
    if (searchQuery.length >= 2) {
      dispatch(searchIngredients({ query: searchQuery }));
    } else {
      dispatch(emptyFoundIngredients());
    }
  };

  const setIngredient = (index, item) => {
    const { _id: ingredientId, name: ingredient } = item;

    inputRef.current.value = item._id;

    arrayHelpers.replace(index, {
      ...arrayHelpers.form.values.ingredients[index],
      ingredientId,
    });

    ingredients[index] = {
      ...ingredients[index],
      searchQuery: '',
      ingredient,
      ingredientId,
    };
    dispatch(setNewRecipe({ ...newRecipe, ingredients }));
    clearAllBodyScrollLocks();
  };

  const checkIngredient = e => {
    if (!e.target.value) {
      inputRef.current.value = '';
      arrayHelpers.replace(index, {
        ...arrayHelpers.form.values.ingredients[index],
        ingredientId: '',
      });
    }
  };

  const inputRef = useRef(null);

  return (
    <SelectIngredientStyled>
      <FieldWrapper className="ingredient">
        <Field
          type="text"
          name={`ingredients.${index}.ingredient`}
          placeholder=" "
          value={ingredient}
          onKeyUp={findIngredients}
          onChange={checkIngredient}
        />
        <input
          type="hidden"
          name={`ingredients.${index}.ingredientId`}
          placeholder=" "
          value={ingredientId}
          ref={inputRef}
        />
        <svg className="arrow-down">
          <use href={`${Sprite}#icon-arrow-down`}></use>
        </svg>
        {!!foundIngredients.length && searchQuery && (
          <div
            className="select"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <PerfectScrollbar options={perfectScrollOptions}>
              {foundIngredients.map((item, key) => (
                <div key={key} onClick={() => setIngredient(index, item)}>
                  {item.name}
                </div>
              ))}
            </PerfectScrollbar>
          </div>
        )}
      </FieldWrapper>
      <FieldWrapper className="measure">
        <Field
          type="text"
          name={`ingredients.${index}.measure`}
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
          <div
            className="select"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <PerfectScrollbar options={perfectScrollOptions}>
              {measureTypes.map((type, key) => (
                <div
                  key={key}
                  className={measureType === type ? 'active' : ''}
                  onClick={() => setMeasureType(type)}
                >
                  {type}
                </div>
              ))}
            </PerfectScrollbar>
          </div>
        )}
      </FieldWrapper>
      <svg className="delete" onClick={() => removeIngredient(index)}>
        <use href={`${Sprite}#icon-delete`}></use>
      </svg>
      {errors.ingredients && (
        <Error>
          {errors.ingredients[index].ingredientId
            ? `${errors.ingredients[index].ingredientId}. `
            : ``}
          {errors.ingredients[index].measure
            ? `${errors.ingredients[index].measure}. `
            : ``}
        </Error>
      )}
    </SelectIngredientStyled>
  );
};

export default SelectIngredient;
