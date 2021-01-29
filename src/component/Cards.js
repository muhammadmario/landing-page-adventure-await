import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div class="cards__container">
                <div class="cards__wrapper">
                    <ul class="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                    <ul class="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
