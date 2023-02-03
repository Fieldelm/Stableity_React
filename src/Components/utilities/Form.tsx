import React from 'react'

import { useState } from 'react';

const useForm = (callback: any, initialState = {}) => {
  

    const [values, setValues] = useState(initialState);
 
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: 
    event.target.value });
        }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); // triggering the callback
    };

  return (
    {onSubmit,
    onChange,
    values}
  )
}

export default useForm;