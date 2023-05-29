import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
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

export const WrapperSectionLogo = styled.View`
  position: relative;
  align-items: center;
  width: 100%;
`;

export const Form = styled.View`
  gap: ${RFValue(15)}px;
  margin-top: ${RFValue(12)}px;
  padding: 0 ${RFValue(12)}px;
`;

export const WrapperCheckbox = styled.View`
  flex-direction: row;
  gap: ${RFValue(15)}px;
`;

export const CheckBoxText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.gray};
  `}
`;

export const Inputs = styled.View`
  gap: ${RFValue(10)}px;
`;

export const Buttons = styled.View`
  gap: ${RFValue(10)}px;
`;

export const Token = styled.View`
  gap: ${RFValue(3)}px;
  align-items: center;
  justify-content: center;
`;

export const TextToken = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primarySemiBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.gray};
  `}
`;
