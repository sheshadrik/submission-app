import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { applyLoan, getUsers } from "../services/ApplyService";
import { addLoan } from "../slices/loanApplicationSlice";

function ReviewDetails() {
    const dispatch = useDispatch();
    const loanDetails = useSelector( state => state);
    const {firstName,lastName,dob,last4ssn} = useSelector( state => state.loans?.basicDetails);
    const {address,phone,email} = useSelector(state => state.loans?.contactDetails);
    const handleSubmit = (event) => {
        event.preventDefault();
        // applyLoan(loanDetails).then((res) => {
        //     console.log(res);
        // });//API call
        dispatch(addLoan(loanDetails));
    };
    return <div>
        <form onSubmit={handleSubmit}>
        <h1>Review Details</h1>
        <h2>Basic Details</h2> <Link to="/apply">Edit</Link>
        <table border={1}>
        <tr><td>First Name</td><td>{firstName}</td></tr>
        <tr><td>Last Name</td><td>{lastName}</td></tr>
        <tr><td>Date of Birth</td><td>{dob}</td></tr>
        <tr><td>Last4SSN</td><td>{last4ssn}</td></tr>              
        </table>
        <h2>Contact Details</h2> <Link to="/contact">Edit</Link>
        <table border={1}>
        <tr><td>Email</td><td>{email}</td></tr>
        <tr><td>Phone</td><td>{phone}</td></tr>
        <tr><td>Address</td><td>{address}</td></tr>
        </table>
        <button type="submit">Apply Loan</button>
        </form>
        </div>
}

export default ReviewDetails;