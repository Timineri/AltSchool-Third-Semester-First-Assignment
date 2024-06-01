<template>
  <v-row no-gutters class="bg-surface-variant">
    <v-col>
      <v-card
        class="bg-surface-variant mx-auto my-8 pa-2 ma-2"
        target="_blank"
        rel="noopener"
        elevation="16"
        max-width="90%"
      >
        <v-card-text v-if="repositories">{{ repositories.id }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RepositoryData',
  data() {
    return {
      repositories: null
    }
  },
  created: function () {
    axios.get('https://api.github.com/users/timineri/repos').then((reponse) => {
      this.repositories = reponse.data
    })
  }
}
</script>
