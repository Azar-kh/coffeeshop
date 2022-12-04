import products from '../data/coffeemakers.json'
import { StoreItem } from '../components/StoreItem'
import { Col, Row, Container } from 'react-bootstrap'

export function Store() {
  return (
    <Container className="mb-4">
      <h2 className="mb-4">Coffee Makers</h2>
      <Row md={3} xs={2} lg={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
