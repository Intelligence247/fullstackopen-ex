import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComplexState from './Components/ComplexState'
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'
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
  // setInterval(() => setCounter(counter + 1), 1000)
  console.log('rendering...', counter)
  let x = 0
  const handleClick = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(counter + 1)
    console.log('clicked already ', ++x)
  }
  // An event handler is supposed to be either a function or a function reference
  const [counter2, setCounter2] = useState(0)
  const increaseByOne = () => setCounter2(counter2 + 1)
  const setToZero = () => setCounter2(0)


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div className="App">
      {a} Plus {b} is {a + b}

      <NewComponent name='Usman Abdullahi Babatunde' />
      <p>{arr[0].name}</p>
      <div>{names}</div>
      <Hello name="Maya" age={1997} />
      <Hello name={name} age={2003} />
      <div>{counter}</div>
      <p>{counter2}</p>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={increaseByOne}>Increase by one</button>
      <button onClick={setToZero}>Zero</button>
      <ComplexState />



<p className='text-[2.5rem] text-[indigo] w-max m-auto'>Exercise starts here</p>
    
<Header course={course.name}/>
        <Content
        content1={`${course.parts[0].name} ${course.parts[0].exercises}`}
        content2={`${course.parts[1].name} ${course.parts[1].exercises}`}
        content3={`${course.parts[2].name} ${course.parts[2].exercises}`}
        />
        
      <p>Number of exercises <Total total= {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      />
      </p>








<p className='text-yellow-800 text-[2rem] w-max m-auto mt-20 mb-5'>Exercises 1.6.-1.14.</p>



    </div>

  )
}

export default App