import React from 'react'
import { useState } from 'react';
import { Modal,Form,Button } from 'react-bootstrap';

export default function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
<button onClick={handleShow} className='btn btn-info'>Add New Category</button>

<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please Fill the following details !!!</p>
         <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter category id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter category name" />
        </Form.Group>
       
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    
    </>
  )
}
