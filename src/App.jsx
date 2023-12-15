import { useState } from 'react'

function App() {

  const [now, setNow] = useState('')
  const [dayNow, setDayNow] = useState('')

  const updateClock = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    const nowDay = `${'0' + day}/${month < 10 ? '0' + month : month}/${year}`
    const time = `${hours} : ${minutes < 10 ? '0' + minutes : minutes} : 
                  ${seconds < 10 ? '0' + seconds : seconds}`

    setDayNow(nowDay)

    setNow(time)

  }

  setInterval(updateClock, 1000)

  return (
    <div className='container'>
      <div>
        <p className='date'>{dayNow}</p>
        <h1 className='date'>{now}</h1>
      </div>
    </div>
  )
}

export default App
