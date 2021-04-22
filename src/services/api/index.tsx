import useSWR from 'swr'

type ApiData = {
  data: []
  error: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())
const baseUrl = 'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/'

const getApiData = (path: string): ApiData => {
  if (!path) {
    throw new Error('Path is required')
  }
  const url = baseUrl + path

  const { data, error } = useSWR(url, fetcher)

  return { data, error }
}

export default getApiData
