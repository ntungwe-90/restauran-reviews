 import HomePage from '@/pages/home.vue'; 
 import LoginPage from '@/pages/login.vue';
 import RegisterPage from '@/pages/register.vue';
 import DetailsPage from '@/pages/details.vue'


const routes = [
     {
        name: 'home',
         path: '/',
        component: HomePage
    },

    {
        name: 'login',
         path: '/login',
        component: LoginPage
    },
    {
        name: 'register',
         path: '/register',
        component: RegisterPage
    },

    {
        name: 'details',
         path: '/details',
        component: DetailsPage
    }
]
export default routes;