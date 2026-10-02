import { lazy, Suspense, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../api/products'
import { Button } from './ui/button'
import QueryState from './QueryState'
const ProductReviews = lazy(()=>import('./ProductReviews'))
export default function ProductDetail() { const [show, setShow]=useState(false); const query=useQuery({queryKey:['product',1],queryFn:({signal})=>getProduct(1,{signal})}); return <section><h2>Bài 3 · Hải Store</h2><QueryState query={query}/>{query.isSuccess && <><div className="detail"><img src={query.data.thumbnail} alt={query.data.title}/><div><h3>{query.data.title}</h3><strong>${query.data.price.toFixed(2)}</strong><p>{query.data.description}</p><Button aria-expanded={show} onClick={()=>setShow(!show)}>{show?'Ẩn đánh giá':'Xem đánh giá'}</Button></div></div>{show && <Suspense fallback={<p role="status">Đang tải giao diện đánh giá...</p>}><ProductReviews reviews={query.data.reviews}/></Suspense>}</>}</section> }
