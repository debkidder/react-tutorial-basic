function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
  //   div is a built-in component
  // this forwards the function into the div
  // points at props.onClick
}

export default Backdrop;
