import { Single } from '../../components/single/Single'
import { useGlobalContext } from '../../context'
import './product.scss'

export const Product = () => {
    const {singleProduct} = useGlobalContext();

  return (
    <div>
        <Single {...singleProduct}/>
    </div>
  )
}
