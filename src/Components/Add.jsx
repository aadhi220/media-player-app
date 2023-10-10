import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { uploadVideo } from "../services/allAPI";

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: "",
  });

  const extractUrl = (e) => {
    const { value } = e.target;
    if (value) {
      const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`;
      setVideo({ ...video, embedLink: embedData });
    } else {
      setVideo({ ...video, embedLink: "" });
    }
  };

  const handleUpload = async () => {
    //get details of video
    const { id, caption, url, embedLink } = video;
// if videinfo is emty
    if (id && caption && url && embedLink) {
      
      
      //makeing api call

      try {

        const responce = await uploadVideo(video);
        console.log(responce);

        //checking weather scuccess or not
     if (responce.status>=200 && responce.status <=300) {
      alert(`${responce.data.caption} video uploaded sucessfully`)
     }else {
      alert("Plz give uniqe id")
     }
handleClose()

      } catch (error) {
        console.log(error.responce.data);
      }
    } else {
      alert("plz");
    }
  };

  console.log(video);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn">
          <i className="fa-solid fa-circle-plus fs-5"></i>
        </button>
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
              <Form.Control
                type="text"
                onChange={(e) => setVideo({ ...video, id: e.target.value })}
                placeholder="Enter video ID"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setVideo({ ...video, caption: e.target.value })
                }
                placeholder="Enter video Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
                placeholder="Enter video Image URL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={(e) => extractUrl(e)}
                placeholder="Enter video URL"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-info">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
