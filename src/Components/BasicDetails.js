import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { basicDetailsAction } from "../actions";
import { useNavigate } from "react-router";
const isValid = (formData) => {
    return formData.firstName !== '' && formData.lastName !== '' && formData.dob !== '' && formData.last4ssn !== '';
}
function BasicDetails() {
    const { firstName, lastName, dob, last4ssn } = useSelector(state => state.basicDetails);
    const [formData, setFormData] = useState({ firstName: firstName, lastName: lastName, dob: dob, last4ssn: last4ssn });
    const [valid, setValid] = useState(isValid(formData));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setValid(isValid({ ...formData, [name]: value }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        dispatch(basicDetailsAction(formData));
        navigate('/contact');

    }

    return (
        <div>
            <h1>Basic Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name:
                    <input
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    Last Name:
                    <input
                    placeholder="Last Name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    Date of Birth:
                    <input
                    placeholder="mm/dd/yyyy"
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    Last 4 SSN digits:
                    <input
                        type="password"
                        name="last4ssn"
                        value={formData.last4ssn}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <button type="submit" name="continue" disabled={!valid}>Continue</button>
            </form>
        </div>
    )

}

export default BasicDetails;