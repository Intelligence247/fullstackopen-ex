import  {useState} from 'react'

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good+neutral+bad
    const positive= (good*100)/all
    const average = (neutral+bad)/good
const Statistics=(props)=>{
    if(good==0 && neutral==0 && bad == 0){
        return (
            <p>No Feedback given</p>
        )
    }else{
    return(
<div className="statistic">
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>All {all}</p>
    <p>Average {average}</p>
    <p>Positive {positive} %</p>
    </div>
    )
    }
}
  return (
    <div className="unicafe bg-blue-500 w-[20rem] h-[20rem] m-auto p-4 ">
    <h1 className='text-center text-[2rem] text-[green]'>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button>
    <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
    <button onClick={()=>setBad(bad+1)}>Bad</button>
    <h1 className='text-center text-[2rem] text-[lightgreen]'>Statistic</h1>
   <Statistics/>
  </div>
  )
}

export default Unicafe