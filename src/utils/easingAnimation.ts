export const easeOutCubic = (
  currentTime: number,
  startValue: number,
  changeValue: number,
  duration: number,
) => {
  return (
    changeValue *
      ((currentTime / duration - 1) * currentTime * currentTime + 1) +
    startValue
  )
}
