import './ProgressBar.css'

function ProgressBar({vie}) {
  return (
    <div>
        <progress value={vie}  max={100}></progress>
    </div>
  )
}
export default ProgressBar