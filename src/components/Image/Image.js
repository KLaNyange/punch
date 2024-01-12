import bag from '../../assets/img/bag.png'
import bagBurst from '../../assets/img/bagBurst.png'

function Image({vie}) {
  return (
    <div>
        <img src={vie>0 ? bag : bagBurst} alt="" />
    </div>
  )
}
export default Image