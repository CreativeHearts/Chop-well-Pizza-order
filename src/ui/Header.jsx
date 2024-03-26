import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
  return (
    <header className=" border- flex items-center justify-between border-b-[2px] border-green-200 bg-red-500 px-4 py-4 uppercase sm:px-6">
      <Link to="/" className="text- tracking-widest text-slate-50">
        Chop Well Pizza
      </Link>
      <SearchOrder />

      <Username />
    </header>
  )
}

export default Header
