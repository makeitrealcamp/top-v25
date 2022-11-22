import { Component, PureComponent, useState, useEffect } from 'react'

class Counter extends PureComponent {
  // state = {
  //   count: 0
  // }
  constructor() {
    super()
    this.state = {
      count: 0,
    }

    console.log('Se monto')
    // this.handleClick = this.handleClick.bind(this)
  }

  interval = null

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   console.log(111)
    // }, 5000);

    // this.setState({ count: 10 })
  }

  componentDidUpdate() {
    console.log('every render')
  }

  componentWillUnmount() {
    console.log('se desmonto')
    // clearInterval(this.interval)
  }

  // shouldComponentUpdate(nextProps, nextState) {

  //   if (nextState.count === 5) {
  //     return false
  //   }

  //   return true
  // }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  render() {
    const { count } = this.state

    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default Counter


// const Counter = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   useEffect(() => {
//     console.log('after render')
//   }, [])

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   )
// }
