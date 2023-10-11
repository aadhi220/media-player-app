import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { deleteCategory, saveCategory } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCategory } from "../services/allAPI";

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
  };

  const getAllCategory = async () => {
    //api call

    const { data } = await getCategory();
    setAllCategory(data);
  };
  console.log(allCategory);

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    getAllCategory();
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info">
          Add New Category
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

      {allCategory ? (
        allCategory?.map(item => (
          <div className="border mt-3 p-3 rounded">
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
          </div>
        ))
      ) : (
        <div>no categories added</div>
      )}

      <ToastContainer theme="colored" autoClose={2000} />
    </>
  );
}
