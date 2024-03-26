import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'
import { getCart } from '../cart/cartSlice'

function Menu() {
  const menu = useLoaderData()
  const cart = useSelector(getCart)
  const quantity = cart.quantity

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} quantity={quantity} />
      ))}
    </ul>
  )
}

export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu
