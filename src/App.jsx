import { useState } from 'react'
import ProductCatalog from './components/ProductCatalog'
import ProductManagement from './components/ProductManagement'
import ProductDetail from './components/ProductDetail'
import { Button } from './components/ui/button'
const tabs = [['catalog','Danh mục',ProductCatalog],['management','Quản lý',ProductManagement],['detail','Chi tiết & đánh giá',ProductDetail]]
export default function App() { const [tab,setTab]=useState('catalog');const Page=tabs.find(t=>t[0]===tab)[2];return <main><header><p className="eyebrow">REACT · BUỔI 38</p><h1>Buổi 38: React.lazy, Suspense, Axios, Shadcn/ui</h1></header><nav aria-label="Các bài tập">{tabs.map(([id,label])=><Button key={id} variant={tab===id?'default':'outline'} aria-pressed={tab===id} onClick={()=>setTab(id)}>{label}</Button>)}</nav><Page/></main> }
