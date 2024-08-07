import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Built by: David Hyppolite</span>
        </div>

        <div>
          <a href='https://www.linkedin.com/in/david-h-60560b61/' className='me-4 text-reset'>
            <MDBIcon fab icon='linkedin' />
          </a>
          <a href='https://github.com/dhayv' className='me-4 text-reset'>
            <MDBIcon fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                Recipe Meals
              </h6>
              <p>
                Discover great new recipes with instructions and videos.
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      

        © 2024 Copyright:
        <a className='text-reset fw-bold' href='http://recipemeal.site/'>
            Recipemeals
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
