import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap'

function Header(props){
    console.warn('Header : ',props)
    return(
        <div className='cart'>
            <Link to='/cart'><Button className="btn btn-primary">Cart : {props.data.length} &nbsp;&nbsp;<FontAwesomeIcon icon={faCartPlus} /></Button></Link>
        </div>
    )
}
export default Header;