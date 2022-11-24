import { useSelector } from 'react-redux'

const Text = () => {
  const count = useSelector((state) => state.count)
  return(
    <div>
      {count}
    </div>
  )
}

export default Text
