import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const WrapperCards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${RFValue(12)}px;
  padding: ${RFValue(12)}px;
`;
