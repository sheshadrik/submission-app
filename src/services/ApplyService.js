import axios from "axios";
export const applyLoan = (loanDetails) => {
return axios.post(`/api/loans/apply`,loanDetails);

}

export const getLoanDetails = () => {
    return axios
    .get("/api/loans")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };