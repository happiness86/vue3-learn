<template>
  <input v-model="searchQuery" type="text" name="" id="search">
  <ul>
    <li v-for="repo in repositories" :key="repo.name">
      {{user}}
      {{repo.name}} : {{repo.size}}
    </li>
  </ul>
</template>

<script>
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import { toRefs } from 'vue'

export default {
  name: 'UserRepositories',
  props: {
    user: String
  },
  setup (props) {
    const { user } = toRefs(props)

    const { repositories, getRepositories } = useUserRepositories(user)

    const { searchQuery, repositoriesMatchingSearchQueries } = useRepositoryNameSearch(repositories)

    return {
      repositories: repositoriesMatchingSearchQueries,
      getRepositories,
      searchQuery
    }
  }
}
</script>

<style>

</style>