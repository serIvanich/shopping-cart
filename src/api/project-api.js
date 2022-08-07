import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  withCredentials: true,
})

export const itemsApi = {
  getItems() {
    return instance
      .get('b7d36eea-0b3f-414a-ba44-711b5f5e528e')
      .then((res) => res.data)
  },
}
