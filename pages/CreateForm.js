import React from 'react'


export default function CreateForm(props) {


  return (
    <div>
      <form className='w-2/3 m-auto bg-green-300 rounded-lg' onSubmit={(e)=>props.onCreate(e)}>
          <h2 className='p-4 text-xl font-bold text-center'>
            Create Cookie Stand
          </h2>
          <div className='w-11/12 m-auto'>
            <label  htmlFor="location">Location: </label>
            <input className='w-11/12' type="text"  id="getLocation"/>
          </div>
          <div className='flex p-9'>
            <section className='grid w-3/12 text-center'>
              <label htmlFor="max">Maximum customers per hour: </label>
              <input className='w-4/5 m-auto' type="number" min='0' id="max"/>
            </section>
            <section className='grid w-3/12 text-center'>
              <label htmlFor="min">Minimum customers per hour: </label>
              <input className='w-4/5 m-auto' type="number" min='0' id="min"/>
            </section>
            <section className='grid w-3/12 text-center'>
              <label htmlFor="avg">Average cookies per sale: </label>
              <input className='w-4/5 m-auto' type="number" min='0' id="avg"/>
            </section>
            <section className='w-3/12 text-center'>
              <button className='w-full h-full bg-green-500' type='submit'>Create</button>
            </section>
          </div>
        </form>
    </div>
  )
}
