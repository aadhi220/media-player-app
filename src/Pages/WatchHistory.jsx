import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteWatchHistory, getWatchHistory } from "../services/allAPI";
export default function WatchHistory() {
  const [videoWatchHistory, setVideoWatchHistory] = useState([]);

  const getAllWatchHistory = async () => {
    try {
      const { data } = await getWatchHistory();
      setVideoWatchHistory(data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const handleDelete = async (id) => {
    //api call

     await deleteWatchHistory(id);
    getAllWatchHistory();
    // console.log(responce);
  };

  useEffect(() => {
    getAllWatchHistory();
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between flex-column">
        <div className="d-flex justify-content-between">
          <h3>Watch History</h3>

          <Link
            to={"/home"}
            className="d-flex align-items-center"
            style={{ textDecoration: "none", fontSize: "20px", color: "White" }}
          >
            <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
        <table className="table mt-5 mb-5 ">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>TimeStamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {videoWatchHistory.length > 0 ? (
              videoWatchHistory.map((history, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{history?.caption}</td>
                  <td>
                    <a target="_blank" href={history?.embedLink}>
                      {history.embedLink}
                    </a>
                  </td>
                  <td>{history?.formatedDate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(history?.id)}
                      className="btn"
                    >
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#ff0000" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div>No Watch history</div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
