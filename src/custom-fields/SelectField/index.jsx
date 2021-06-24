import PropTypes from 'prop-types'
import Select from 'react-select'
import {FormGroup,Label} from 'reactstrap'

const SelectField = props => {
    const {field,options,label,placeholder,disabled} = props;
    console.log(field);
    const {name,value} = field;
    const selectedOption = options.find(option => option.value === value);
    const handleSelectedOptionChange = (selectedOption)=>{
        const selectedValue = selectedOption ? selectedOption.value : selectedOption

        const changeEvent = {
            target:{
                name:name,
                value:selectedValue
            }
        }
        field.onChange(changeEvent)
    }
    return (
        <FormGroup>
           {label && <Label for={name}> {label}</Label>}
            <Select            
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
              >                    
            </Select>
        </FormGroup>
    )
}

SelectField.propTypes = {
field:PropTypes.object.isRequired,
form: PropTypes.object.isRequired,

label:PropTypes.string,
placeholder:PropTypes.string,
disabled:PropTypes.bool,
option:PropTypes.array
}

SelectField.defaultProps ={
    label:'',
    placeholder:'',
    disabled:false,
    options:[]
}

export default SelectField
