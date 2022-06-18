import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'


const Nava = ({children}) => {
    return(
      <>  
      <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-light'>
          <Container>
            <Nav.Link ><Image  src='/assets/logo.png'  width={300} height={120} layout='intrinsic'/></Nav.Link>
          </Container>
      </Navbar>
      {children}
      <Navbar collapseOnSelect expand="lg" sticky="top" >
          <Container className='footer'>
            <Nav.Link ></Nav.Link>
              <Nav className="me-auto mx-auto d-flex  ">
                <div>
                    <Nav.Link><h3 className=" text-center text-light">Powered by </h3></Nav.Link>
                    <Nav.Link>
                        <div className='d-flex justify-content-center'>
                        <Image  src='/assets/logo2.png'  width={150} height={80} layout='intrinsic'/>
                        </div>
                    </Nav.Link>
                    <Nav.Link><h3 className="text-center text-light">©Copyright-2022 Blade Link Argentina. All Rights Reserved. </h3></Nav.Link>
                </div>
              </Nav>
              <Nav>
              </Nav>
          </Container>
      </Navbar>
    </>
    )
}
export default Nava;