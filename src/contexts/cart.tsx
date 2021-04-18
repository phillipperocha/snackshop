import { createContext, useState, useEffect } from 'react'

type ItemData = {
  name: string
}

type CartContextData = {
  shopList: ItemData[]
  cartItems: ItemData[]
  amountEachItem: number
  pricePerHundred: number
  discount: number
  finalPrice: number
  addItem: (item: ItemData) => boolean
  removeItem: (item: ItemData) => boolean
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC = ({ children }) => {
  const totalQuantity = 100
  const pricePerHundred = 49.9

  const shopList = [
    { name: 'Coxinha' },
    { name: 'Pastel de carne' },
    { name: 'Pastel de queijo' },
    { name: 'Esfirra' },
    { name: 'Canudinho' },
    { name: 'Empada' },
    { name: 'Torta de Frango' },
  ]

  const [amountEachItem, setAmountEachItem] = useState(totalQuantity)
  const [cartItems, setCartItems] = useState<ItemData[]>([])
  const [discount, setDiscount] = useState(0)
  const [finalPrice, setFinalPrice] = useState(pricePerHundred)

  function addItem(item: ItemData) {
    if (cartItems.length > 3) {
      return false
    }
    setCartItems((prev) => [...prev, item])
    return true
  }

  function removeItem(item: ItemData) {
    if (cartItems.length < 1) {
      return false
    }
    setCartItems((prev) => {
      return prev.filter((i) => i.name !== item.name)
    })
    return true
  }

  useEffect(() => {
    const hasDiscount = cartItems.some(
      (item: ItemData) => item.name === 'Coxinha'
    )
    const discountPrice = hasDiscount ? pricePerHundred * 0.1 : 0
    setDiscount(hasDiscount ? pricePerHundred * 0.1 : 0)
    setFinalPrice(
      hasDiscount ? pricePerHundred - discountPrice : pricePerHundred
    )
    setAmountEachItem(100 / cartItems.length)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        shopList,
        cartItems,
        amountEachItem,
        pricePerHundred,
        discount,
        finalPrice,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
