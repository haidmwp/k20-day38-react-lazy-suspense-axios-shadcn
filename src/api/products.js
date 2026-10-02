import axios from 'axios'
export const api = axios.create({ baseURL: 'https://dummyjson.com', timeout: 10_000 })
export async function getCategories({signal} = {}) { return (await api.get('/products/categories', {signal})).data }
export async function getProducts(category = 'all', {signal} = {}) { return (await api.get(category === 'all' ? '/products' : `/products/category/${encodeURIComponent(category)}`, {signal})).data.products }
export async function getProduct(id, {signal} = {}) { return (await api.get(`/products/${id}`, {signal})).data }
export async function addProduct(data) { return (await api.post('/products/add', data)).data }
export async function updateProduct(id, data) { return (await api.patch(`/products/${id}`, data)).data }
