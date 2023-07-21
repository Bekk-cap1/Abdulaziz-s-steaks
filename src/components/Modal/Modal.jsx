import React, { useContext } from 'react'
import { data, data2 } from '../../assets/data/data'
import { Context } from './Context/Context'
import './Modal.scss'

const Modal = ({ active, setActive }) => {
    const { number, setNumber } = useContext(Context)
    console.log(number);
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal-window" onClick={e => e.stopPropagation}>
                {
                    number < 5 ? data?.map((e) => (
                        e.id == number ?
                            <>
                                <ul className='ulcha'>
                                    {
                                        e.img.map((q) => (
                                            <li className='licha'><img src={q.image} alt="" /></li>
                                        ))
                                    }
                                </ul>
                                <h6>{e.text}</h6>
                            </> : ''
                    )) : data2?.map((e) => (
                        e.id == number ?
                            <>
                                <ul className='ulcha'>
                                    {
                                        e.img.map((q) => (
                                            <li className='licha'><img src={q.image} alt="" /></li>
                                        ))
                                    }
                                </ul>
                                <h6>{e.text}</h6>
                            </> : ''
                    ))
                }
            </div>
        </div>
    )
}

export default Modal