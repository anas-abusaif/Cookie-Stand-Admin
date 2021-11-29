import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  
  let [stands,setStands]=useState([])

  let clickHandler=(e)=>{
    e.preventDefault()
  
    let stand={
      location:e.target.getLocation.value,
      max:e.target.max.value,
      min:e.target.min.value,
      avg:e.target.avg.value
    }
    setStands(stands.concat([stand]))
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='w-screen align-top bg-green-50'>
        <header className='top-0 w-screen mb-10 text-3xl font-bold bg-green-500 p0'>
          <h1 className='p-4 '>Cookie Stand Admin</h1>
        </header>
        <main>
        <form className='w-2/3 m-auto bg-green-300 rounded-lg' onSubmit={(e)=>clickHandler(e)}>
          <h2 className='p-4 text-xl font-bold text-center'>
            Create Cookie Stand
          </h2>
          <div className='w-11/12 m-auto'>
            <label  for="location">Location: </label>
            <input className='w-11/12' type="text"  id="getLocation"/>
          </div>
          <div className='flex p-9'>
            <section className='grid w-3/12 text-center'>
            <label for="max">Maximum customers per hour: </label>
            <input className='w-4/5 m-auto' type="number" min='0' id="max"/>
            </section>
            <section className='grid w-3/12 text-center'>
            <label for="min">Minimum customers per hour: </label>
            <input className='w-4/5 m-auto' type="number" min='0' id="min"/>
            </section>
            <section className='grid w-3/12 text-center'>
            <label for="avg">Average cookies per sale: </label>
            <input className='w-4/5 m-auto' type="number" min='0' id="avg"/>
            </section>
            <section className='w-3/12 text-center'>
            <button className='w-full h-full bg-green-500' type='submit'>Create</button>
            </section>
          </div>
        </form>
        <p className='w-screen mt-10 mb-10 text-center'>Report Table Comming Soon...</p>
        {
          stands.map((element)=>{
            return <p className='text-center'>{JSON.stringify(element)}</p>
          })
        }
        </main>
        <footer className='bottom-0 p-3 bg-green-500 '>
        ©2021
        </footer>
      </body>

    </div>
  )
}
