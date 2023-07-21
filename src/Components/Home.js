import { Link } from "react-router-dom";
import {getUsers} from "../services/ApplyService";
import { useEffect } from "react";
const Home = () => {
    // useEffect(() => {
    //     getUsers();
    // });

    return <div><Link to="/apply">Apply Loan</Link></div> 
}

export default Home;