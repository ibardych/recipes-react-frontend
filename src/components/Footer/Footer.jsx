import {
  BlockLeft,
  BlockMiddle,
  BlockRight,
  FieldWrapper,
  FooterCopyright,
  FooterForm,
  FooterNavi,
  FooterNaviLink,
  FooterSocials,
  FooterStyled,
  FooterText,
  FooterTitle,
  InputField,
  LogoFooter,
  Project,
  SubscribeText,
  SubscribeTitle,
  WebsiteName,
} from './Footer.styled';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FooterWrapper } from './Footer.styled';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { Button } from 'components/Styled';
import { useSelector } from 'react-redux';
import { selectDeviceType } from 'redux/general/selectors';
import Sprite from 'images/sprite.svg';

const Footer = () => {
  const [projectOpened, setProjectOpened] = useState(false);
  const deviceType = useSelector(selectDeviceType);

  const toggleTeam = () => {
    setProjectOpened(!projectOpened);
  };

  const closeModal = e => {
    setProjectOpened(false);
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return (
    <>
      <FooterStyled>
        <FooterWrapper>
          <BlockLeft>
            <FooterTitle>
              <LogoFooter />
              <WebsiteName>So Yummy</WebsiteName>
            </FooterTitle>

            {deviceType !== 'mobile' && (
              <FooterText>
                <li>Database of recipes that can be replenished</li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </FooterText>
            )}
          </BlockLeft>

          <BlockMiddle>
            <FooterNavi>
              <li>
                <FooterNaviLink to="/categories">Categories</FooterNaviLink>
              </li>
              <li>
                <FooterNaviLink to="/add">Add recipes</FooterNaviLink>
              </li>
              <li>
                <FooterNaviLink to="/my">My recipes</FooterNaviLink>
              </li>
              <li>
                <FooterNaviLink to="/favorite">Favorite</FooterNaviLink>
              </li>
              <li>
                <FooterNaviLink to="/shopping-list">
                  Shopping list
                </FooterNaviLink>
              </li>
            </FooterNavi>

            {deviceType === 'desktop' && (
              <FooterSocials>
                <li>
                  <BsFacebook className="icon" />
                </li>
                <li>
                  <BsInstagram className="icon" />
                </li>
                <li>
                  <BsYoutube className="icon" />
                </li>
                <li>
                  <BsTwitter className="icon" />
                </li>
              </FooterSocials>
            )}
          </BlockMiddle>

          <BlockRight>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </SubscribeText>{' '}
            <FooterForm>
              <FieldWrapper>
                <InputField
                  type="text"
                  placeholder="Enter your email address"
                />
                <svg className="icon">
                  <use href={`${Sprite}#icon-mail`}></use>
                </svg>
              </FieldWrapper>
              <Button type="submit" className="type3 button">
                Subscribe
              </Button>
            </FooterForm>
            {deviceType !== 'desktop' && (
              <FooterSocials>
                <li>
                  <BsFacebook className="icon" />
                </li>
                <li>
                  <BsInstagram className="icon" />
                </li>
                <li>
                  <BsYoutube className="icon" />
                </li>
                <li>
                  <BsTwitter className="icon" />
                </li>
              </FooterSocials>
            )}
          </BlockRight>
        </FooterWrapper>
      </FooterStyled>
      <FooterCopyright>
        <ul>
          <li>© 2023 All Rights Reserved</li>
          <li>
            <p>
              Made by{' '}
              <span className="name" onClick={toggleTeam}>
                Iurii Bardych
              </span>
            </p>
          </li>
        </ul>
      </FooterCopyright>
      <Project onClick={closeModal} className={projectOpened ? 'opened' : ''}>
        <div className="wrapper">
          <div>Project Description</div>
          <IoMdClose />
        </div>
      </Project>
    </>
  );
};

export default Footer;
