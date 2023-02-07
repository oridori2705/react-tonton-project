import Link from 'next/link'
import React,{useState} from 'react'

const Gnb = () => {

    
    return (
        <div className="font-Pretendard">
           <nav className="bg-slate-200 md:mx-auto flex flex-wrap items-center justify-center h-14">
                <Link href="/" legacyBehavior><a className="mr-5 hover:text-blue-600 active:">홈</a></Link>
                <Link href="/searchPages/searchPage" legacyBehavior><a className="mr-5 hover:text-blue-600">상품</a></Link>
                <Link href="/CommunityPages/Community" legacyBehavior><a className="mr-5 hover:text-blue-600">게시판</a></Link>     
            </nav>
        </div>
  )
}

export default Gnb