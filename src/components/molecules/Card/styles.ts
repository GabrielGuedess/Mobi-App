import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Wrapper = styled(RectButton)`
  ${({ theme }) => css`
    position: relative;

    width: ${(Dimensions.get('window').width - RFValue(12 * 3)) / 2}px;
    height: ${RFValue(134)}px;

    background: ${theme.colors.gray};
    border-radius: ${RFValue(6)}px;
  `}
`;

export const WrapperViews = styled.View`
  gap: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 75%;
`;

export const TextViews = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.white};
  `}
`;

export const WrapperTitle = styled.View`
  position: absolute;
  bottom: 0;

  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${RFValue(14)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.white};
    text-align: center;
    text-transform: uppercase;
  `}
`;
