import { useState } from "react";
import {Modal,Button} from 'react-bootstrap'
import CustomInput from './input'
export default function CustomModal({setdata}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [date,setDate] = useState('')

    let user = [];
    const addUser = () =>{
        user.push({firstName,lastName,email,date})
        setdata(user)
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add User
        </Button>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <CustomInput placeholder='firstname' onChange={(e)=> setFirstName(e.target.value) } label='firstname' />
          <CustomInput placeholder='lastname' onChange={(e)=> setLastName(e.target.value) }  label='lastname' />
          <CustomInput placeholder='email' onChange={(e)=> setEmail(e.target.value) }  label='email' />
          <CustomInput placeholder='date' onChange={(e)=> setDate(e.target.value) }  label='date' type='datetime-local'/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> addUser()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }