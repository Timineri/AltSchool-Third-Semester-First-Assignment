<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="10"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1
    }
  }
}
</script>
