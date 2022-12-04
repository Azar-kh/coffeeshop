import { Stack, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import products from '../data/coffeemakers.json'
import accessories from '../data/accessories.json'

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart()

  const storeItems = [...products, ...accessories]
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        alt=""
        src={item.image}
        style={{ width: '75px', height: '75px', objectFit: 'scale-down' }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
