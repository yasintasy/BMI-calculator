import React, { useEffect, useState } from 'react'
import BmiForm from './BmiForm'

const BmiCalculator = (props) => {
   const { getBmiValue } = props
   const [count, setCount] = useState({
      heightCount: '0',
      weightCount: '0'
   })

   const { heightCount, weightCount } = count

   const onChangeInput = (e) => {
      const { name, value } = e.target
      setCount(prevState => ({
         ...prevState,
         [name]: value
      }))
   }

   const resetForm = (e) => {
      e.preventDefault()
      setCount({
         heightCount: '0',
         weightCount: '0'
      })
      getBmiValue(0)
   }
   const metricBmi = (height, weight) => {
      if (height > 0 && weight > 0) {
         const bmi = (weight / height / height) * 10000
         //console.log(bmi)
         getBmiValue(Math.round(bmi))
      }
   }

   useEffect(() => {
      // menghitung bmi dari tinggi dan berat badan melalui method metricBmi(123, 123)
      metricBmi(heightCount, weightCount)
   }, [heightCount, weightCount])

   return (
      <div className='card-body'>
         <BmiForm
            title={`Height (cm)`}
            type='number'
            name='heightCount'
            value={heightCount}
            onChange={onChangeInput}
         />
         <BmiForm
            title={`Weight (kg)`}
            type='number'
            name='weightCount'
            value={weightCount}
            onChange={onChangeInput}
         />
         <button
            onClick={resetForm}
            className='btn btn-sm btn-primary'
         >
            Reset
         </button>
      </div>
   )
}

export default BmiCalculator