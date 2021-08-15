import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../services/actions/cartAction'

const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch)=>({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeFromCartHandler:data => dispatch(removeFromCart())
})
export default connect(mapStateToProps,mapDispatchToProps) (Home);