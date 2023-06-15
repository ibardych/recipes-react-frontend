// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LinkStyled, CategoryNaviStyled } from './CategoryNavi.styled';
import { selectCategories } from 'redux/recipes/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { selectDeviceType } from 'redux/general/selectors';

const CategoryNavi = () => {
  const categories = useSelector(selectCategories);
  const deviceType = useSelector(selectDeviceType);

  let spaceBetween = 8;
  if (deviceType === 'tablet' || deviceType === 'desktop') {
    spaceBetween = 23;
  }

  return (
    <>
      <CategoryNaviStyled>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={spaceBetween}
          modules={[Mousewheel, Keyboard]}
          mousewheel={true}
          keyboard={true}
          direction="horizontal"
          className="slider"
        >
          {categories.map(category => (
            <SwiperSlide key={category._id} className="slide">
              <LinkStyled to={`/categories/${category.name}`}>
                {category.name}
              </LinkStyled>
            </SwiperSlide>
          ))}
          {categories.map(category => (
            <SwiperSlide key={`${category._id}-1`} className="slide">
              <LinkStyled to={`/categories/${category.name}`}>
                {category.name}
              </LinkStyled>
            </SwiperSlide>
          ))}
        </Swiper>
      </CategoryNaviStyled>
    </>
  );
};

export default CategoryNavi;
