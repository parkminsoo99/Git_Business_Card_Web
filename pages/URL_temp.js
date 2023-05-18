import Feature from '/components/feature'
import Header from '/components/header'
import Footer from '/components/footer'
export default function URL() {
    return (
        <> < Header /> <section className="text-gray-600 body-font">
            <div
                className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    {/*  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-90
 * 0">Knausgaard typewriter readymade marfa</h1> 
 */
                    }
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <label for="hero-field" className="leading-7 text-sm text-gray-600">Image URL:</label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                placeholder='https://postimg.cc/rR4HkPdk'
                                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-12">복사</button>
                       
                    </div>
                    <div className="flex"></div>
                </div>
            </div>
        </section>

    </>
    )
}