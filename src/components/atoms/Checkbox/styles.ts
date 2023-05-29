import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

import { type CheckboxProps } from './types';

export const Wrapper = styled(TouchableOpacity)<CheckboxProps>`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;

    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
    margin-left: ${RFValue(16)}px;

    background: ${theme.colors.checkbox};
  `}
`;
