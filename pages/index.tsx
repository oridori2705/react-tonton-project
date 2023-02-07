import type { NextPage } from 'next'
import Head from 'next/head'
import Gnb from '../components/Gnb'
import Headers from '../components/Headers'

import ImageInput from '../components/MainPage_Components/ImageInput'
import Main_Rank_Card from '../components/MainPage_Components/Main_Ranking_Card'

import Link from 'next/link'
import Row from '../components/Row'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LOGIN_CHECK_SUCCESS } from '../Store/Auth'
import { Cookies } from 'react-cookie'
import axios from 'axios'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  
  const loginCheck = () => {
    const token = cookie.get('TOKEN');
    const url = 'http://210.125.212.192:8666/api/member/me';
    const url2 = 'api/member/me';
    axios.get(url, { headers: {
        Authorization: `Bearer ${token}`,
    }}
    ).then(response => {
        console.log(response.data);
        dispatch(LOGIN_CHECK_SUCCESS());
    })
    .catch(error => {
        //state.authenticated = false;
        console.log(error);   
    })
  }

  useEffect(() => {
    if(cookie.get('TOKEN')) {
      loginCheck();
    }
  })
  
  return (
    <>
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />

      <ImageInput />
      
      <Main_Rank_Card title="무신사 랭킹" id="MusinsaN"/>
      <Main_Rank_Card title="하이버 랭킹" id="HiverN" />
      <Main_Rank_Card title="룩핀" id="LookpinN" />
      {/* <Main_Rank_Card title="29CM 랭킹" id="29cmN"/> */}
    </>
  )
}

export default Home
