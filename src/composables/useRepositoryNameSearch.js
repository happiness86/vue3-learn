import { ref,computed } from 'vue'

export default function useRepositoryNameSearch (repositories) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQueries = computed(() => {
    return repositories.value.filter(repo => {
      return repo.name.includes(searchQuery.value)
    })
  })

  return {
    searchQuery,
    repositoriesMatchingSearchQueries
  }
}