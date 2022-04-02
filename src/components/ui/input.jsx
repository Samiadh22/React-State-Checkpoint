import React from 'react'
import {FormControl,InputGroup} from 'react-bootstrap'
function input({placeholder,label,type,onChange}) {
  return (
    <div>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
    </InputGroup>
    </div>
  )
}

export default input