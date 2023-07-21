import { ADD_CONTACT_DETAILS } from "../actions";

const contactDetails = {    
    address: '',
    phone: '',
    email: ''
}

const contactDetailsReducer = (state = contactDetails, action) => {
    switch (action.type) {    
    case ADD_CONTACT_DETAILS: return Object.assign({}, {...state,...action.payload})
    default: return state;
    }
}

export { contactDetailsReducer , contactDetails};