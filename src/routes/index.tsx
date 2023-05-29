import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from 'screens/SignIn';

import { useAuth } from 'hooks/useAuth';

import { Loading } from 'components/atoms/Loading';

import { MyDrawer } from './drawer.routes';

export const Routes = () => {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      {user?.id ? <MyDrawer /> : <SignIn />}
    </NavigationContainer>
  );
};
