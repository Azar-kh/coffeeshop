import { Container, Row } from 'react-bootstrap'

export function Home() {
  return (
    <>
      <Container>
        <h1>Coffee Shop</h1>
        <h6 className="text-muted">
          We provide the best coffee experience for our coffee lovers
        </h6>
        <Row
          lg={3}
          className="mt-5 d-flex align-items-center justify-content-center "
        >
          <img
            src="/images/homepage/3.jpg"
            alt=""
            height="400px"
            className="d-none d-lg-block"
          />

          <img src="/images/homepage/1.jpg" alt="" height="400px" />

          <img
            src="/images/homepage/3.jpg"
            alt=""
            height="400px"
            style={{ transform: 'rotate(180deg)' }}
            className="d-none d-lg-block"
          />
        </Row>
      </Container>

      <div
        style={{ height: '60px' }}
        className="d-flex bg-white justify-content-evenly text-primary fw-bold fs-6 align-items-center fixed-bottom "
      >
        <div className="d-flex justify-content-baseline ">
          <span className=" material-symbols-outlined">more_time</span>
          <span>Quick and Easy Order</span>
        </div>
        <div className="d-flex justify-content-baseline">
          <span className="material-symbols-outlined">tips_and_updates</span>
          <span>Latest Technology</span>
        </div>
        <div className="d-flex justify-content-baseline">
          <span className="material-symbols-outlined">grade</span>
          <span>Five Star Ratings</span>
        </div>
      </div>
    </>
  )
}
