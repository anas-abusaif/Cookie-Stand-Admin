import React from 'react'


export default function ReportTable(props) {
  if (props.stands.length === 0) {
    return (
      <h2 className="mx-auto my-8 text-xl font-semibold text-center">No Cookie Stands Available</h2>
    )
  } else {
    return (
      <table className='w-5/6 m-auto mt-4 mb-10 text-center border border-green-300 rounded-md'>
        <thead className='bg-green-500 border border-green-300'>
          <tr>
          <th className='px-2'>Location</th>
          {
            props.workingHours.map(
              (item,key) => {
              return (
                <th>{item} </th>
              )
            })
          }
          <th>Totals</th>
          </tr>
        </thead>

        <tbody>
          {
            props.stands.map((stand, idx) => {

              const element =
                <>
                  <td className='px-2 border border-black' >{stand.location}</td>
                  {
                    stand.hourly_sales.map((item,key) => {
                      return (
                        <td className='border border-black'> {item} </td>
                      )
                    })
                  }
                  <td className='border border-black'>{stand.total}</td>
                </>

              if (idx % 2 == 0) {
                return (
                  <tr className='bg-green-400'>
                    {element}
                  </tr>
                )
              } else {
                return (
                  <tr className='bg-green-300'>
                    {element}
                  </tr>
                )
              }
            })
          }
        </tbody>

        <tfoot className='bg-green-500 '>
          <tr>
          <td className='px-2 font-semibold border border-black'>Totals</td>
          {
            props.totals.map((item,key) => {
              return (
                <td className='font-semibold border border-black'>{item}</td>
              )
            })
          }
          </tr>
        </tfoot>
      </table>
    )
  }
}