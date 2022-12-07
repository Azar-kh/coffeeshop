import { Container } from 'react-bootstrap'
import '../style.css'

export function Home() {
  return (
    <>
      <Container>
        <h1>Coffee Shop</h1>
        <h6 className="text-muted">
          We provide the best coffee experience for our coffee lovers
        </h6>
        <Container fluid className="d-flex mt-4">
          <img
            style={{ objectFit: 'cover' }}
            className="d-block w-100 img-responsive cover"
            height="450px"
            src="/images/homepage/home.jpg"
            alt=""
          />
        </Container>
      </Container>

      <div
        style={{ height: '60px' }}
        className="d-flex bg-white justify-content-evenly text-primary fw-bold fs-6 align-items-center fixed-bottom "
      >
        <div className="footer d-flex justify-content-center align-items-center">
          <span className=" material-symbols-outlined">more_time</span>
          <span>Quick and Easy Order</span>
        </div>
        <div className="footer d-flex justify-content-center align-items-center">
          <span className="material-symbols-outlined">tips_and_updates</span>
          <span>Latest Technology</span>
        </div>
        <div className="footer d-flex justify-content-center align-items-center">
          <span className="material-symbols-outlined">grade</span>
          <span>Five Star Ratings</span>
        </div>
      </div>
    </>
  )
}
