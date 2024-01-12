function Buttons({ punch, restart, vie }) {
  return (
    <div>
      <button onClick={vie > 0 ? punch : restart}>{vie > 0 ? "Punch": "Restart"}</button>
    </div>
  )
}
export default Buttons