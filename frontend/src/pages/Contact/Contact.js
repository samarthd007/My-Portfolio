import React, { useState } from 'react'
import './Contact.css'
import contact from '../../assests/images/contact.png'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { toast } from 'react-toastify'

import axios from 'axios'

const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [msg, setmsg] = useState('')

    //submit button
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (!name || !email || !msg) {
                toast.error('please fill all the fields')
            }
            const res = await axios.post('/api/v1/portfolio/getBill', {
                name,
                email,
                msg,
            })

            if (res.data.success) {
                toast.success(res.data.mail)
                setemail('')
                setmsg('')
                setname('')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className=" contact" id="contact">
                <div className="card0 card border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src={contact} alt="contact" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h6>
                                            <BsLinkedin
                                                size={30}
                                                className="ms-3"
                                            />
                                            <BsGithub
                                                size={30}
                                                className="ms-3"
                                            />
                                            <BsInstagram
                                                size={30}
                                                className="ms-3"
                                            />
                                        </h6>
                                    </div>

                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">
                                            OR
                                        </small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="write your name"
                                            className="mb-3"
                                            value={name}
                                            onChange={(e) => {
                                                setname(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="write your email"
                                            className="mb-3"
                                            value={email}
                                            onChange={(e) => {
                                                setemail(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <textarea
                                            type="text"
                                            name="msg"
                                            placeholder="write your message"
                                            className="mb-3"
                                            value={msg}
                                            onChange={(e) => {
                                                setmsg(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <button
                                            className="button"
                                            onClick={handleSubmit}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
