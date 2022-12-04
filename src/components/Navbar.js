import { Navbar as NavbarBS, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/shoppingCartContext'

export function Navbar() {
  const { getCartQuantity, openCart } = useShoppingCart()

  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Coffee Makers
          </Nav.Link>
          <Nav.Link to="/accessories" as={NavLink}>
            Accessories
          </Nav.Link>
        </Nav>
        <Button
          style={{ height: '3rem', width: '3rem', position: 'relative' }}
          onClick={openCart}
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          {getCartQuantity > 0 && (
            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                transform: 'translate(25%,25%)',
                height: '1.5rem',
                width: '1.5rem',
              }}
            >
              {getCartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBS>
  )
}
