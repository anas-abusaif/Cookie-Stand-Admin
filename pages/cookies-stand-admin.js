import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
export default function CookieStandAdmin() {
  let [stands, setStands] = useState([])
  let [totals, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  let onCreate = (e) => {
    e.preventDefault();

    let sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    let stand = {
      location: e.target.getLocation.value,
      max: e.target.max.value,
      min: e.target.min.value,
      avg: e.target.avg.value,
      hourly_sales: sales,
      total: sales.reduce((a, b) => a + b, 0)
    }
    setStands(stands.concat([stand]))
  
    let absoluteTotal = totals.map((item, idx) => {
      if (idx === totals.length - 1) {
        return item + stand.total
      }
      return item + stand.hourly_sales[idx]
    })
    setbranchestotals(absoluteTotal)
  }


  return (
    <div>
      <Header />
      <Main onCreate={onCreate} stands={stands} totals={totals} />
      <Footer stands={stands} />
    </div>
  )
}

