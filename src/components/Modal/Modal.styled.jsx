import styled from '@emotion/styled';
import { animation } from 'constants/animation';
import { mediaSizes } from 'constants/media';
import { ishidden, transition } from 'helpers';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  ${transition('visible', 'opacity')};
  ${props => {
    if (props.modalClosing) return 'opacity: 0';
  }};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 100%;
    z-index: 5;
    top: 0;
    background-color: rgba(33, 33, 33, 0.12);
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
    width: 100%;
    transform: translateX(-50%) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 672px;
      height: auto;
      max-width: calc(100% - 24px * 2);
      transform: translateX(-50%) translateY(-50%);
    }
  }

  & .inner {
    height: 100%;
    transform: scale(1);
    ${transition('transform')};
    overflow: hidden;
    padding: 80px 40px;
    background-color: #ffffff;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
    -webkit-animation: bounce_in 1500ms ease-in-out both;
    animation: bounce_in 1500ms ease-in-out both;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
      padding: 64px 82px 82px 82px;
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

    &:hover {
      transform: scale(1.2);
    }

    &__icon {
      fill: #000000;
      width: 30px;
      height: 30px;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
    }
  }

  ${animation}
`;
