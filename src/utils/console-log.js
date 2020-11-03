export default (log, leftLabel = 'Axios', rightLabel = 'error') => {
  if (process.env.NODE_ENV !== 'production') {
    const baseStyle = 'padding:0.2rem 0.3rem;color:white;'
    const style1 = `${baseStyle}border-radius:1rem 0 0 1rem;background: rgb(53,73,94);`
    const style2 = `${baseStyle}border-radius:0 1rem 1rem 0;background: #EA5455;`
    console.log(`%c${leftLabel}%c${rightLabel}`, style1, style2, log)
  }
}
