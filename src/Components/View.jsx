import React from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'

function View() {
  return (
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard />
        </Col>
      </Row>
  )
}

export default View