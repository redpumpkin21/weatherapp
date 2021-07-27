import React, {useState} from 'react'

const Form = (props) => {

    const[formData, setFormData] = useState({
        zipCode: ""
    })
    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.weatherSearch(formData.zipCode)
    }  

    return(
        <form onSubmit = {handleSubmit} value ='Enter Zip Code'>
            <input placeHolder = "Enter Zip Code" type = "number" name="zipCode" value = {formData.zipCode} onChange= {handleChange}/>
            <button type ="submit">SEARCH ME</button>
        </form>
    )
}
export default Form