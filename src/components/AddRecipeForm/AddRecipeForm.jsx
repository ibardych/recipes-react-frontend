import { Button } from 'components/Styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import {
  AddImage,
  FieldWrapper,
  Ingredients,
  SelectItems,
  Selected,
  Title,
} from './AddRecipeForm.styled';
import Sprite from 'images/sprite.svg';
import { selectCategories } from 'redux/recipes/selectors';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Counter from 'components/Counter/Counter';
import SelectIngredient from './SelectIngredient';
import { selectNewRecipe } from 'redux/general/selectors';
import { setNewRecipe } from 'redux/general/slice';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const newRecipe = useSelector(selectNewRecipe);

  const [title, setTitle] = useState(newRecipe?.title ?? '');
  const [description, setDescription] = useState(newRecipe?.description ?? '');
  const [category, setCategory] = useState(newRecipe?.category ?? '');
  const [time, setTime] = useState('5 min');

  const initialValues = useMemo(() => {
    return {
      title: '',
      description: '',
      category: category,
      time: time,
    };
  }, [category, time]);

  const defaultIngredient = useMemo(() => {
    return {
      ingredient: '',
      ingredientId: null,
      measure: '',
      measureType: 'tsp',
      modalOpened: false,
    };
  }, []);

  useEffect(() => {
    if (categories[0]?.name !== undefined && !category) {
      setCategory(categories[0].name);
    }

    if (Object.keys(newRecipe).length === 0) {
      dispatch(
        setNewRecipe({ ...initialValues, ingredients: [defaultIngredient] })
      );
    }
  }, [
    categories,
    defaultIngredient,
    dispatch,
    initialValues,
    newRecipe,
    category,
  ]);

  const [selectCategoryOpened, setSelectCategoryOpened] = useState(false);
  const [selectTimeOpened, setSelectTimeOpened] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required('Title is a required field'),
    description: yup.string().required('Description is a required field'),
    category: yup.string().required('Category is a required field'),
    time: yup.string().required('Time is a required field'),
    age: yup
      .number()
      .required('Age is a required field')
      .min(18)
      .max(100)
      .positive()
      .integer(),
    desiredWeight: yup
      .number()
      .min(20)
      .max(500)
      .required('Desired weight is a required field')
      .positive()
      .integer(),
    bloodType: yup
      .number()
      .min(1)
      .max(4)
      .required('Blood type is a required field')
      .positive()
      .integer(),
  });

  const handleOnChange = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'title':
        setTitle(value);
        dispatch(setNewRecipe({ ...newRecipe, title: value }));
        break;
      case 'description':
        setDescription(value);
        dispatch(setNewRecipe({ ...newRecipe, description: value }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = ({ weight, height, age, desiredWeight, bloodType }) => {
    // const sendData = {
    //   weight: Number(weight),
    //   height: Number(height),
    //   age: Number(age),
    //   desiredWeight: Number(desiredWeight),
    //   bloodType: Number(bloodType),
    // };
    // dispatch(calculatorLogIn(sendData));
  };

  const openSelectCategory = () => {
    setSelectCategoryOpened(!selectCategoryOpened);
  };

  const selectCategory = category => {
    setCategory(category);
    dispatch(setNewRecipe({ ...newRecipe, category }));
  };

  const openSelectTime = () => {
    setSelectTimeOpened(!selectTimeOpened);
  };

  const selectTime = time => {
    setTime(time);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" onChange={handleOnChange}>
          <AddImage>
            <svg className="icon">
              <use href={`${Sprite}#icon-photo`}></use>
            </svg>
          </AddImage>

          <FieldWrapper>
            <Field type="text" name="title" placeholder=" " value={title} />
            <label className="label" htmlFor="title">
              Enter item title
            </label>
            <ErrorMessage className="error" component="div" name="title" />
          </FieldWrapper>

          <FieldWrapper>
            <Field
              type="text"
              name="description"
              placeholder=" "
              value={description}
            />
            <label className="label" htmlFor="description">
              Enter about recipe *
            </label>
            <ErrorMessage
              className="error"
              component="div"
              name="description"
            />
          </FieldWrapper>

          <FieldWrapper className="select">
            <Field
              type="text"
              name="category"
              placeholder=" "
              value={category}
            />
            <label className="label" htmlFor="category">
              Category *
            </label>
            <Selected onClick={openSelectCategory}>
              {category}
              <svg className="icon">
                <use href={`${Sprite}#icon-arrow-down`}></use>
              </svg>
              {selectCategoryOpened && (
                <SelectItems>
                  <PerfectScrollbar>
                    {categories.map(item => (
                      <div
                        key={item._id}
                        onClick={() => selectCategory(item.name)}
                        className={item.name === category ? 'active' : ''}
                      >
                        {item.name}
                      </div>
                    ))}
                  </PerfectScrollbar>
                </SelectItems>
              )}
            </Selected>
            <ErrorMessage className="error" component="div" name="category" />
          </FieldWrapper>

          <FieldWrapper className="select">
            <Field type="text" name="time" placeholder=" " value={time} />
            <label className="label" htmlFor="time">
              Cooking time *
            </label>
            <Selected onClick={openSelectTime}>
              {time}
              <svg className="icon">
                <use href={`${Sprite}#icon-arrow-down`}></use>
              </svg>
              {selectTimeOpened && (
                <SelectItems>
                  <PerfectScrollbar>
                    {Array.from({ length: 24 }, (_, index) => (
                      <div
                        key={index}
                        onClick={() => selectTime(`${(index + 1) * 5} min`)}
                        className={
                          `${(index + 1) * 5} min` === time ? 'active' : ''
                        }
                      >
                        {(index + 1) * 5} min
                      </div>
                    ))}
                  </PerfectScrollbar>
                </SelectItems>
              )}
            </Selected>
            <ErrorMessage className="error" component="div" name="category" />
          </FieldWrapper>

          {/* <RadioTitle>Blood type *</RadioTitle>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput type="radio" name="bloodType" value="1" />1
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="bloodType" value="2" />2
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="bloodType" value="3" />3
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="bloodType" value="4" />4
                </RadioLabel>
              </RadioGroup>
              <ErrorMSG component="div" name="bloodType" /> */}

          <Title>
            Ingredients
            <Counter defaultIngredient={defaultIngredient} />
          </Title>
          <Ingredients>
            {newRecipe.ingredients &&
              newRecipe.ingredients.map((ingredient, index) => (
                <SelectIngredient key={index} ingredient={ingredient} />
              ))}
          </Ingredients>

          <Title>Recipe Preparation</Title>

          <Button className="type5" type="submit">
            Add
          </Button>
        </Form>
      </Formik>

      <Title>Popular recipe</Title>
    </>
  );
};

export default AddRecipeForm;
