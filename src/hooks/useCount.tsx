import { useCallback, useEffect, useState } from 'react'

import { easeQuadOut } from '../utils/easingAnimation'

const useCount = (startNumber: number, endNumber: number): number => {
  const [count, setCount] = useState<number>(startNumber)
  const runTime = 2000
  const frameRate = 2000 / 60
  const totalFrames = Math.round(runTime / frameRate)
  let frame = 0

  const handleIncrease = useCallback(() => {
    frame++
    const progress = easeQuadOut(frame / totalFrames)
    const currentCount = Math.round(endNumber * progress)

    if (endNumber >= currentCount) {
      setCount(currentCount)
    }
  }, [endNumber, frame, totalFrames])

  useEffect(() => {
    const countInterval = setInterval(handleIncrease, frameRate)

    return () => {
      clearInterval(countInterval)
    }
  }, [frameRate, handleIncrease, endNumber])

  return count
}

export default useCount
