import React from 'react'
import PropTypes from 'prop-types'

const BmiForm = (props) => {
    const {
        title,
        type,
        name,
        value,
        onChange,
    } = props

    return (
        <div className='row mb-2'>
            <div className='col-6'>
                <label htmlFor=''>{title}</label>
            </div>
            <div className='col-6'>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className='form-control form-control-sm'
                />
            </div>
        </div>
    )
}

BmiForm.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'number'])
}

export default BmiForm