<!-- <template>
  <div>
    <section>
      <div>
        <div>
          <h1>Get GitHub Repositories</h1>
          <h2>using Vue JS, REST API &amp; Bulma</h2>
        </div>
      </div>
    </section>
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Language</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repositories" :key="repo.id">
              <td>{{ repo.id }}</td>
              <td>{{ repo.name }}</td>
              <td>{{ repo.html_url }}</td>
              <td>{{ repo.language }}</td>
              <td>{{ repo.owner.login }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template> -->

<template>
  <v-row no-gutters class="bg-grey-darken-3">
    <v-col>
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </template>
      <v-card
        class="bg-grey-darken-4 mx-auto my-8 pa-2 ma-2"
        target="_blank"
        rel="noopener"
        elevation="16"
        max-width="90%"
        v-for="repo in repositories"
        :key="repo.id"
      >
        <v-tooltip activator="parent" location="bottom">{{ repo.name }}</v-tooltip>
        <v-card-item>
          <RouterLink :to="`/repodetailsview/${repo.name}`"> {{ repo.name }} </RouterLink>

          <v-card-subtitle> Visibility: {{ repo.visibility }}</v-card-subtitle>
          <v-card-subtitle> Created at: {{ repo.created_at }}</v-card-subtitle>
          <v-card-subtitle> Language: {{ repo.language }} </v-card-subtitle>
          <v-card-subtitle>{{ repo.owner.login }}</v-card-subtitle>
          <!-- <v-c> {{ repo.html_url }} </router-link> -->
        </v-card-item>
        <a :href="`https://github.com/timineri/${repo.name}`">{{ repo.html_url }}</a>
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

<style>
body {
  font:
    30px/1.8 'Poppins',
    sans-serif !important;
}

.table td,
.table th {
  padding: 40px !important;
}
</style>
