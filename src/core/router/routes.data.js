import { AboutUs } from '@/components/screens/about-us/AboutUs.component'
import { Auth } from '@/components/screens/auth/auth.component.js'
import { Home } from '@/components/screens/home/home.component'

export const ROUTES = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/auth',
		component: Auth
	},
	{
		path: '/about-us',
		component: AboutUs
	}
]
