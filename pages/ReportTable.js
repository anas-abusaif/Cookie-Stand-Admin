import React from 'react'
export default function ReportTable(props) {
  return (
    <div>
      <p className='w-screen mt-10 mb-10 text-center'>Report Table Comming Soon...</p>
        {
          props.stands.map((element)=>{
            return <p className='text-center'>{JSON.stringify(element)}</p>
          })
        }
    </div>
  )
}