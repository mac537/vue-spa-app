import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home'
import RestaurantesList from './RestaurantesList'
import RestauranteTop from './RestauranteTop'
import Restaurante from './Restaurante'
import Contacto from './Contacto'

Vue.use(VueRouter)

const routes = [
	{path: '/', component: Home},
	{path: '/home', component: Home},
	{path: '/restaurantes', component: RestaurantesList},
	{path: '/restaurante/:id', name: 'restaurante', component: Restaurante},
	{path: '/editar-restaurante/:id', name: 'editar-restaurante', component: RestaurantesList},
	{path: '/restaurante-destacado/:id', name: 'restaurante-destacado', component: RestauranteTop},
	{path: '/contacto', component: Contacto}
];

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
