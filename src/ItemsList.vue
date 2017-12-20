<template>
	<div class="items-list">
		<ul v-if="items != null">
			<li v-for="item in items">
				{{item.title}}

				<router-link :to="{name: 'item', params:{id: item.id}}">Enter</router-link>
				<router-link :to="{name: 'edit-item', params:{id: item.id}}">Edit</router-link>
        <span v-if="item.id != toggleId">
          <a href="#" @click="deleteItem(item.id)">Delete</a>
        </span>
        <span v-else>
          Are u sure?
          <button  @click="cancelDelete">No</button>
          <button  @click="confirmDelete(item.id)">Yes</button>
        </span>
				
			</li>
		</ul>
		<span v-else>Cargando</span>
	</div>
	
</template>

<script>

import axios from 'axios'

export default {
  name: 'items-list',
  mounted(){
  	this.getItems();
  },
  data () {
    return {
      items: null,
      toggleId: null
    }
  },
  methods: {
  	getItems(){
  		axios.get('https://jsonplaceholder.typicode.com/photos')
  			.then((response) => {
  				console.log(response.data.slice(0,10));
				this.items = response.data.slice(0,10);
  			});
  	},

    deleteItem(id){
      this.toggleId = id;
    },

    cancelDelete(){
      this.toggleId = null;
    },

    confirmDelete(id){

    }
  }
}
</script>

<style lang="scss">

</style>