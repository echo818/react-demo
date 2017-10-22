import 'whatwg-fetch'
import serialize from './serialize'

export const baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:5000/' : 'http://localhost:5000/'

const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded"
})

const ajax = (args) => (
  Promise.resolve(
    fetch(`${baseURL}${args.url}`, {
      method: 'POST',
      headers,
      body: serialize(args.data || {})
    }).then(response => (
      response.json()
    ))
  )
)

export default ajax
