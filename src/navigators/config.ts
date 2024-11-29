import {StackNavigationOptions} from '@react-navigation/stack';
import PageComponent from '../pages';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

interface INavigationOption {
  name: string;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
}

export const UnauthorizedScreens: INavigationOption[] = [
  {
    name: 'SignIn',
    component: Login,
  },
  {
    name: 'SignUp',
    component: Register,
  },
];

export const AuthorizedScreens: INavigationOption[] = [
  {
    name: 'Test',
    component: PageComponent,
  },
  {
    name: 'Home',
    component: Home,
    // options: {
    //   headerShown: false,
    // },
  },
];
