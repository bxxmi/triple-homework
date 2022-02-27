import { useEffect, useState } from 'react'

const useCount = (startNumber, endNumber) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber)
  const runTime = 2000 / (endNumber - startNumber)

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
