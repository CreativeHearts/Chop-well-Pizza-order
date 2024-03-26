import { Link, useNavigate } from 'react-router-dom'

function LinkButton({ children, to }) {
  const navigate = useNavigate()
  const className =
    'text-sm text-green-500 hover:text-green-600 hover:underline'
  if (to === -1) return <button onClick={() => navigate(-1)}>{children}</button>
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default LinkButton
