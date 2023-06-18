// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LinkStyled, CategoryNaviStyled } from './CategoryNavi.styled';
import { selectCategories } from 'redux/recipes/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { selectDeviceType } from 'redux/general/selectors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CategoryNavi = () => {
  const categories = useSelector(selectCategories);
  const deviceType = useSelector(selectDeviceType);
  const [swiper, setSwiper] = useState(null);
  const { category } = useParams();

  let spaceBetween = 8;
  if (deviceType === 'tablet' || deviceType === 'desktop') {
    spaceBetween = 23;
  }

  useEffect(() => {
    if (swiper) {
      const index = categories.findIndex(({ name }) => name === category);
      swiper.slideTo(index, 500);
    }
  }, [categories, category, swiper]);

  const handleSwiper = swiper => {
    setSwiper(swiper);
    const index = categories.findIndex(({ name }) => name === category);
    swiper.slideTo(index);
  };

  return (
    <>
      <CategoryNaviStyled>
        <Swiper
          onSwiper={handleSwiper}
          slidesPerView={'auto'}
          spaceBetween={spaceBetween}
          modules={[Mousewheel, Keyboard, Navigation]}
          mousewheel={true}
          keyboard={true}
          direction="horizontal"
          className="slider"
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            disabledClass: 'swiper-button-disabled',
          }}
        >
          {categories.map(category => (
            <SwiperSlide key={category._id} className="slide">
              <LinkStyled to={`/categories/${category.name}`}>
                {category.name}
              </LinkStyled>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev swiper-button prev"></div>
        <div className="swiper-button-next swiper-button next"></div>
      </CategoryNaviStyled>
    </>
  );
};

export default CategoryNavi;
