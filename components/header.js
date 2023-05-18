import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const {data: session, status} = useSession();

  if (status === 'authenticated') { //로그인 된 경우 Login 버튼 없애기
    return (
        <header className="text-gray-600 body-font">
            <div
                className="container mx-auto flex flex-wrap p-5 h-20 flex-col md:flex-row items-center">
                <a
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/*우리만의 로고 추가*/}
                    <span className="ml-3 text-xl">My IT</span>
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400   flex flex-wrap items-center text-base justify-center">
                    <Link href="/">
                        <p className="mr-5 hover:text-gray-900">Home</p>
                    </Link>
                    <Link href="/following_card">
                        <p className="mr-5 hover:text-gray-900">Following Card</p>
                    </Link>
                    <Link href="/mycard">
                        <p className="mr-5 hover:text-gray-900">My Card</p>
                    </Link>
                </nav>
                <button onClick={() => signOut()}><p className="mr-5 hover:text-gray-900">Hello {session.accessToken}!   Logout</p></button>
                <button>
                    <Image src="/github_logo.png" alt="github_image" width={30} height={30}></Image>
                </button>
            </div>
        </header>
    )
  }
    return (
        <header className="text-gray-600 body-font">
            <div
                className="container mx-auto flex flex-wrap p-5 h-20 flex-col md:flex-row items-center">
                <a
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/*우리만의 로고 추가*/}
                    <span className="ml-3 text-xl">My IT</span>
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400   flex flex-wrap items-center text-base justify-center">
                    <Link href="/">
                        <p className="mr-5 hover:text-gray-900">Home</p>
                    </Link>
                    <Link href="/following_card">
                        <p className="mr-5 hover:text-gray-900">Following Card</p>
                    </Link>
                    <Link href="/mycard">
                        <p className="mr-5 hover:text-gray-900">My Card</p>
                    </Link>
                </nav>
                
                <Link href="/auth/login">
                    <p className="mr-5 hover:text-gray-900">Login</p>
                </Link>
                <button>
                    <Image src="/github_logo.png" alt="github_image" width={30} height={30}></Image>
                </button>
            </div>
        </header>
    )
}