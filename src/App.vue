<script>
import PaginationBlock from './components/PaginationBlock.vue'
import { RouterLink, RouterView } from 'vue-router'
// import Repository from './components/Repository.vue'

export default {
  name: 'App',
  components: {
    PaginationBlock
    // Repository
  }
}
</script>

<template>
  <div id="app">
    <!-- <Repository /> -->
    <RouterView />
    <PaginationBlock />
  </div>
</template>
