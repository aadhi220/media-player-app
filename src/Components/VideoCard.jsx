import React from "react";
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { PostWatchHistory, deleteVideo } from "../services/allAPI";



const VideoCard = ({displayData,setDeleteVideoStatus}) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    
    setShow(true);
    // get caption and link
    const{caption ,embedLink}= displayData
    //generate timestap
    let today = new Date()
    const formatedDate = new Intl.DateTimeFormat("en-US",{year:"numeric",month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);

    let history= {caption,embedLink,formatedDate} 
    try {

       await PostWatchHistory(history)
      
   
    } catch (error) {
      
    }
   }
const handleVideoDelete =async (id)=>{
  try{
  const responce= await deleteVideo(id)
  }
  catch(error) {
  
  }
  setDeleteVideoStatus(true)
}
const dragStarted =(e,id)=> { 
  e.dataTransfer.setData("cardId",id)
}

  return (
    <>

    {
     displayData && 
    <Card className="mb-3" draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
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
          <div className="d-flex justify-content-center align-items-center ">
            {" "}
            <iframe
         height="300"
         width="460"
              
              src={displayData?.embedLink}
              title={displayData?.caption}
             
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
