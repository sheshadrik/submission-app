import { ADD_BASIC_DETAILS } from "../actions";

const basicDetails = {
    firstName: '',
    lastName: '',
    dob: '',
    last4ssn: ''
}

const basicDetailsReducer = (state = basicDetails, action) => {
    switch (action.type) {
    case ADD_BASIC_DETAILS: return Object.assign({}, {...state,...action.payload})    
    default: return state;
    }
}

export { basicDetailsReducer , basicDetails};