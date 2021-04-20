import { ChangeEvent, useState } from 'react'
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
export const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      }
    })
  }
  const reset = (newFormState = initialState) => {
    setFormValues(newFormState)
  }

  const customValidator = (validableInput: Validatable) => {

  }

  return { formValues, handleInputChange, reset }
}