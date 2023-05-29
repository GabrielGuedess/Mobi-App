import { useTheme } from 'styled-components/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bicycle,
  Book,
  ChatText,
  Check,
  CloudArrowDown,
  Lock,
  LockOpen,
} from 'phosphor-react-native';
import { Home } from 'screens/Home';

import { CustomDrawer } from 'components/organisms/CustomDrawer';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.gray,
        drawerContentContainerStyle: { paddingTop: 0 },
        drawerActiveBackgroundColor: 'transparent',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => <Bicycle />,
        }}
        name="ITEM MENU 01"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <ArrowCircleDown />,
        }}
        name="ITEM MENU 02"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <ArrowCircleUp />,
        }}
        name="ITEM MENU 03"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <CloudArrowDown />,
        }}
        name="ITEM MENU 04"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <ChatText />,
        }}
        name="ITEM MENU 05"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Lock />,
        }}
        name="ITEM MENU 06"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Check />,
        }}
        name="ITEM MENU 07"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <LockOpen />,
        }}
        name="ITEM MENU 09"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <Book />,
        }}
        name="ITEM MENU 10"
        component={Home}
      />
    </Drawer.Navigator>
  );
};
