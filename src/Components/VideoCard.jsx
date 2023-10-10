import React from "react";
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { deleteVideo } from "../services/allAPI";



const VideoCard = ({displayData}) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleVideoDelete =(id)=>{
  deleteVideo(id)
}

  return (
    <>

    {displayData && <Card className="mt-3">
        <Card.Img
          onClick={handleShow}
          variant="top"
          height={'180px'}
          width={'100%'}
          style={{objectFit:'cover',transform:'scale(1)'}}
          src={displayData.url}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            {" "}
            <Card.Title>{displayData.caption}</Card.Title>{" "}
            <button className="bg-transparent border-0" onClick={()=>handleVideoDelete(displayData.id)}>
              <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i>
            </button>
          </div>
        </Card.Body>
      </Card>}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            {" "}
            <iframe
              height={"400px"}
              width={"100%"}
              
              src={displayData.embedLink}
              title={displayData.caption}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen={true}
            ></iframe>
          </div>

          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
