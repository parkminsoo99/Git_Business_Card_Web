import Card_Animation from './animation/card_animation'
import Share_Link_Animation from './animation/share_link_animation'
import Following_Animation from './animation/following_animation'

import Link from 'next/link'

import { useSession } from "next-auth/react";

export default function Feature() {
    const {data: session, status} = useSession();

    if(status == 'authenticated'){
        console.log(session?.user?.name);
        return(
            <section className = "text-gray-600 body-font" > <div className="container px-5 py-24 mx-auto">
            <div className="text-center sm-20 h-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"></h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">My IT에서 자신만의 특별한 명함을 만들고 공유해 보세요.</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <Card_Animation />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">My Github Card</h2>
                        <p className="leading-relaxed text-base">Github를 통해 만드는 나만의 명함</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <Share_Link_Animation />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Easy Shareing</h2>
                        <p className="leading-relaxed text-base">QR, 링크를 활용한 편리한 명함공유</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <Following_Animation />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Connection</h2>
                        <p className="leading-relaxed text-base">공유 명함을 사용한 개발자 네트워크 형성</p>
                    </div>
                </div>
            </div>
            <Link href={`/mycard/${session.user.name}`}>
                <button className="flex text-center items-center mx-auto mt-28 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">명함 보러가기</button>
            </Link>
            </div> 
        </section>

        )
    }
    return (
        <section className = "text-gray-600 body-font" > <div className="container px-5 py-24 mx-auto">
            <div className="text-center sm-20 h-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"></h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">My IT에서 자신만의 특별한 명함을 만들고 공유해 보세요.</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <Card_Animation />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">My Github Card</h2>
                        <p className="leading-relaxed text-base">Github를 통해 만드는 나만의 명함</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <Share_Link_Animation />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Easy Shareing</h2>
                        <p className="leading-relaxed text-base">QR, 링크를 활용한 편리한 명함공유</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <Following_Animation />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Connection</h2>
                        <p className="leading-relaxed text-base">공유 명함을 사용한 개발자 네트워크 형성</p>
                    </div>
                </div>
            </div>
            <Link href="/auth/login">
                <button className="flex text-center items-center mx-auto mt-28 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">명함 보러가기</button>
            </Link>
            </div> 
        </section>
    )
}




