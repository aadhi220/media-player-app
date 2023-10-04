import React ,{useState} from 'react'
import {Modal , Button, Form} from 'react-bootstrap';

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-5"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please Fill the following details !!!</p>
         <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter video ID" />
        </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add