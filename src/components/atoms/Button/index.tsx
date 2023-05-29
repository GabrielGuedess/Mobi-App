import { useEffect } from 'react';

import { Animated, Easing } from 'react-native';

import { useTheme } from 'styled-components/native';

import { CircleNotch } from 'phosphor-react-native';

import * as S from './styles';
import { type ButtonProps } from './types';

export const Button = ({
  title,
  color = 'primary',
  timer = '',
  disabled = false,
  isLoading = false,
  onPress,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  const spinValue = new Animated.Value(0);

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  useEffect(() => {
    spin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <S.Container
      color={color}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      {...props}
    >
      {isLoading ? (
        <S.WrapperIcon>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <CircleNotch
              size={24}
              color={color === 'primary' ? colors.white : colors.black}
            />
          </Animated.View>
        </S.WrapperIcon>
      ) : (
        <S.WrapperText>
          {!!timer && (
            <S.Timer color={color} disabled={disabled}>
              {timer}
            </S.Timer>
          )}
          <S.Text color={color} disabled={disabled}>
            {title}
          </S.Text>
        </S.WrapperText>
      )}
    </S.Container>
  );
};
