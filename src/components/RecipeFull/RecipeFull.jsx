// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { PreparationSteps, RecipeFullStyled, Step } from './RecipeFull.styled';
import { useParams } from 'react-router-dom';
import { selectRecipe } from 'redux/recipes/selectors';
import { useEffect } from 'react';
import { getRecipeById } from 'redux/recipes/operations';
import RecipeHeader from './RecipeHeader';
import Ingredients from './Ingredients';
import { PageTitle } from 'components/Styled/PageTitle.styled';
import BACKEND_URL from 'constants/backend.url';
import { selectDeviceType } from 'redux/general/selectors';

const RecipeFull = ({ recipes }) => {
  const dispatch = useDispatch();
  let { recipeId } = useParams();
  const deviceType = useSelector(selectDeviceType);
  const recipe = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId]);

  return (
    <RecipeFullStyled>
      <RecipeHeader />
      <Ingredients />
      <PageTitle>Recipe Preparation</PageTitle>

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
    </RecipeFullStyled>
  );
};

export default RecipeFull;
