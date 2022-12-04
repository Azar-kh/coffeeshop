import products from '../data/accessories.json'
import { Col, Row, Container } from 'react-bootstrap'
import { AccessoryItem } from '../components/AccessoryItem'

export function Accessories() {
  return (
    <Container className="mb-4">
      <h2 className="mb-4">Accessories</h2>

      <Row md={3} xs={2} lg={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <AccessoryItem {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
