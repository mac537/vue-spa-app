<template>
  <div>
   <ul>
     <li><router-link to="/">Home</router-link></li>
     <li><router-link :to="{name: 'add-item'}">Add Item</router-link></li>
   </ul>

    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      msg: 'App'
    }
  }
}
</script>

<style scoped lang="scss">

</style>