import { Field } from 'formik';
import {
  FieldWrapper,
  SelectIngredientStyled,
} from './SelectIngredient.styled';
import Sprite from 'images/sprite.svg';

const SelectIngredient = ({ ingredient }) => {
  const ingredientTypes = ['tbs', 'tsp', 'kg', 'g'];

  return (
    <SelectIngredientStyled>
      <FieldWrapper>
        <Field
          className="ingredient"
          type="text"
          name="ingredient[]"
          placeholder=" "
          value=""
        />
        <Field type="hidden" name="ingredientId[]" placeholder=" " value="" />
        <svg className="arrow-down">
          <use href={`${Sprite}#icon-arrow-down`}></use>
        </svg>
      </FieldWrapper>
      <FieldWrapper>
        <Field
          className="measure"
          type="text"
          name="measure[]"
          placeholder=" "
          value={`${ingredient.measure}`}
        />
        <div className="selected">{ingredient.measureType}</div>
        <svg className="arrow-down">
          <use href={`${Sprite}#icon-arrow-down`}></use>
        </svg>
        {ingredient.modalOpened && (
          <div className="select">
            {ingredientTypes.map(ingredientType => (
              <div
                className={
                  ingredient.measureType === ingredientType ? 'active' : ''
                }
              >
                {ingredientType}
              </div>
            ))}
          </div>
        )}
      </FieldWrapper>
      <svg className="delete">
        <use href={`${Sprite}#icon-delete`}></use>
      </svg>
    </SelectIngredientStyled>
  );
};

export default SelectIngredient;
