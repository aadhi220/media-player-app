import React from "react";
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { deleteVideo } from "../services/allAPI";



const VideoCard = ({displayData,setDeleteVideoStatus}) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleVideoDelete =async (id)=>{
  try{
  const responce= await deleteVideo(id)
  }
  catch(error) {
  console.log(error.responce);
  }
  setDeleteVideoStatus(true)
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
          src={displayData?.url}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            {" "}
            <Card.Title>{displayData?.caption}</Card.Title>{" "}
            <button className="bg-transparent border-0" onClick={()=>handleVideoDelete(displayData?.id)}>
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
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="w-100 h-100">
            {" "}
            <iframe
            style={
              {height:"30rem",width:"30rem"}
            }
              
              src={displayData?.embedLink}
              title={displayData?.caption}
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
