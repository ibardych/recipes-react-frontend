import { Button } from 'components/Styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import { selectDeviceType } from 'redux/general/selectors';
import { useNavigate } from 'react-router-dom';
import RecipeThumb from 'components/Recipes/RecipeThumb';
import {
  CategoryStyled,
  CategoryTitle,
  SliderWrapper,
} from './Category.styled';

const Category = ({ categoryName, category, last, index }) => {
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
      <SliderWrapper>
        <Swiper
          spaceBetween={32}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          className="slider"
          modules={[Mousewheel, Keyboard, Navigation]}
          mousewheel={false}
          keyboard={false}
          navigation={{
            prevEl: `.swiper-button-prev-${index}`,
            nextEl: `.swiper-button-next-${index}`,
            disabledClass: `swiper-button-disabled`,
          }}
        >
          {category.map(recipe => (
            <SwiperSlide key={recipe._id}>
              <RecipeThumb recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`swiper-button-prev swiper-button-prev-${index} swiper-button prev`}
        ></div>
        <div
          className={`swiper-button-next swiper-button-next-${index} swiper-button next`}
        ></div>
      </SliderWrapper>
      <Button className="type3 all" onClick={() => showAll(categoryName)}>
        See all
      </Button>
    </CategoryStyled>
  );
};

export default Category;
