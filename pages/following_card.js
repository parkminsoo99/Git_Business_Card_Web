import Header from "/components/header";
import Footer from "/components/footer";
import Image from "next/image";

export default function Following_Card() {
  return (
    <>
      {" "}
      <Header />{" "}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Image
            classNameName="rounded-lg shadow-lg "
            src="/card_front.png"
            width="600"
            height="600"
            alt="user-image"
          ></Image>
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"></div>
          <Image
            classNameName="rounded-lg shadow-lg "
            src="/card_2.png"
            width="600"
            height="600"
            alt="user-image"
          ></Image>
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"></div>
          <Image
            classNameName="rounded-lg shadow-lg "
            src="/card_3.png"
            width="600"
            height="600"
            alt="user-image"
          ></Image>
        </div>
      </section>
      <Footer />
    </>
  );
}
