import { useCallback, useEffect, useState } from 'react'
// import { easeOutCubic } from '../utils/easingAnimation'

const useCount = (startNumber: number, endNumber: number) => {
  const [currentNumber, setCurrentNumber] = useState<number>(startNumber)
  const runTime = Math.round(2000 / endNumber)

  const handleIncrease = useCallback(() => {
    const newCurrentNumber =
      currentNumber === endNumber ? endNumber : currentNumber + 1
    setCurrentNumber(newCurrentNumber)
  }, [currentNumber, endNumber])

  useEffect(() => {
    const countInterval = setInterval(handleIncrease, runTime)

    return () => {
      clearInterval(countInterval)
    }
  }, [currentNumber, handleIncrease, runTime])

  return currentNumber
}

export default useCount
