import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
const NewComponent = (props) => {
  return (
    <div className="newcom">
      Welcome {props.name}
    </div>
  )
}
const Hello = (props) => {
  const dateOfBirth = (param) => {
    const date = new Date();
    const ages = date.getFullYear()
    param = props.age
    return ages - param
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {dateOfBirth()} years old
      </p>
    </div>
  )
}
const arr = [
  {
    name: 'Abdullahi',
    level: 100,
  }]
const name = ['Intelligence', 'Usman']
let names = name.join(' ')
function App(props) {
  const [count, setCount] = useState(0)


  // It is also possible to add any varrible inside of the component function but always before the return 
  // The  files App.css, App.test.js, index.css, logo.svg, setupTests.js and reportWebVitals.js may be deleted as they are not needed in our application right now And this happens only when create-react-app was used to create the react app 

  // It is important to know that the export default App at the base of App.jsx, without this export the code is breaking down entirely and the code is not going to run

  // It it is not a must that props are spelt the correct way before it is used ( it can actually be anyname.the name you want to pass. the name u passed will be use at jsx when calling it)

  // One of the advantage i see in using a props instead of passing values as a parameter is it makes ur code readable and it will make sense compared to passing a lot of parameters

  // Objects ar not valid as a react child
  console.log('Hello from component')
  console.log('I promise to keep my console open all the time during this course, and for the rest of my life when I\'m doing web development')
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  const arto = {
    name: 'Arto Hellas',
    greet: function () {
      console.log('hello, my name is ' + this.name)
    },
  }

  // arto.greet()
  // setTimeout(arto.greet, 1000)
  // setInterval(arto.greet, 1000)
  // This doesn't work When time out or time interval is added
  setTimeout(arto.greet.bind(arto), 2000)
  // The solution to this when using setTimeout or setInterval is using bind after calling the object
  // Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto, independent of where and how the method is being called.

  /* Component state, event handlers*/

  const name = 'Peter'
  const age = 10
  let [counter, setCounter] = useState(0)
  setInterval(() => setCounter(counter += 1), 1000)
  console.log('rendering...', counter)

  return (
    <div className="App">
      {a} Plus {b} is {a + b}

      <NewComponent name='Usman Abdullahi Babatunde' />
      <p>{arr[0].name}</p>
      <div>{names}</div>
      <Hello name="Maya" age={1997} />
      <Hello name={name} age={2003} />
      <div>{counter}</div>
    </div>
  )
}

export default App