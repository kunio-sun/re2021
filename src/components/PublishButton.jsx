
const PublishButton = (props) => {

  return (
    <>
      <button onClick={() => { props.onClick() }}>
        今回状態: {props.isPublished.toString()}
      </button>
    </>
  )
}
export default PublishButton;