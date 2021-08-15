import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Home(props) {
    console.warn('Home props : ', props)
    const products = [
        { name: 'Iphone 12', price: '$1000.0' },
        { name: 'Samsung S9', price: '$1500.0' },
        { name: 'OnePlus 9T', price: '$800.0' }
    ]
    return (
        <div className='center'>
            <h1>Products</h1> <br /> <br />
            <div className='row d-flex justify-content-between'>
                {
                    products.map((item, key) =>
                        <div className='col-md-4' key={key}>
                            <Card style={{ width: '21rem' }}>
                                {/* <Card.Img variant="top" src="./iphone12design.jpg" /> */}
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        New advanced {item.name} with stunning features.
                                    </Card.Text>
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <Button className="btn btn-success" onClick={() => props.addToCartHandler({ name: item.name, price: item.price })} variant="primary">Add to cart</Button>
                                        </div>
                                        <div className='col-md-7'>
                                            <Button className="btn btn-danger" onClick={() => props.removeFromCartHandler()}>Remove from cart</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Home;