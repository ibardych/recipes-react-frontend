import { Button } from 'components/Styled';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import {
  AddImage,
  AddRecipeFormStyled,
  BlockLeft,
  BlockRight,
  ButtonContainer,
  FieldWrapper,
  Ingredients,
  SelectItems,
  Selected,
  Title,
  TopBlocks,
} from './AddRecipeForm.styled';
import Sprite from 'images/sprite.svg';
import { selectCategories } from 'redux/recipes/selectors';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Counter from 'components/Counter/Counter';
import SelectIngredient from './SelectIngredient';
import { selectNewRecipe } from 'redux/general/selectors';
import { setNewRecipe } from 'redux/general/slice';
import { createOwnRecipe } from 'redux/ownRecipes/operations';
import { useNavigate } from 'react-router-dom';
import { perfectScrollOptions } from 'constants';
import { LoaderSmall } from 'components/Loader/Loader';
import { recipeInitialValues } from 'constants';

const {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} = require('body-scroll-lock');

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const newRecipe = useSelector(selectNewRecipe);
  const { image, title, description, category, time, instructions } = newRecipe;
  const ingredients = newRecipe.ingredients.slice();
  const [file, setFile] = useState(null);
  const createRecipeLoading = useSelector(
    state => state.ownRecipes.createRecipeLoading
  );

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

  const initialValues = useMemo(() => {
    return {
      image: '',
      title,
      description,
      category,
      time,
      instructions,
      ingredients: ingredients.map(({ ingredientId, measure }) => {
        return { ingredientId, measure };
      }),
    };
  }, [category, description, ingredients, instructions, time, title]);

  useEffect(() => {
    if (categories[0]?.name !== undefined && !newRecipe.category) {
      dispatch(setNewRecipe({ ...newRecipe, category: categories[0].name }));
    }
  }, [categories, dispatch, newRecipe]);

  const [selectCategoryOpened, setSelectCategoryOpened] = useState(false);
  const [selectTimeOpened, setSelectTimeOpened] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required('Title is a required field'),
    description: yup.string().required('Description is a required field'),
    // category: yup.string().required('Category is a required field'),
    time: yup.string().required('Time is a required field'),
    instructions: yup.string().required('Description is a required field'),
    image: yup
      .mixed()
      .required('Please select an image')
      .test('fileType', 'Invalid file format', value => {
        if (value === undefined) return false;
        const allowedFormats = ['image/jpeg', 'image/png'];
        return allowedFormats.includes(value.type);
      }),
    ingredients: yup.array().of(
      yup.object().shape({
        ingredientId: yup.string().required('Ingredient is required'),
        measure: yup.string().required('Measure is required'),
      })
    ),
  });

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'image':
        const image = e.target.files[0];
        const imageURL = URL.createObjectURL(image);
        dispatch(setNewRecipe({ ...newRecipe, image: imageURL }));
        setFile(image);
        break;
      case 'title':
        dispatch(setNewRecipe({ ...newRecipe, title: value }));
        break;
      case 'description':
        dispatch(setNewRecipe({ ...newRecipe, description: value }));
        break;
      case 'instructions':
        dispatch(setNewRecipe({ ...newRecipe, instructions: value }));
        break;
      default:
        if (name.startsWith('ingredients')) {
          const index = name.split('.')[1];
          const element = name.split('.')[2];
          if (element === 'ingredient') {
            ingredients[index] = {
              ...ingredients[index],
              ingredient: value,
              searchQuery: value,
            };
          }
          if (element === 'measure') {
            ingredients[index] = {
              ...ingredients[index],
              measure: value,
            };
          }
          dispatch(setNewRecipe({ ...newRecipe, ingredients }));
        }
        break;
    }
  };

  const openSelectCategory = () => {
    setSelectCategoryOpened(!selectCategoryOpened);
  };

  const selectCategory = category => {
    dispatch(setNewRecipe({ ...newRecipe, category }));
    clearAllBodyScrollLocks();
  };

  const openSelectTime = () => {
    setSelectTimeOpened(!selectTimeOpened);
  };

  const selectTime = time => {
    dispatch(setNewRecipe({ ...newRecipe, time }));
    clearAllBodyScrollLocks();
  };

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    const newIngredients = ingredients.map(
      ({ ingredientId, measure, measureType }) => ({
        id: ingredientId,
        measure: `${measure} ${measureType}`,
      })
    );

    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('time', time);
    formData.append('ingredients', JSON.stringify(newIngredients));
    formData.append('instructions', instructions);

    await dispatch(createOwnRecipe(formData));
    await dispatch(setNewRecipe(recipeInitialValues));
    resetForm();
    navigate('/my');
  };

  return (
    <AddRecipeFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({
          setFieldValue,
          errors,
          touched,
          isSubmitting,
          submitCount,
          values,
        }) => {
          return (
            <Form autoComplete="off" onChange={handleOnChange}>
              <TopBlocks>
                <BlockLeft>
                  <AddImage
                    onClick={handleFileClick}
                    image={file && image ? image : ''}
                  >
                    {(!image || !file) && (
                      <svg className="icon">
                        <use href={`${Sprite}#icon-photo`}></use>
                      </svg>
                    )}
                  </AddImage>
                  <FieldWrapper className="image">
                    <input
                      name="image"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={e => {
                        setFieldValue('image', e.target.files[0]);
                      }}
                    />
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="image"
                    />
                  </FieldWrapper>
                </BlockLeft>

                <BlockRight>
                  <FieldWrapper>
                    <Field
                      type="text"
                      name="title"
                      placeholder=" "
                      value={title}
                    />
                    <label className="label" htmlFor="title">
                      Enter item title
                    </label>
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="title"
                    />
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
                        <SelectItems
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                        >
                          <PerfectScrollbar options={perfectScrollOptions}>
                            {categories.map(item => (
                              <div
                                key={item._id}
                                onClick={() => selectCategory(item.name)}
                                className={
                                  item.name === category ? 'active' : ''
                                }
                              >
                                {item.name}
                              </div>
                            ))}
                          </PerfectScrollbar>
                        </SelectItems>
                      )}
                    </Selected>
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="category"
                    />
                  </FieldWrapper>

                  <FieldWrapper className="select">
                    <Field
                      type="text"
                      name="time"
                      placeholder=" "
                      value={time}
                    />
                    <label className="label" htmlFor="time">
                      Cooking time *
                    </label>
                    <Selected onClick={openSelectTime}>
                      {time}
                      <svg className="icon">
                        <use href={`${Sprite}#icon-arrow-down`}></use>
                      </svg>
                      {selectTimeOpened && (
                        <SelectItems
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                        >
                          <PerfectScrollbar options={perfectScrollOptions}>
                            {Array.from({ length: 24 }, (_, index) => (
                              <div
                                key={index}
                                onClick={() =>
                                  selectTime(`${(index + 1) * 5} min`)
                                }
                                className={
                                  `${(index + 1) * 5} min` === time
                                    ? 'active'
                                    : ''
                                }
                              >
                                {(index + 1) * 5} min
                              </div>
                            ))}
                          </PerfectScrollbar>
                        </SelectItems>
                      )}
                    </Selected>
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="time"
                    />
                  </FieldWrapper>
                </BlockRight>
              </TopBlocks>

              <FieldArray
                name="ingredients"
                render={arrayHelpers => (
                  <>
                    <Title>
                      Ingredients
                      <Counter arrayHelpers={arrayHelpers} values={values} />
                    </Title>
                    <Ingredients>
                      {newRecipe.ingredients &&
                        newRecipe.ingredients.map((item, index) => (
                          <SelectIngredient
                            key={index}
                            index={index}
                            arrayHelpers={arrayHelpers}
                            errors={errors}
                          />
                        ))}
                    </Ingredients>
                  </>
                )}
              />

              <Title>Recipe Preparation</Title>
              <FieldWrapper className="instructions">
                <Field
                  name="instructions"
                  placeholder="Enter recipe"
                  as="textarea"
                  value={instructions}
                />
                <ErrorMessage
                  className="error"
                  component="div"
                  name="instructions"
                />
              </FieldWrapper>

              <ButtonContainer>
                <Button className="type5" type="submit">
                  Add
                </Button>
                {createRecipeLoading && <LoaderSmall name="new-recipe" />}
              </ButtonContainer>

              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          );
        }}
      </Formik>
    </AddRecipeFormStyled>
  );
};

export default AddRecipeForm;
