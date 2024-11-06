import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import { Card } from 'antd';
const { Meta } = Card;

const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products`)
        .then(response => setProducts(response.data))
        .catch(error => setError(error))

    }, [])

    return (
        <>
            <div className='wrapper'>
                <h1 className='title'>Products</h1>
                {error && <p>Error: {error}</p>}
                <ul className='cards'>
                    {products.map(product => (
                        <Link to={`/${product.id}`}>

                            <Card
                                hoverable
                                style={{
                                width: 240,
                                height: 350
                                }}
                                cover={<img alt="example" src={product.images} />}
                            >
                                <Meta title={product.category.name} description={product.title} />
                            </Card>

                            
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home