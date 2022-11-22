import { useCounter } from './NumberContext'


const Header = () => {
  const { value } = useCounter()
  return(
    <div>
      Ha hecho {value} clicks
    </div>
  )
}

export default Header
