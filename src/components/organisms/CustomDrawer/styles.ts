import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

import { rgba } from 'polished';

export const Wrapper = styled.View`
  flex: 1;
`;

export const WrapperUserInfo = styled.View`
  ${({ theme }) => css`
    gap: ${RFValue(16)}px;
    width: 100%;
    padding: ${getStatusBarHeight() + RFValue(16)}px ${RFValue(16)}px
      ${RFValue(16)}px ${RFValue(16)}px;
    background: ${theme.colors.gray};
  `}
`;

export const WrapperPhoto = styled.TouchableOpacity`
  position: relative;
  width: ${RFValue(80)}px;
  border-radius: ${RFValue(80)}px;
`;

export const EditButton = styled.View`
  ${({ theme }) => css`
    position: absolute;
    right: 0;

    padding: ${RFValue(5)}px;

    background: ${theme.colors.yellow};
    border-radius: ${RFValue(20)}px;
  `}
`;

export const Photo = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(80)}px;
`;

export const UserInfo = styled.View`
  gap: ${RFValue(3)}px;
  width: 100%;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
  `}
`;

export const Email = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(14)}px;
    color: ${rgba(theme.colors.white, 0.7)};
  `}
`;

export const WrapperLogout = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${RFValue(20)}px;
  padding: ${RFValue(20)}px;
  background: #f9f9f9;
`;

export const LogoutText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray};
  `}
`;
