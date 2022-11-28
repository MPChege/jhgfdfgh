import Contact from './components/Contact.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    }
]
HelloWorld