import { Button } from 'components/Styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
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
import { createOwnRecipe } from 'redux/ownRecipes/operations';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const newRecipe = useSelector(selectNewRecipe);
  const { image, fileData, title, description, category, time, instructions } =
    newRecipe;
  const ingredients = newRecipe.ingredients.slice();
  const [file, setFile] = useState(null);

  const initialValues = useMemo(() => {
    return {
      image: '',
      fileData: '',
      title: '',
      description: '',
      category: '',
      time: '5 min',
      instructions: '',
    };
  }, []);

  const defaultIngredient = useMemo(() => {
    return {
      searchQuery: '',
      ingredient: '',
      ingredientId: null,
      measure: '',
      measureType: 'g',
      modalOpened: false,
    };
  }, []);

  useEffect(() => {
    if (categories[0]?.name !== undefined && !newRecipe.category) {
      dispatch(setNewRecipe({ ...newRecipe, category: categories[0].name }));
    }

    if (newRecipe.ingredients.length === 0) {
      dispatch(
        setNewRecipe({ ...initialValues, ingredients: [defaultIngredient] })
      );
    }
  }, [categories, defaultIngredient, dispatch, initialValues, newRecipe]);

  const [selectCategoryOpened, setSelectCategoryOpened] = useState(false);
  const [selectTimeOpened, setSelectTimeOpened] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required('Title is a required field'),
    description: yup.string().required('Description is a required field'),
    // category: yup.string().required('Category is a required field'),
    time: yup.string().required('Time is a required field'),
  });

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'image':
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
          dispatch(setNewRecipe({ ...newRecipe, image: reader.result }));
          setFile(file);
        };
        reader.readAsDataURL(file);
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
        if (name.startsWith('measure[')) {
          const index = name.match(/\[(\d+)\]/)[1];
          ingredients[index] = {
            ...ingredients[index],
            measure: value,
          };
          dispatch(setNewRecipe({ ...newRecipe, ingredients }));
        }
        if (name.startsWith('ingredient[')) {
          const index = name.match(/\[(\d+)\]/)[1];
          ingredients[index] = {
            ...ingredients[index],
            ingredient: value,
            searchQuery: value,
          };
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
  };

  const openSelectTime = () => {
    setSelectTimeOpened(!selectTimeOpened);
  };

  const selectTime = time => {
    dispatch(setNewRecipe({ ...newRecipe, time }));
  };

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const FileInput = forwardRef(({ name }, ref) => (
    <input
      type="file"
      accept=".jpg,.jpeg,.png"
      style={{ display: 'none' }}
      ref={ref}
      name={name}
    />
  ));

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(file);
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('time', time);
    formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('instructions', instructions);

    // const blob = new Blob([JSON.stringify(Object.fromEntries(formData))], {
    //   type: 'application/json',
    // });

    // const sendData = new FormData();
    // sendData.append('payload', blob);

    dispatch(createOwnRecipe(formData));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" onChange={handleOnChange}>
          <AddImage onClick={handleFileClick} image={image}>
            {!image && (
              <svg className="icon">
                <use href={`${Sprite}#icon-photo`}></use>
              </svg>
            )}
          </AddImage>
          <FileInput ref={fileInputRef} name="image" />

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
            <ErrorMessage className="error" component="div" name="time" />
          </FieldWrapper>

          <Title>
            Ingredients
            <Counter defaultIngredient={defaultIngredient} />
          </Title>
          <Ingredients>
            {newRecipe.ingredients &&
              newRecipe.ingredients.map((item, index) => (
                <SelectIngredient key={index} index={index} />
              ))}
          </Ingredients>

          <Title>Recipe Preparation</Title>
          <FieldWrapper className="select">
            <Field
              name="instructions"
              placeholder="Enter recipe"
              as="textarea"
              value={instructions}
            />
          </FieldWrapper>

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