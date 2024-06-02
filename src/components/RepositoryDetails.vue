<template>
  <div>
    <button></button>
    <div>
      <h2>Name: {{ details.name }}</h2>
      <div>Branches: {{ branches.length }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RepositoryDetails',
  data() {
    return {
      details: [],
      branches: [],
      deployment: []
    }
  },

  methods: {
    fetchData: function () {
      axios
        .get(`https://api.github.com/repos/timineri/${this.$route.params.id}`)
        .then((res) => (this.details = res.data))

      axios
        .get(`https://api.github.com/repos/timineri/${this.$route.params.id}/branches`)
        .then((res) => (this.branches = res.data))

      axios
        .get(`https://api.github.com/repos/timineri/${this.$route.params.id}/deployment`)
        .then((res) => (this.deployment = res.data))
    }
  },

  created() {
    this.fetchData()
  },

  components: {}
}
</script>
