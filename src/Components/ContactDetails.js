import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { contactDetailsAction } from "../actions";
import { useNavigate } from "react-router";

function ContactDetails() {
    const {address,phone,email} = useSelector(state => state.contactDetails);
    const [formData, setFormData] = useState({email: email ,phone: phone, address: address});    
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = e => {
            const {name,value} = e.target;       //setUsername(e.target.value)
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        if (e.target.value) {
            setIsSubmitDisabled(false)
        } else {
            setIsSubmitDisabled(true);
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(formData);
        dispatch(contactDetailsAction(formData));
        navigate('/review');        
    }
    const navigateToPrevious = () => {
        navigate('/apply');
    }
    return (
        <div>
            <h1>Contact Details</h1>
        <form onSubmit={handleSubmit}>
            <div>
            Phone:
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            </div>
            <br/>
            <div>
            email:
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            </div>
            <br/>
            <div>
            Address:
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
            />
            </div>
            <br/>                        
            <button type="button" onClick={navigateToPrevious}>Previous</button>
            <button type="submit" disabled={isSubmitDisabled}>Continue</button>
        </form>
        </div>
    )

}

export default ContactDetails;