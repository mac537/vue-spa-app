<template>
  <div>
   <ul>
     <li><router-link to="/home">Home</router-link></li>
     <li><router-link to="/restaurantes">Restaurante</router-link></li>
     <li><router-link :to="{name: 'restaurante-destacado', params: {id: 16}}">Restaurante destacado</router-link></li>
     <li><router-link to="/contacto">Contacto</router-link></li>
   </ul>

    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'RestaurantesApp',
  data () {
    return {
      msg: 'RestaurantesApp'
    }
  }
}
</script>

<style scoped lang="scss">

</style>