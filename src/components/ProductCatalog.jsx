import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCategories, getProducts } from '../api/products'
import { Button } from './ui/button'
import QueryState from './QueryState'
export default function ProductCatalog() {
 const [selectedCategory, setCategory] = useState('all')
 const categories = useQuery({queryKey:['categories'], queryFn:getCategories})
 const products = useQuery({queryKey:['products','catalog',selectedCategory], queryFn:({signal})=>getProducts(selectedCategory,{signal})})
 return <section><h2>Bài 1 · Danh mục sản phẩm</h2><div className="categories"><Button onClick={()=>setCategory('all')} variant={selectedCategory==='all'?'default':'outline'}>Tất cả</Button><QueryState query={categories}/>{categories.isSuccess && (categories.data.length ? categories.data.map(c=><Button key={c.slug} aria-pressed={selectedCategory===c.slug} variant={selectedCategory===c.slug?'default':'outline'} onClick={()=>setCategory(c.slug)}>{c.name}</Button>) : <p>Chưa có danh mục.</p>)}</div><QueryState query={products}/>{products.isSuccess && (products.data.length ? <div className="grid-products">{products.data.map(p=><article className="card" key={p.id}><img src={p.thumbnail} alt={p.title} loading="lazy"/><h3>{p.title}</h3><strong>${p.price.toFixed(2)}</strong></article>)}</div> : <p>Không có sản phẩm trong danh mục này.</p>)}</section>
}
