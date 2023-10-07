function fancyButton(props): JSX.Element {
  return (
    <button
      className="cta"
      onClick={props.onClick}
      id={props.id}
      key={props.id}
      style={{
        width: '250px',
        height: '55px',
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Brda',
        fontStyle: 'italic',
        lineHeight: '3px',
        letterSpacing: '2px',
        ...props.style
      }}
    >
      <span
        style={
          {
            // color: '#FFF000',
          }
        }
      >
        {props.text}
      </span>
    </button>
  )
}

export default fancyButton
