import Header from '/components/header'
import Footer from '/components/footer'
import React, {useState} from 'react'
import Modal from '/components/Modal'
import { signIn, signOut, useSession } from "next-auth/react";

export default function MyCard() {
    const [showModal, setShowModal] = useState(false);
    const {data: session, status, data} = useSession();

  if (status === 'authenticated') { //로그인 된 경우 Login 버튼 없애기
    return (
        <> 
        < Header /> <section className="text-gray-600 body-font">
            <div
                className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <img
                    className="rounded-lg shadow-lg "
                    src="/Business_card_image.png"
                    width='600'
                    height='600'
                    alt="user-image"/>
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Markdown code:</label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                placeholder='[![MY IT 명함](https://git-business-card.web.app/mycard/{username})](https://git-business-card.web.app)'
                                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div>
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12"
                                onClick={() => setShowModal(true)}><pre>공유</pre></button>
                            <Modal onClose={() => setShowModal(false)} show={showModal}>
                                <section className="text-gray-600 body-font">
                                    <div
                                        className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                                        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                                            <div className="flex w-full justify-center items-end">
                                                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                                                    <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Image URL:</label>
                                                    <input
                                                        type="text"
                                                        id="hero-field"
                                                        name="hero-field"
                                                        placeholder='https://git-business-card.web.app/mycard/{user.login}'
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                </div>

                                                <button
                                                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12"><pre>복사</pre></button>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Modal>
                        </div>
                    </div>
                    <div className="flex"></div>
                </div>
            </div>
        </section>
        <Footer/>
        
    </>
    ) 
  }
}