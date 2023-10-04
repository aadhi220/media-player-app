import React from 'react'
import { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';


function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

    
      <Card>
        <Card.Img onClick={handleShow} variant="top" src="https://imgmusic.com/uploads/album/cover/221/Funky_Grooves_Vol2_ZPP072.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
            <Modal.Title>Video Caption</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
         <div > <iframe  width="414" height="232" src="https://www.youtube.com/embed/N3AkSS5hXMA?autoplay=1" title="What Is React (React js) &amp; Why Is It So Popular?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen={true}></iframe></div>
          </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard