<template>
	<div class="restaurant-list">
		<ul v-if="items != null">
			<li v-for="item in items">
				{{item.title}}

				<router-link :to="{name: 'restaurante', params:{id: item.id}}">Ver</router-link>

				<router-link :to="{name: 'editar-restaurante', params:{id: item.id}}">Editar</router-link>
				
			</li>
		</ul>
		<span v-else>Cargando</span>
	</div>
	
</template>

<script>

import axios from 'axios'

export default {
  name: 'restaurantes-list',
  mounted(){
  	this.getItems();
  },
  data () {
    return {
      items: null
    }
  },
  methods: {
  	getItems(){
  		axios.get('https://jsonplaceholder.typicode.com/photos')
  			.then((response) => {
  				console.log(response.data.slice(0,10));
				this.items = response.data.slice(0,10);
  			});
  	}
  }
}
</script>

<style lang="scss">
	.restaurant-list{

	}
</style>