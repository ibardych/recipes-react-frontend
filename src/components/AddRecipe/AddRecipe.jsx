import {
  AddRecipeStyled,
  PopularRecipesWrapper,
  SocialIcons,
} from './AddRecipe.styled';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Title } from 'components/AddRecipeForm/AddRecipeForm.styled';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import { useSelector } from 'react-redux';
import { selectDeviceType } from 'redux/general/selectors';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const AddRecipe = () => {
  const deviceType = useSelector(selectDeviceType);

  return (
    <AddRecipeStyled>
      <AddRecipeForm />
      <PopularRecipesWrapper>
        {deviceType === 'desktop' && (
          <>
            <Title className="follow-us">Follow us</Title>
            <SocialIcons>
              <li>
                <NavLink to="/">
                  <BsFacebook className="icon" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <BsInstagram className="icon" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <BsYoutube className="icon" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <BsTwitter className="icon" />
                </NavLink>
              </li>
            </SocialIcons>
          </>
        )}
        <Title>Popular recipe</Title>
        <PopularRecipes />
      </PopularRecipesWrapper>
    </AddRecipeStyled>
  );
};

export default AddRecipe;
