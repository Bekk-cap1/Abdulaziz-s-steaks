import React, { useContext, useState } from 'react'
import { data, data2 } from '../../assets/data/data'
import './Starter.scss'
import Modal from '../../components/Modal/Modal'
import { Context } from '../../components/Modal/Context/Context'

function Starter() {

    const [modalActive, setModalActive] = useState(false)
    const {number, setNumber} = useContext(Context)

    const modalka = (e)=>{
        setModalActive(true)
        console.log(e.target.parentNode.id);
        setNumber(e.target.parentNode.id)
    }


    return (
        <div className='starter'>
            <div className="container">
                <div className="starter__inner">
                    <h1>How to cook a steak?</h1>
                    <h2>
                        Ingredients
                    </h2>
                    <ul>
                        {
                            data?.map((e) => (
                                <li onClick={modalka} id={e.id}>
                                    <img src={e.img[0].image} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                    <h2>Preparation</h2>
                    <ul>
                        {
                            data2?.map((e) => (
                                <li onClick={modalka} id={e.id}>
                                    <img src={e.img[0].image} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                    
                    <Modal active={modalActive} setActive={setModalActive} />
                </div>
            </div>
        </div>
    )
}

export default Starter