import Header from '/components/header'
import Footer from '/components/footer'

import { useRouter } from 'next/router';

import { signIn, signOut, useSession } from "next-auth/react";

export default function LogIn() {
  
  const {data: session, status} = useSession();

  if (status === 'authenticated') {
    console.log(session.user.name);

    const router = useRouter();
    router.push('http://localhost:3000/'); //로그인 후 main page 자동 이동
    
  }

    return (
        <>
        <Header/>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">My IT</h1>
            <p className="leading-relaxed mt-4">My IT에서 자신만의 특별한 명함을 만들고 공유해 보세요.</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Github로 연결하기</h2>
            <center>
            <img 
            src="/github_logo.png"
            alt="github_image" 
            width={200} height={200}
            />
            </center> 
            {/*깃허브 로그인 버튼*/ }
            {/* <a href="/api/auth/signin">Sign in</a> */}
            <button onClick={() => signIn("github")} className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg" >Sign in with Github Login</button>
            </div>
        </div>
    </section>
    <Footer/>
    </>
    )
}