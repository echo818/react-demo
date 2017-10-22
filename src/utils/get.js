import 'whatwg-fetch'
import serialize from './serialize'

export const baseURL = '/api/'

const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded"
})

const get = (args) => {
  let params = args.data ? `?${serialize(args.data || {})}` : ''
  return Promise.resolve(
    fetch(`${baseURL}${args.url}${params}`, {
      method: 'GET',
      headers
    }).then(response => (
      response.json()
    ))
  )
}

export default get
