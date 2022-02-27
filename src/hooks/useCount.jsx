import { useEffect, useState } from 'react'

const useCount = (startNumber, endNumber) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber)
  const runTime = Math.round(2000 / endNumber)

  const handleIncrease = () => {
    const newCurrentNumber =
      currentNumber === endNumber ? currentNumber : currentNumber + 1

    setCurrentNumber(newCurrentNumber)
  }

  useEffect(() => {
    const countInterval = setInterval(handleIncrease, runTime)

    return () => {
      clearInterval(countInterval)
    }
  }, [currentNumber])

  return currentNumber
}

export default useCount
