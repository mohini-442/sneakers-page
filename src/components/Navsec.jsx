import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import navimg from '../assets/images/navimg.png'
import Nav from 'react-bootstrap/Nav';

const Navsec = () => {
  const [data, setData] = useState(false)
  function nav() {
    setData(!data)
    if (data === false) {
      document.body.classList.add("overflow-hidden");
    }
    else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <nav className='nav-shadow z-1 position-relative'>
      <Container className='py-3'>
        <div className='d-flex align-items-center justify-content-between'>
          <img src={logo} alt="logo" className='d-none d-lg-block cursor-pointer' />
          <img src={navimg} alt="navimg" className='w-img' />
        </div>
      </Container>
      <div className='shadow1'>
        <Container className=' py-lg-3 py-2'>
          <div className='d-flex align-items-center justify-content-between'>
            <img src={logo} alt="logo" className='d-block d-lg-none cursor-pointer img-h' />
            <label className='menu' onClick={nav}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <Nav className={`d-flex align-items-center gap-3 justify-content-center justify-content-lg-end mobile ${data ? "end-0" : "right-100"}`}>
              <Nav.Item>
                <Nav.Link href="#ist" className='ff-roboto fs-sm fw-normal color-black nav-links'>HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#2nd" className='ff-roboto fs-sm fw-normal color-black nav-links'>SNEAKERS KOPEN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#3rd" className='ff-roboto fs-sm fw-normal color-black nav-links'>INTERVIEWS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#4th" className='ff-roboto fs-sm fw-normal color-black nav-links'>SALE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#5th" className='ff-roboto fs-sm fw-normal color-black nav-links'>SNEAKER VAN DE DAG
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#6th" className='ff-roboto fs-sm fw-normal color-black nav-links'>SNEAKER FORUM
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-links'>BLOG
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </div>
    </nav>
  )
}

export default Navsec
