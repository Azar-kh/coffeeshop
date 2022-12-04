import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import '../style.css'

export function StoreItem({ id, name, price, image }) {
  const {
    getItemQuantity,
    addToCart,
    decreaseCartItems,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        src={image}
        height="200px"
        style={{ objectFit: 'scale-down' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          id="card-title"
          className="d-flex justify-content-between align-items-baseline mb-4"
        >
          <span>{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              variant="outline-primary"
              onClick={() => addToCart(id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ gap: '0.7rem' }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: '0.7rem' }}
              >
                <Button
                  variant="light"
                  size="sm"
                  className="d-flex justify-content-center align-items-center"
                  onClick={() => addToCart(id)}
                >
                  <span className="material-symbols-outlined">add</span>
                </Button>

                <span className="fs-5">{quantity}</span>

                <Button
                  variant="light"
                  className="d-flex justify-content-center align-items-center"
                  size="sm"
                  onClick={() => decreaseCartItems(id)}
                >
                  <span className="material-symbols-outlined">remove</span>
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                className="d-flex justify-content-center align-items-center"
                onClick={() => removeFromCart(id)}
              >
                <span className="material-symbols-outlined">delete</span>
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
