import axios from "axios";
export const applyLoan = (loanDetails) => {
return axios.post(`/api/applyLoan`,loanDetails);

}

export const getLoanDetails = () => {
    return axios
    .get("/api/loanDetails")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };