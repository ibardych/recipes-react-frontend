import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { hexToRgb, transition } from 'helpers';

export const AddRecipeFormStyled = styled.div`
  width: 100%;
`;

export const TopBlocks = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    gap: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const BlockLeft = styled.div``;

export const BlockRight = styled.div`
  flex-basis: 100%;
`;

export const AddImage = styled.div`
  width: 279px;
  height: 268px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  background: url(${({ image }) => image}) no-repeat center ${colors.color1};
  background-size: cover;

  & .icon {
    width: 64px;
    height: 64px;
    fill: transparent;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  margin-bottom: 20px;
  min-height: 44px;

  & .label {
    position: absolute;
    top: 18px;
    left: 0;
    padding-left: 1px;
    font-size: 14px;
    line-height: 1.5;
    ${transition('opacity', 'transform', 'font-size')};
    font-weight: 300;
    pointer-events: none;
    color: rgba(${hexToRgb('#000000')}, 0.5);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 16px;
    }

    /* & .star {
      color: $brandcolor;
      padding-left: 3px;
      font-weight: 500;
    } */
  }

  & input {
    display: block;
    width: 100%;
    outline: none;
    resize: none;
    border: none;
    font-size: 16px;
    color: #333;
    padding: 0px 0px 5px 0px;
    border-bottom: 1px solid ${colors.color3};
    background-color: transparent;
    transition: border-color 250ms ease-in-out;

    &:focus {
      border-bottom: 1px solid ${colors.color1};
    }

    &:focus + label {
      opacity: 0.3;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-20px);
      font-size: 13px;
      opacity: 1;
    }

    &:not(:placeholder-shown) {
      border-bottom: 1px solid #cdcdcd;
    }
  }

  &.select input {
    display: none;

    &:not(:placeholder-shown) + label {
      transform: translateY(0px);
      font-size: 14px;
      opacity: 1;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        font-size: 16px;
      }
    }
  }

  &.select label {
    width: 100%;
    padding-bottom: 4px;
    border-bottom: 1px solid ${colors.color3};
  }

  &.instructions {
    padding-top: 0;
  }

  & textarea {
    display: block;
    width: 100%;
    height: 154px;
    outline: none;
    resize: none;
    border: none;
    font-size: 16px;
    line-height: 1.4;
    color: #333;
    padding: 10px 16px;
    background-color: rgba(${hexToRgb(colors.color17)}, 0.157);
    transition: border-color 250ms ease-in-out;
    border-radius: 6px;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 18px;
      height: 224px;
    }

    &::placeholder {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);

      @media screen and (min-width: ${mediaSizes.desktop}) {
        font-size: 18px;
      }
    }
  }

  & .error {
    color: ${colors.color10};
    font-size: 12px;
    margin-top: 1px;
    line-height: 1.4;
  }
`;

export const Selected = styled.div`
  position: absolute;
  top: 18px;
  right: 0;
  font-size: 12px;
  line-height: 1;
  color: #000;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
  }

  & .icon {
    width: 20px;
    height: 20px;
    stroke: ${colors.color1};
    fill: transparent;
  }
`;

export const SelectItems = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 123px;
  max-height: 144px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
  overflow-y: auto;
  padding: 8px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(${hexToRgb('#000000')}, 0.5);
  z-index: 1;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 140px;
    padding: 10px 16px;
    font-size: 14px;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 6px;
    padding: 10px 16px;
    font-size: 14px;
  }

  & .active {
    color: ${colors.color1};
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-top: 60px;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 50px;
  }
`;
