import Header from "/components/header";
import Footer from "/components/footer";
import Card from "/components/card";

export default function MyCard() {
  return (
    <>
      <Header />
      <div className="spacer1"></div>
      <div className="content ">
        <Card />
      </div>
      <div className="spacer2"></div>
      <Footer />
      <style jsx>{`
        .spacer1 {
          height: 150px;
        }
        .spacer2 {
          height: 250px;
        }
        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}
