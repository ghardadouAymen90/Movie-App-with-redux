import React from 'react'
import './Card.css'
import Rate from './rateRendering'

const Cards = ({ films }) =>

    films.map((el, i) =>

        <div key={i} className="col-md-6 col-sm-12 col-lg-4 py-4 col-12 px-5">
            <div className="card text-white mx-auto" data-effect="zoom">
                <button className="card__save  js-save" type="button">
                </button>
                <figure className="card__image">
                    <img src={el.img} alt={el.name} />
                </figure>
                <div className="card__header">
                    <figure className="card__profile">
                        <img src={el.img} alt={el.name} />
                    </figure>
                </div>
                <div className="card__body">
                    <h3 className="card__name ">{el.name}</h3>
                    <div className="card__job"><Rate rateFactor={el.rating} /></div>
                    <div className="card__bio">Film - <span className="card__date">{el.year}</span></div>
                </div>
                <div className="card__footer">

                    <p className=""></p>
                </div>
            </div>

        </div>
    )


export default Cards