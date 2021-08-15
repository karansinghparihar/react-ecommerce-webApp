import Cart from "../components/Cart";
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
    data:state.cardItems
})

const mapDispatchToProps=()=>({

})

export default connect(mapStateToProps,mapDispatchToProps) (Cart);