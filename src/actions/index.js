const ADD_BASIC_DETAILS='ADD_BASIC_DETAILS';
const basicDetailsAction = (formData) =>  {//formData = {firstName: 'john', lastName:'1'};
    //...formData --> firstName: 'John',lastName: 'k',
    //firstName: 'Mike', {...formData,firstName: 'Mike'} --> {firstName: 'Mike', lastName: 'k'}
            
    return {type: ADD_BASIC_DETAILS, payload: {...formData}};

};

const ADD_CONTACT_DETAILS='ADD_CONTACT_DETAILS';
const contactDetailsAction = (formData) =>  {//formData = {firstName: 'john', lastName:'1'};
    //...formData --> firstName: 'John',lastName: 'k',
    //firstName: 'Mike', {...formData,firstName: 'Mike'} --> {firstName: 'Mike', lastName: 'k'}
            
    return {type: ADD_CONTACT_DETAILS, payload: {...formData}};

};

export {ADD_BASIC_DETAILS,basicDetailsAction, ADD_CONTACT_DETAILS, contactDetailsAction};
