import { useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-toast-message';

import { Foundation } from '@expo/vector-icons';

import { useTheme } from 'styled-components/native';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Gear, Lock, UserCircle } from 'phosphor-react-native';
import { z } from 'zod';

import { useAuth } from 'hooks/useAuth';

import { Button } from 'components/atoms/Button';
import { Checkbox } from 'components/atoms/Checkbox';
import { Input } from 'components/atoms/Input';

import Background from 'assets/svg/background.svg';
import Logo from 'assets/svg/logo-mobi-logistica.svg';

import * as S from './styles';

const signInSchema = z.object({
  email: z
    .string({ required_error: 'E-mail é obrigatório' })
    .email({ message: 'E-mail é invalido' })
    .max(50, 'O E-mail só pode ter no máximo 15 caracteres'),
  password: z
    .string({ required_error: 'Nova senha é obrigatório' })
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type SignInSchemaProps = z.infer<typeof signInSchema>;

export const SignIn = () => {
  const [time, setTime] = useState(new Date());
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { colors } = useTheme();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaProps>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn = async ({ email, password }: SignInSchemaProps) => {
    try {
      setIsLoading(true);

      await signIn(email, password);
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'E-mail ou senha incorretos!',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Wrapper>
        <S.Header>
          <S.WrapperIcon>
            <ArrowLeft size={24} color={colors.white} weight="bold" />
          </S.WrapperIcon>

          <S.WrapperIcon>
            <Gear size={24} color={colors.white} weight="fill" />
          </S.WrapperIcon>
        </S.Header>

        <S.WrapperSectionLogo>
          <Background style={{ width: '100%', height: 165, zIndex: -1 }} />

          <Logo
            style={{
              position: 'absolute',
              bottom: 40,
              width: 195,
              height: 104,
            }}
          />
        </S.WrapperSectionLogo>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Form>
            <S.Inputs>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    icon={<UserCircle size={24} />}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Digite o seu usuário"
                    onChangeText={onChange}
                    value={value}
                    isInvalid={!!errors.email?.message}
                    messageError={errors.email?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    icon={<Lock size={24} />}
                    placeholder="Digite a seu senha"
                    isPassword
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    isInvalid={!!errors.password?.message}
                    messageError={errors.password?.message}
                  />
                )}
              />
            </S.Inputs>

            <S.WrapperCheckbox>
              <Checkbox
                onPress={() => setIsCheck(!isCheck)}
                checked={isCheck}
              />
              <S.CheckBoxText>Lembrar Autenticação</S.CheckBoxText>
            </S.WrapperCheckbox>

            <S.Buttons>
              <Button
                title="Login"
                isLoading={isLoading}
                disabled={isLoading}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onPress={handleSubmit(handleSignIn)}
              />
              <Button
                color="secondary"
                timer={time.toLocaleTimeString()}
                title="Registrar ponto"
              />
            </S.Buttons>

            <S.Token>
              <Foundation name="key" size={24} color="black" />
              <S.TextToken>MobiToken</S.TextToken>
            </S.Token>
          </S.Form>
        </ScrollView>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
};
