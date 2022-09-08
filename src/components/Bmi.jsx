import React, { useState } from 'react'
import BmiCalculator from './BmiCalculator'

const Bmi = () => {
    const [bmiValue, setBmiValue] = useState(0)

    const getBmiResult = (bmi) => {
        if (bmi >= 1 && bmi <= 18.5) {
            return {
                status: 'Underweight',
                color: 'danger'
            }
        }
        if (bmi >= 18.5 && bmi <= 24.9) {
            return {
                status: 'Normal',
                color: 'success'
            }
        }
        if (bmi >= 24.9 && bmi <= 29.9) {
            return {
                status: 'Overweight',
                color: 'warning'
            }
        }
        if (bmi >= 30) {
            return {
                status: 'Obese',
                color: 'danger'
            }
        }
        return {
            status: '-',
            color: 'primary'
        }
    }

    const bmiResult = getBmiResult(bmiValue);

    return (
        <>
            <div className='container'>
                <div className='col-lg-6 offset-lg-3'>
                    <div className='card text-center'>
                        <div className='card-header bg-secondary text-white'>
                            BMI Calculator
                        </div>
                        <span>Body Mass Index (BMI) = {bmiValue}</span>
                        <BmiCalculator
                            getBmiValue={setBmiValue} />
                        <div className={`card-footer bg-${bmiResult.color} text-white`}>
                            {bmiResult.status}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bmi