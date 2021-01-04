import { fetchUserRepositories } from '@/apis/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories (user) {
  let repositories = ref([])
  const getRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
  }

  watch(user, getRepositories)

  onMounted(getRepositories)

  return {
    repositories,
    getRepositories
  }
}