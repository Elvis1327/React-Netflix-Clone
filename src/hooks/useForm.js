import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [ formValues, setFormValues ] = useState(initialState);

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };



    return {
        handleInputChange,
        formValues
    }

}



