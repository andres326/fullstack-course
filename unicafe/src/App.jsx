import { useState } from 'react'
import { Button } from './components/Button'
import { Statistics } from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <main>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good+1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral+1)} text={"neutral"} />
      <Button onClick={() => setBad(bad+1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </main>
  )
}

export default App