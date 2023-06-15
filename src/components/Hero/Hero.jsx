import Searchbar from 'components/Searchbar/Searchbar';
import { HeroBackground, HeroStyled, HeroWrapper } from './Hero.styled';
import Sprite from 'images/sprite.svg';
import bg1Mobile from 'images/Hero/bg1-mobile@2x.png';
import bg1Tablet from 'images/Hero/bg1-tablet@2x.png';
import bg2Mobile from 'images/Hero/bg2-mobile@2x.png';
import bg3Mobile from 'images/Hero/bg3-mobile@2x.png';
import bg4Tablet from 'images/Hero/bg4-tablet@2x.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDeviceType } from 'redux/general/selectors';

const Hero = () => {
  const deviceType = useSelector(selectDeviceType);

  return (
    <HeroStyled>
      <HeroBackground>
        <svg className="bg0">
          <use href={`${Sprite}#bg-type1`}></use>
        </svg>
        <svg className="bg0-desktop">
          <use href={`${Sprite}#bg-type2`}></use>
        </svg>
        {deviceType === 'mobile' && (
          <img className="bg1" src={bg1Mobile} alt="bg" />
        )}
        {(deviceType === 'tablet' || deviceType === 'desktop') && (
          <img className="bg1-tablet" src={bg1Tablet} alt="bg" />
        )}
        <img className="bg2" src={bg2Mobile} alt="bg" />
        <img className="bg3" src={bg3Mobile} alt="bg" />
        {(deviceType === 'tablet' || deviceType === 'desktop') && (
          <img className="bg4-tablet" src={bg4Tablet} alt="bg" />
        )}
      </HeroBackground>

      <HeroWrapper>
        <h1>
          <span>So</span>Yummy
        </h1>
        <div className="hero-text">
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </div>
        <div className="hero-card">
          <div>
            <span>Delicious and healthy</span> way to enjoy a variety of fresh
            ingredients in one satisfying meal
          </div>
          <NavLink to="/">
            See recipes
            <svg className="icon">
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </NavLink>
        </div>
        <Searchbar />
      </HeroWrapper>
    </HeroStyled>
  );
};

export default Hero;
