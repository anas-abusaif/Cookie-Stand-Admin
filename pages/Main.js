import React from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

export default function Main(props) {
  return (
    <div>
      <main>
        <CreateForm clickHandler={props.clickHandler}/>
        <ReportTable stands={props.stands}/>
      </main>
    </div>
  )
}
