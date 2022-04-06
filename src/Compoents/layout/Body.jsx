import '../../styles/layout/body.css'
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import Main from './Main'
const Body = () => {
    return <div className='body__container'>
<LeftSide/>
<Main/>
<RightSide/>
    </div>
}
export default Body