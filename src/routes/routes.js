 import HomePage from '@/pages/home.vue'; 
 import LoginPage from '@/pages/login.vue';
 import RegisterPage from '@/pages/register.vue';
 import DetailsPage from '@/pages/details.vue';
 import AboutPage from '@/pages/about.vue';
 import AllRestaurants from '@/pages/allRestaurants.vue'


const routes = [
     {
        name: 'home',
         path: '/',
        component: HomePage
    },

    {
        name: 'about',
         path: '/about',
        component: AboutPage
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
    },

    {
        name: 'allRestaurants',
         path: '/allRestaurants',
        component: AllRestaurants
    }
]
export default routes;