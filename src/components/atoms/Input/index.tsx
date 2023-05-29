import { useState } from 'react';

import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Eye, EyeClosed } from 'phosphor-react-native';

import * as S from './styles';
import { type InputProps } from './types';

export const Input = ({
  icon,
  messageError,
  isPassword = false,
  isInvalid = false,
  ...props
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { colors } = useTheme();

  return (
    <View>
      <S.Container isInvalid={isInvalid}>
        {!!icon && <S.IconSearchWrapper>{icon}</S.IconSearchWrapper>}

        <S.Input
          selectionColor={colors.yellow}
          placeholderTextColor={colors.gray}
          secureTextEntry={!isVisible && isPassword}
          {...props}
        />

        {isPassword && (
          <S.IconPasswordWrapper onPress={() => setIsVisible(!isVisible)}>
            {isVisible ? (
              <EyeClosed size={24} />
            ) : (
              <Eye size={24} weight="fill" />
            )}
          </S.IconPasswordWrapper>
        )}
      </S.Container>

      {!!messageError && <S.Error>{messageError}</S.Error>}
    </View>
  );
};
