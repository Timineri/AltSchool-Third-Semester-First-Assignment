<template>
  <main>
    <Repository />
    <PaginationBlock />
  </main>
</template>
<script>
import PaginationBlock from '@/components/PaginationBlock.vue'
import Repository from '../components/Repository.vue'

export default {
  //   name: 'RepoView',
  components: {
    Repository,
    PaginationBlock
  }
}
</script>
