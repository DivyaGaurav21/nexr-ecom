import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Link href="/productList">
      <div className="bg-slate-600 text-white">
        <h1>Home Page</h1>
        <h2>Go to Product list</h2>
      </div>
    </Link>
  )
}
