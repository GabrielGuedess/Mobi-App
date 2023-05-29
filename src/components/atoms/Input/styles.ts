import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isInvalid: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, isInvalid }) => css`
    position: relative;

    flex-direction: row;
    align-items: center;

    width: 100%;
    height: ${RFValue(64)}px;
    padding: 0 ${RFValue(6)}px;

    border: 1.5px solid ${isInvalid ? theme.colors.error : theme.colors.gray};
    border-radius: ${RFValue(6)}px;
  `}
`;

export const IconSearchWrapper = styled.View`
  margin-left: ${RFValue(8)}px;
`;

export const IconPasswordWrapper = styled(RectButton)`
  margin-right: ${RFValue(4)}px;
  padding: ${RFValue(4)}px;
  border-radius: 100px;
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;

    padding: ${RFValue(11)}px ${RFValue(12)}px;

    font-family: ${theme.fonts.primaryMedium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.gray};
  `}
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    margin-top: ${RFValue(5)}px;
    font-family: ${theme.fonts.primaryLight};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.error};
  `}
`;
