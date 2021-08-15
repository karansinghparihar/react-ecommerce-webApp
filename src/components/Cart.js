import React from 'react'
import { Table } from 'react-bootstrap'

function Cart(props) {
    console.warn(props.data)
    let totalPrice = 0
    return (
        <div>
            <h1>Cart</h1>
            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, key) =>
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{item.cardData.name}</td>
                                <td>{item.cardData.price}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td>Total Amount</td>
                        <td>{}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;