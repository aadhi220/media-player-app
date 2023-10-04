import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
  const navigateByUrl =useNavigate()

  const navigate = ()=> {
    navigateByUrl('/home')
  }
  return (

    <>
<Row className=' w-100 align-items-center justify-content-center '>
  <Col></Col>
<Col lg={4}>
  <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
  
  <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut maiores qui tenetur dolorem distinctio nihil quod ea optio, recusandae quis nisi minima fugit. Repudiandae ducimus ipsam expedita, magni id quia.</p>
   <button onClick={navigate} className='btn btn-info mt-3 fw-bolder'>Get Started</button>
   
   
   
   
   </Col>
   <Col></Col>
<Col lg={6}>
  <img className='img-fluid w-100 ' src="https://i.gifer.com/Nt6v.gif" alt="" />
</Col>
</Row>

<div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column ">
  <h3>Features</h3>
 <div className='d-flex align-items-center justify-content-evenly w-100  mt-5 mb-5'>
    <Card style={{ width: '300px' }} className='p-3'>
        <Card.Img variant="top" style={{width:'300px',height:'300px'}} className='img-fluid ' src="https://phoneky.co.uk/thumbs/screensavers/down/music/music_za29pl9t.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '300px' }} className='p-3'>
        <Card.Img variant="top" style={{width:'300px',height:'300px'}} className='img-fluid ' src="https://phoneky.co.uk/thumbs/screensavers/down/music/music_za29pl9t.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>

      <Card style={{ width: '300px' }} className='p-3'>
        <Card.Img variant="top" style={{width:'300px',height:'300px'}} className='img-fluid ' src="https://phoneky.co.uk/thumbs/screensavers/down/music/music_za29pl9t.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
 </div>
</div>

<div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center">
      <div className='content'>
        <h3 className='text-warning mb-3'>Simple, Fast and Powerful</h3>
        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam in assumenda voluptas? Ipsa, possimus reprehenderit. Ut reiciendis libero est exercitationem neque, perferendis dolor nemo non! Amet officiis atque beatae.
        </h6>

        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Categorise Video</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam in assumenda voluptas? Ipsa, possimus reprehenderit. Ut reiciendis libero est exercitationem neque, perferendis dolor nemo non! Amet officiis atque beatae.
        </h6>

        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam in assumenda voluptas? Ipsa, possimus reprehenderit. Ut reiciendis libero est exercitationem neque, perferendis dolor nemo non! Amet officiis atque beatae.
        </h6>
      </div>
      <div className='video ms-5 w-100 h-100'>
      <iframe width="500" style={{height:'500px'}} src="https://www.youtube.com/embed/nGeHstBtoH0" title="Anirudh&#39;s Rocking Performance of Hukum | Jailer Audio Launch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
   


    </>
  )
}
