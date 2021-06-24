import React from 'react'
import {FormGroup,Label,Input} from 'reactstrap'

InputField.defaultProps ={
    type:'text',
    label:'',
    placeholder:'',
    disabled:false
}

 function InputField(props){
  const {field,type,label,placeholder,disabled} = props;
  const {name} = field;
    return (
        
        <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input  
        id="name" 
        {...field} 
        type={type}
        disabled={disabled}
        placeholder={placeholder}></Input>
    </FormGroup>
    )
}

export default InputField
