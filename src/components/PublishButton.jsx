
const PublishButton = (props) => {

  return (
    <>
      <button onClick={() => { props.onClick() }}>
        δ»εηΆζ: {props.isPublished.toString()}
      </button>
    </>
  )
}
export default PublishButton;