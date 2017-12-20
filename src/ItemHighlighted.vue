<template>
	<h2>Esto es el {{id}}</h2>
</template>

<script>

export default {
  name: 'item-highlighted',
  mounted(){
  	this.id = this.$route.params.id
  },
  data () {
    return {
      id: null
    }
  }
}
</script>