import React from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

export default function Main(props) {
  return (
    <div>
      <main>
        <CreateForm onCreate={props.onCreate}/>
        <ReportTable stands={props.stands} workingHours={workingHours} totals={props.totals}/>
      </main>
    </div>
  )
}
