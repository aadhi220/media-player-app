import React from "react";
import { Link } from "react-router-dom";
export default function WatchHistory() {
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between flex-column">
       <div className="d-flex justify-content-between">
          <h3>Watch History</h3>
  
          <Link to={"/home"} className="d-flex align-items-center" style={{textDecoration:'none',fontSize:'20px',color:'White'}}>
            <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
          </Link>
       </div>
        <table className="table mt-5 mb-5 ">
          <thead>
            <tr><th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kabe</td>
              <td><a href="https://imgmusic.com/uploads/album/cover/221/Funky_Grooves_Vol2_ZPP072.jpg">https://imgmusic.com/uploads/album/cover/221/Funky_Grooves_Vol2_ZPP072.jpg</a></td>
              <td>4/1/43</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
