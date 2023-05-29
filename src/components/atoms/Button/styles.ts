import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

type ContainerProps = {
  disabled: boolean;
  color: 'primary' | 'secondary';
};

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color }) => css`
    position: relative;

    flex-direction: row;
    align-items: center;

    width: 100%;
    height: ${RFValue(60)}px;
    padding: 0 ${RFValue(6)}px;

    background: ${color === 'primary'
      ? theme.colors.button
      : theme.colors.yellow};
    border-radius: ${RFValue(6)}px;
  `}
`;

export const WrapperText = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: ${RFValue(11)}px ${RFValue(12)}px;
`;

export const Text = styled.Text<ContainerProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.fonts.primarySemiBold};
    font-size: ${RFValue(16)}px;
    color: ${color === 'primary' ? theme.colors.white : theme.colors.black};
    text-align: center;
    text-transform: uppercase;
  `}
`;

export const Timer = styled.Text<ContainerProps>`
  ${({ theme, color }) => css`
    width: ${RFValue(78)}px;

    font-family: ${theme.fonts.primarySemiBold};
    font-size: ${RFValue(16)}px;
    color: ${color === 'primary' ? theme.colors.white : theme.colors.black};
    text-align: center;
    text-transform: uppercase;
  `}
`;

export const WrapperIcon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(13)}px;
`;
