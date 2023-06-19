// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Preparation,
  PreparationSteps,
  RecipeBody,
  RecipeFullStyled,
  Step,
} from './RecipeFull.styled';
import { useParams } from 'react-router-dom';
import { selectRecipe } from 'redux/recipes/selectors';
import { useEffect } from 'react';
import { getRecipeById } from 'redux/recipes/operations';
import RecipeHeader from './RecipeHeader';
import Ingredients from './Ingredients';
import { PageSubTitle } from 'components/Styled/PageTitle.styled';
import BACKEND_URL from 'constants/backend.url';
import { selectDeviceType } from 'redux/general/selectors';
import { LoaderSmall } from 'components/Loader/Loader';

const RecipeFull = () => {
  const dispatch = useDispatch();
  let { recipeId } = useParams();
  const deviceType = useSelector(selectDeviceType);
  const recipe = useSelector(selectRecipe);
  const recipeLoading = useSelector(state => state.recipes.recipeLoading);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId]);

  return (
    <>
      {recipeLoading ? (
        <LoaderSmall scale="1" top="100px" />
      ) : (
        recipe &&
        recipeId === recipe._id && (
          <RecipeFullStyled>
            <RecipeHeader />
            <RecipeBody>
              <Ingredients />
              <PageSubTitle>Recipe Preparation</PageSubTitle>
              <Preparation>
                <PreparationSteps>
                  {recipe.instructions &&
                    recipe.instructions.map((item, key) => {
                      return item ? (
                        <Step key={key}>
                          <span className="number">{key + 1}</span>
                          {item}
                        </Step>
                      ) : (
                        ''
                      );
                    })}
                </PreparationSteps>

                <img
                  className="recipe-image"
                  src={`${recipe.owner !== undefined ? BACKEND_URL + '/' : ''}${
                    deviceType === 'mobile' ? recipe.preview : recipe.thumb
                  }`}
                  alt={recipe.title}
                />
              </Preparation>
            </RecipeBody>
          </RecipeFullStyled>
        )
      )}
    </>
  );
};

export default RecipeFull;
