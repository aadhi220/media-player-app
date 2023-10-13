import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import {
  updateCategory,
  deleteCategory,
  getvideo,
  saveCategory,
} from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCategory } from "../services/allAPI";
import VideoCard from "./VideoCard";

export default function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategory = async () => {
    //api call

    if (categoryName.length > 0) {
      const body = {
        categoryName,
        allVideos: [],
      };
      try {
        const responce = await saveCategory(body);
        if (responce.status >= 200 && responce.status <= 300) {
          toast.success("category added");
          handleClose();
          setCategoryName("");
        }
      } catch {
        toast.error("upload failed");
      }
    } else {
      toast.warning("Plz fill category name");
    }

    getAllCategory();
  };

  const getAllCategory = async () => {
    //api call

    const { data } = await getCategory();
    setAllCategory(data);
  };

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    getAllCategory();
  };

  const dragOver = (e) => {
    // console.log(`dargover`);
    e.preventDefault();
  };
  const videoDropped = async (e, categoryId) => {
    // console.log(`category id`+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId");
    // console.log(`videoid`+videoCardId);
    //get details of video to be dropped
    const { data } = await getvideo(videoCardId);
    //get details of category
    // console.log(data);

    const selectedCategory = allCategory.find((item) => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    // console.log(selectedCategory);

    //calling api
    await updateCategory(categoryId, selectedCategory);
    getAllCategory();
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info">
          Add New Ca tegory
        </button>

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
                <Form.Control
                  type="text"
                  value={categoryName || ""}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter category name"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={addCategory} className="btn btn-info">
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {allCategory.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="border mt-3 p-3 rounded"
            droppable="true"
            onDrop={(e) => videoDropped(e, item?.id)}
            onDragOver={(e) => dragOver(e)}
          >
            <div className="d-flex justify-content-between align items-center">
              <h6>{item?.categoryName}</h6>
              <button
                className="btn"
                onClick={() => handleDeleteCategory(item?.id)}
              >
                <i
                  className="fa-solid fa-trash"
                  style={{ color: "#ff0000" }}
                ></i>
              </button>
            </div>
            {item?.allVideos && (
              <Row>
                {item?.allVideos.map((card) => (
                  <Col sm={12}>
                    <div
                      style={{ backgroundColor: "rgb(39, 39, 39)",position:'relative',height:'70px' }}
                      className="d-flex align-items-center  pe-4  mt-2 rounded justify-content-between "
                    >
                      <img
                        className=" rounded  h-75"
                        style={{ width: "80px",overflow:'hidden',objectFit:'cover',position:'absolute',left:'10px',scale:'1.2' }}
                        src={card?.url}
                        alt=""
                      />{" "}
                      <span style={{position:'absolute',right:'1rem'}}>{card?.caption}</span>
                    </div>
                    {/* <VideoCard displayData={card}/> */}
                  </Col>
                ))}
              </Row>
            )}
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center aligin-items-center w-100 ">
          no categories added
        </div>
      )}

      <ToastContainer theme="colored" autoClose={2000} />
    </>
  );
}
