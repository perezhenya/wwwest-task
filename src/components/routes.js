import Main from './Main';
import News from './News';
import Profile from './Profile';
import Authentication from './Authentication';

export default [
    {
        path: "/",
        exact: true,
        component: Main,
    },
    {
        path: "/news",
        exact: true,
        component: News,
    },
    {
        path: "/profile",
        exact: true,
        component: Profile,
        private: true,
    },
    {
        path: "/login",
        exact: true,
        component: Authentication
    },

]


