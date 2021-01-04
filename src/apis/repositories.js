import axios from 'axios'

export async function fetchUserRepositories (user) {
  return await axios.get('/mock/repositories.json').then(res => {
    return res.data[user]
  })
}
