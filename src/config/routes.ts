import IRoute from '../interface/routes';
import HomePage from '../pages/home';
import AccountPage from '../pages/account';
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';
import ResetPasswordPage from '../pages/auth/reset';
import ForgotPage from '../pages/auth/forgot';
import ClientPage from '../pages/client';
import VersionPage from '../pages/version';
import DataFormatPage from '../pages/dataformat';
import ServerPage from '../pages/server';
import DatabasePage from '../pages/database';
import CloudPage from '../pages/cloud';

const authRoutes: IRoute[] = [
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: LoginPage,
        auth: false
    },
    {
        name: 'Login',
        path: '/login/:showSnackbar',
        exact: true,
        component: LoginPage,
        auth: false
    },
    {
        name: 'Register',
        path: '/register',
        exact: true,
        component: RegisterPage,
        auth: false
    },
    {
        name: 'Reset Password',
        path: '/reset',
        exact: true,
        component: ResetPasswordPage,
        auth: false
    },
    {
        name: 'Forgot Password',
        path: '/forgot',
        exact: true,
        component: ForgotPage,
        auth: false
    }
];
const courseRoutes: IRoute[] = [
    {
        name: 'Client',
        path: '/client',
        exact: true,
        component: ClientPage,
        auth: false
    },
    {
        name: 'Version Control',
        path: '/version',
        exact: true,
        component: VersionPage,
        auth: false
    },
    {
        name: 'Data Format',
        path: '/dataformat',
        exact: true,
        component: DataFormatPage,
        auth: false
    },
    {
        name: 'Server',
        path: '/server',
        exact: true,
        component: ServerPage,
        auth: false
    },
    {
        name: 'Database',
        path: '/database',
        exact: true,
        component: DatabasePage,
        auth: false
    },
    {
        name: 'Cloud',
        path: '/cloud',
        exact: true,
        component: CloudPage,
        auth: false
    }
];
const mainRoutes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: HomePage,
        auth: false
    },
    {
        name: 'Account',
        path: '/account',
        exact: true,
        component: AccountPage,
        auth: false
    }
];

const routes: IRoute[] = [...mainRoutes, ...authRoutes, ...courseRoutes];

export default routes;
