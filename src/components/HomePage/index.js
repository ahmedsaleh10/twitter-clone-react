import LeftPart from '../LeftPart'
import MiddlePart from '../MiddlePart'
import RightPart from '../RightPart'
import { ReactData } from '../../mockData/ReactData'
// import { TwitterData } from '../../mockData/TwitterData'
const HomePage = () => {
  return (
    <div className='homePage'>
        <LeftPart/>
        <MiddlePart data={ReactData}/>
        <RightPart/>
    </div>
  )
}

export default HomePage