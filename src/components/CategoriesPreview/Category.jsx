import { Button } from 'components/Styled';
import { CategoryStyled, CategoryTitle } from './CategoriesPreview.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { useSelector } from 'react-redux';
import { selectDeviceType } from 'redux/general/selectors';
import { useNavigate } from 'react-router-dom';
import RecipeThumb from 'components/Recipes/RecipeThumb';

const Category = ({ categoryName, category, last }) => {
  const navigate = useNavigate();
  const deviceType = useSelector(selectDeviceType);

  let slidesPerView = 1;
  let slidesPerGroup = 1;
  if (deviceType === 'tablet') {
    slidesPerView = 2;
    slidesPerGroup = 2;
  }
  if (deviceType === 'desktop') {
    slidesPerView = 4;
    slidesPerGroup = 4;
  }

  const showAll = categoryName => {
    navigate(`/categories/${categoryName}`);
  };

  return (
    <CategoryStyled className={last ? 'last' : ''}>
      <CategoryTitle>{categoryName}</CategoryTitle>
      <Swiper
        spaceBetween={32}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        navigation
        className="slider"
      >
        {category.map(recipe => (
          <SwiperSlide key={recipe._id}>
            <RecipeThumb recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className="type3 all" onClick={() => showAll(categoryName)}>
        See all
      </Button>
    </CategoryStyled>
  );
};

export default Category;
