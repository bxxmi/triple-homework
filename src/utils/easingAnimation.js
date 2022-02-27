export const easeOutCubic = (
  currentTime,
  startValue,
  changeValue,
  duration,
) => {
  return (
    changeValue *
      ((currentTime / duration - 1) * currentTime * currentTime + 1) +
    startValue
  )
}
