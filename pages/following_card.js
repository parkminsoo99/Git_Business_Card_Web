import Header from '/components/header'
import Footer from '/components/footer'

export default function Following_Card() {
    return (
        <> < Header /> <section className="text-gray-600 body-font">
            <div
                className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <img
                    classNameName="rounded-lg shadow-lg "
                    src="/Business_card_image.png"
                    width='600'
                    height='600'
                    alt="user-image" />
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"></div>
                <img
                    classNameName="rounded-lg shadow-lg "
                    src="/Business_card_image.png"
                    width='600'
                    height='600'
                    alt="user-image" />
                 <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"></div>
                 <img
                    classNameName="rounded-lg shadow-lg "
                    src="/Business_card_image.png"
                    width='600'
                    height='600'
                    alt="user-image" />
            </div>
        </section>
        <Footer/>
    </>
    )
}