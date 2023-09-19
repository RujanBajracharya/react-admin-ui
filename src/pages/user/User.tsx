import { Single } from '../../components/single/Single'
import { useGlobalContext } from '../../context'
import './user.scss'

export const User = () => {

  const {singleUser} = useGlobalContext();
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}
