import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: ${getStatusBarHeight() + RFValue(12)}px ${RFValue(12)}px
      ${RFValue(12)}px ${RFValue(12)}px;

    background: ${theme.colors.gray};
  `}
`;

export const WrapperIcon = styled(RectButton)`
  padding: 8px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(22)}px;
    color: ${theme.colors.white};
    text-transform: uppercase;
  `}
`;
