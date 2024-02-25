const CTA = (props) => {
    const {theme, text} = props
  return (
    <>
        <button className={`${theme} btn`}>{text}</button>
    </>
  )
}

export default CTA