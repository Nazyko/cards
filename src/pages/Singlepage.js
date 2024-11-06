import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import "./Singlepage.css"
import { Card } from "antd"

const Singlepage = () => {
    const {id} = useParams()
    const [card, setCard] = useState([])

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res => setCard(res.data))
        
    }, [id])

    return (
        <div>
            {card && (

            
                <div className='card-item'>
                    <img className='card-item__img' src={card.images}/>
                    <div className='card-item__text'>
                        <p className='card-item__title'>{card.title}</p>
                        <p className='card-item__price'>${card.price}</p>
                        <button className='card-item__button'>Buy</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Singlepage
