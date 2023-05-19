import Header from "/components/header";
import Footer from "/components/footer";
import Card from "@/components/card";

export default function Following_Card() {
  return (
    <>
      <Header />
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
      <style jsx>{`
        @import "tailwindcss/base";
        @import "tailwindcss/components";
        @import "tailwindcss/utilities";

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          flex-grow: 1;
        }

        .content :global(.card) {
          @apply w-1/3; /* 카드의 너비와 여백 설정 */
          margin: 40px;
        }

        @media (max-width: 768px) {
          /* 너비가 768px 이하일 때 */
          .content :global(.card) {
            @apply w-1/2; /* 한 줄에 2개의 카드가 나오도록 설정 */
          }
        }

        @media (max-width: 480px) {
          /* 너비가 480px 이하일 때 */
          .content :global(.card) {
            @apply w-full; /* 한 줄에 1개의 카드가 나오도록 설정 */
          }
        }
      `}</style>
    </>
  );
}
