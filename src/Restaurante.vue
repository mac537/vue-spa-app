<template>
	<div>
		<div v-if="item != null">
			{{item.title}}
			
			<img :src="item.thumbnailUrl">
		</div>
	<span v-else>Cargando</span>
	</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'restaurante-detalle',
  mounted(){
  	this.id = this.$route.params.id

  	axios.get(`https://jsonplaceholder.typicode.com/photos/${this.id}`)
		.then((response) => {
			console.log(response.data);
		this.item = response.data;
		});
  },
  data () {
    return {
      id: null,
      item: null
    }
  }
}
</script>