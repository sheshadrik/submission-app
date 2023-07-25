import { Link } from "react-router-dom";
import {getUsers} from "../services/ApplyService";
import { useEffect } from "react";
const Home = () => {
    const {basicDetails, contactDetails} = useSelector(state => state);
    // useEffect(() => {
    //     getUsers();
    // });

    return <div><div>
    <h1>Loan List</h1>          
    <table border={1}>
      <tr><th>First Name</th> <th>Last Name</th><th>Dob</th><th>Last4ssn</th><th>Email</th><th>Phone</th><th>Address</th> <th>Status</th></tr>
      {loans.map(loan => (
        <tr key={loan._id}>
          <td>{loan.firstName}</td> <td>{loan.lastName}</td><td>{loan.dob}</td><td>{loan.last4ssn}</td><td>{loan.email}</td><td>{loan.phone}</td><td>{loan.address}</td> <td>{loan.completed ? 'Completed' : 'Not Completed'}</td>
        </tr>
      ))}
    </table>
  </div><div><Link to="/apply" id="ApplyLoan">Apply Loan</Link></div></div>; 
}

export default Home;