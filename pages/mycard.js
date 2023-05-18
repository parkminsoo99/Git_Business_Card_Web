import Header from '/components/header'
import Footer from '/components/footer'
import React, {useState} from 'react'
import Link from 'next/link'
import Modal from '/components/Modal'

export default function MyCard() {
    const [showModal, setShowModal] = useState(false);
    return (
        <> < Header /> <section className="text-gray-600 body-font">
            <div
                className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <img
                    classNameName="rounded-lg shadow-lg "
                    src="/Business_card_image.png"
                    width='600'
                    height='600'
                    alt="user-image"/>
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1> */}
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label for="hero-field" className="leading-7 text-sm text-gray-600">Markdown code:</label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                placeholder='[![MY IT 명함](https://i.postimg.cc/gjtbv9mn/2023-04-13-12-52-24.png)](http://my-it.com/mycard?u_id=qualificationalitaed)'
                                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <Link href="URL_temp" rel="stylesheet">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12">공유</button>
                        </Link>
                        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
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