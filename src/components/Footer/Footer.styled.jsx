import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { animation } from 'constants/animation';
import { container, hexToRgb, transition } from 'helpers';
import { NavLink } from 'react-router-dom';
import Logo from 'images/logo.footer.svg';
import FooterBgImg1 from 'images/Footer/footer-bg1@2x.png';
import FooterBgImg2 from 'images/Footer/footer-bg2@2x.png';

export const FooterStyled = styled.footer`
  position: relative;
  margin-top: 100px;
`;

export const FooterMain = styled.div`
  width: 100%;
  position: relative;
  background: ${colors.color8};
  padding: 64px 0 50px 0;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 64px 0 50px 0;
  }

  .theme.dark & {
    background: ${colors.color1};
  }
`;

export const FooterWrapper = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: nowrap;
  }
`;

export const BlockLeft = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-right: 175px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 159px;
  }
`;

export const BlockMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 190px;
    margin-bottom: 0px;
  }
`;

export const BlockRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 72px;
    width: 100vw;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-top: 0px;
    align-items: flex-start;
    padding: 0;
    width: 338px;
  }
`;

export const FooterTitle = styled(NavLink)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 40px;
  }
`;

export const LogoFooter = styled.div`
  width: 32px;
  height: 32px;
  background: url(${Logo}) no-repeat center;
  background-size: 32px 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 44px;
    height: 44px;
    background-size: 44px 44px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const FooterText = styled.ul`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 418px;
    list-style-type: disc;
    padding-left: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 26px;
  }

  & li {
    @media screen and (min-width: ${mediaSizes.tablet}) {
      color: ${colors.color7};
      font-size: 14px;
      line-height: 1.3;
      letter-spacing: -0.02em;
      line-height: 1.3;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      line-height: 1.33;
      font-size: 18px;
    }
  }
`;

export const FooterNavi = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 20px;
    margin-bottom: 0px;
    align-items: flex-start;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 24px;
    margin-bottom: 95px;
    align-items: flex-start;
  }
`;

export const FooterNaviLink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${colors.color7};

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const FooterSocials = styled.ul`
  display: flex;
  gap: 16px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 18px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & .icon {
    fill: ${colors.color1};
    width: 20px;
    height: 20px;

    .theme.dark & {
      fill: ${colors.color7};
    }
  }
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    margin-bottom: 38px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: column;
    margin-bottom: 0px;
    width: 100%;
  }

  & .button {
    @media screen and (min-width: ${mediaSizes.tablet}) {
      height: 50px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      height: 60px;
    }

    .theme.dark & {
      background-color: ${colors.color9};
    }
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;

  & .icon {
    position: absolute;
    top: 11px;
    left: 18px;
    width: 16px;
    height: 16px;
    stroke: ${colors.color7};
    fill: transparent;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 16px;
      width: 20px;
      height: 20px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 19px;
    }
  }
`;

export const InputField = styled.input`
  border: 1px solid rgba(${hexToRgb(colors.color7)}, 0.157);
  border-radius: 6px;
  padding: 10px 15px 10px 42px;
  width: 204px;
  height: 38px;
  background: transparent;
  margin-bottom: 8px;
  margin-right: 0px;
  font-size: 10px;
  color: ${colors.color7};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 259px;
    height: 50px;
    padding: 15px 15px 15px 51px;
    margin-bottom: 0;
    margin-right: 12px;
    font-size: 14px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 18px 18px 18px 51px;
    width: 100%;
    height: 60px;
    margin-bottom: 16px;
    margin-right: 0px;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 11px;
    letter-spacing: -0.02em;
    color: ${colors.color7};
    opacity: 0.5;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 18px;
    }
  }
`;

export const WebsiteName = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;
  color: ${colors.color7};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 28px;
    line-height: 1;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 28px;
    line-height: 1;
  }
`;

export const SubscribeTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: ${colors.color7};
  display: none;
  margin-bottom: 14px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: block;
    width: 100%;
  }
`;

export const SubscribeText = styled.p`
  display: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${colors.color7};
  width: 310px;
  margin-bottom: 28px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: block;
    width: 100%;
  }
`;

export const FooterCopyright = styled.div`
  /* position: fixed; */
  width: 100%;
  left: 0;
  bottom: 0;
  padding-top: 45px;
  padding-bottom: 45px;
  position: relative;

  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: ${colors.color4};
    opacity: 0.8;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      flex-direction: row;
      gap: 10px;
    }
  }

  & li {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${colors.color5};

    .theme.dark & {
      color: #adadad;
    }

    &:not(:last-child) {
      @media screen and (min-width: ${mediaSizes.tablet}) {
        padding-right: 10px;
        border-right: 1px solid ${colors.color5};
      }
    }
  }

  & .icon {
    margin-left: 8px;
    height: 20px;
    fill: ${colors.color1};
    width: 18px;
  }

  & .name {
    cursor: pointer;
    color: ${colors.color1};
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 1);
    ${transition('color')}
    padding: 1px 3px;

    &:hover {
      color: ${colors.color1};
    }
  }
`;

export const Project = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  & .wrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 20px 0;
    background-color: ${colors.color9};
    text-align: center;
    opacity: 0;
    border-radius: 40px;
    ${transition('opacity')}
  }

  &.opened {
    pointer-events: all;
  }

  &.opened .wrapper {
    -webkit-animation: bounce_in 1500ms ease-in-out both;
    animation: bounce_in 1500ms ease-in-out both;
    opacity: 1;
    pointer-events: all;
  }

  & img {
    display: inline;
    max-width: 100%;
    width: 500px;
  }
  & svg {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    fill: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    ${transition('fill')}

    &:hover {
      fill: rgba(255, 255, 255, 1);
    }
  }

  ${animation}
`;

export const FooterBg1 = styled.div`
  width: 170px;
  height: 120px;
  background: url(${FooterBgImg1}) no-repeat top right;
  background-size: 240px auto;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  z-index: 0;
  pointer-events: none;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    background-size: 420px auto;
    width: 300px;
    height: 200px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const FooterBg2 = styled.div`
  width: 170px;
  height: 100%;
  background: url(${FooterBgImg2}) no-repeat top -70px right -30px;
  background-size: 140px auto;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  pointer-events: none;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    background: url(${FooterBgImg2}) no-repeat top -70px right -30px;
    background-size: 140px auto;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;
