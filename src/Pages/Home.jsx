import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import { Row ,Col } from 'react-bootstrap'
import View from '../Components/View'
import Category from '../Components/Category'




function Home() {

  const [uploadVideoServerResponce,setUploadVideoServerResponce] =useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between">
      <div className='add'><Add  setUploadVideoServerResponce={setUploadVideoServerResponce}/></div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}} className='fs-5'>Watch History</Link>
    </div>
    <Row className="container-fluid w-100 ">
      <Col className='all-video col-lg-8'>
      <h3>All Videos</h3>
      <div className='videos w-100'>
        <View uploadVideoServerResponce={uploadVideoServerResponce} />
      </div>
      </Col>
      <Col className='category col-lg-3'>
        <Category/>
      </Col>
    </Row>
    </>
  )
}

export default Home