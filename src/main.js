import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ItemsList from './ItemsList'
import ItemHighlighted from './ItemHighlighted'
import Item from './Item'
import AddItem from './AddItem'
import EditItem from './EditItem'

Vue.use(VueRouter)

const routes = [
	{path: '/', component: ItemsList},
	{path: '/item/:id', name: 'item', component: Item},
	{path: '/add-item', name: 'add-item', component: AddItem},
	{path: '/edit-item/:id', name: 'edit-item', component: EditItem},
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
