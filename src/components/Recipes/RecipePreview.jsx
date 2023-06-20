import {
  Description,
  Image,
  RecipePreviewStyled,
  Title,
  Wrapper,
} from './RecipePreview.styled';

const RecipePreview = ({ recipe, type }) => {
  const { _id, preview, description, title } = recipe;

  return (
    <RecipePreviewStyled to={`/recipe/${_id}`}>
      <Image className="recipe-image" url={preview}></Image>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </RecipePreviewStyled>
  );
};

export default RecipePreview;
