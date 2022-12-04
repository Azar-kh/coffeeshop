import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { CartItem } from './CartItem'
import { formatCurrency } from '../utilities/formatCurrency'
import products from '../data/coffeemakers.json'
import accessories from '../data/accessories.json'

export function ShoppingCart({ isOpen }) {
  const { closeCart, getCartQuantity, cartItems } = useShoppingCart()
  const storeItems = [...products, ...accessories]
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {getCartQuantity === 0 ? (
          <div className="text-muted">Your shopping cart is empty!</div>
        ) : (
          <Stack>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto mt-3 fw-bold fs-5">
              Total :{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0),
              )}
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}
