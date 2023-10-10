import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'
function View({uploadVideoServerResponce}) {

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const [allVideos,setAllVideos]=useState([])
const getAllUploadedVideos = async() => {
  try {
    const {data} = await getAllVideos()
    setAllVideos(data)
    console.log(data);
    
     





  } catch (error) {
    console.log(error.responce.data);
  }
}  

useEffect(()=> {
  getAllUploadedVideos()
  setDeleteVideoStatus(false)
},[uploadVideoServerResponce,deleteVideoStatus])

  console.log();
  return (
    <Row>
      {
        allVideos.length>0 ? 
  allVideos.map(video=> (
<Col sm={12} md={6} lg={4} xl={3}>
   <VideoCard displayData={video}  setDeleteVideoStatus={setDeleteVideoStatus}/>   
      </Col>

  ))

:
<div>video library is empty</div>

      }
      
     
      </Row>
  )
}

export default View