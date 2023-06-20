import styled from '@emotion/styled';
import { colors } from 'constants';
import { animation } from 'constants/animation';
import { mediaSizes } from 'constants/media';
import { ishidden, transition } from 'helpers';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  ${transition('visible', 'opacity')};
  ${props => {
    if (props.modalClosing) return 'opacity: 0';
  }};
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(7px);

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  &.is-hidden {
    ${ishidden};

    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
      -webkit-animation: bounce_out 3000ms linear both;
      animation: bounce_out 3000ms linear both;
    }
  }

  & .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: calc(100% - 40px);
    max-width: 500px;
    transform: translateX(-50%) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
    }
  }

  & .inner {
    height: 100%;
    transform: scale(1);
    ${transition('transform')};
    overflow: hidden;
    padding: 60px 50px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? colors.color6 : '#ffffff'};
    overflow: hidden;
    position: relative;
    border-radius: 30px;
    -webkit-animation: bounce_in 1500ms ease-in-out both;
    animation: bounce_in 1500ms ease-in-out both;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${mediaSizes.tablet}) {
    }
  }

  & .close {
    position: absolute;
    border: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    top: 24px;
    right: 24px;
    ${transition('transform')}
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &__icon {
      fill: transparent;
      stroke: ${({ theme }) =>
        theme === 'dark' ? colors.color7 : 'rgba(0, 0, 0, 0.8)'};
      stroke-width: 2;
      width: 30px;
      height: 30px;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
    }
  }

  ${animation}
`;
