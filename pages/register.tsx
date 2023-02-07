import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

const register = () => {
  const [id, setId] = useState<string>(""); // 아이디
  const [idCheak, setIdCheak] = useState<boolean>(false); // 아이디 유효성 검사 boolean

  const [password, setPassword] = useState<string>(""); // 비밀번호
  const [passwordConf, setPasswordConf] = useState<string>(""); // 비밀번호 확인

  const [passwordCheak, setPasswordCheak] = useState<boolean>(false); // 비밀번호 유효성 검사 boolean
  const [passwordDoubleCheck, setPasswordDoubleCheck] =
    useState<boolean>(false); // 비밀번호 확인 boolean

  const [nickname, setNickname] = useState<string>(""); // 닉네임
  const [nicknameCheck, setNicknameCheck] = useState<boolean>(false); // 닉네임 유효성 검사 boolean

  const [name, setName] = useState<string>("");
  // 확인과 에러 메시지
  const [idMsg, setIdMsg] = useState<string>("");
  const [passwordChkMsg, setPasswordChkMsg] = useState<string>("");
  const [passwordConfMsg, setPasswordConfMsg] = useState<string>("");

  const router = useRouter();

  const re_idCheck = (id: string) => {
    const re = /^[a-z]+[a-z0-9]{4,19}$/g;
    if (re.test(id)) {
      //console.log("멋진 아이디네요!");
      setIdMsg("멋진 아이디네요!");
      setIdCheak(true);
    } else {
      //console.log("아이디는 5~20자의 영문 소문자와 숫자만 사용 가능합니다");
      setIdMsg("아이디는 5~20자의 영문 소문자와 숫자만 사용 가능합니다.");
      setIdCheak(false);
    }
  };

  const re_passwordCheck = (password: string) => {
    const re =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{5,15}$/;
    if (re.test(password)) {
      setPasswordChkMsg("비밀번호의 조건에 맞습니다!");
      setPasswordCheak(true);
    } else {
      setPasswordChkMsg("5~15자의 영문, 숫자, 특수문자를 한 번씩 사용하세요.");
      setPasswordCheak(false);
    }
  };

  const passwordDoubleCheck_ = (password: string, passwordChk: string) => {
    if (password === passwordChk) {
      //console.log("비밀번호와 비밀번호 확인이 다릅니다!");
      setPasswordConfMsg("비밀번호와 비밀번호 확인이 동일합니다.");
      setPasswordDoubleCheck(true);
      return;
    } else {
      //console.log("비밀번호와 비밀번호의 확인이 동일합니다!");
      setPasswordConfMsg("비밀번호와 비밀번호 확인이 다릅니다.");
      setPasswordDoubleCheck(false);
    }
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    re_idCheck(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    re_passwordCheck(e.target.value);
  };
  const onChangePasswordConf = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConf(e.target.value);
    passwordDoubleCheck_(password, e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Register();
  };

  const Register = () => {
    const url = 'http://3.39.118.175:8080/auth/signup';
    const local_utl = "http://localhost:8080/auth/signup";
    const server_utl = 'http://210.125.212.192:8666/auth/signup'

    axios.post(server_utl, {
        loginId: id,
        password: password,
        name: name,
        nickname: nickname,
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.message);
        router.push('/login')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>TONTON - 회원가입</title>
      </Head>

      <section className="bg-gray-50 dark:bg-gray-900 font-Pretendard">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl dark:text-white text-center pb-5"
          >
            코디위키 - TONTON
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    아이디
                  </label>
                  <div className="flex">
                    <input
                      onChange={onChangeId}
                      type="text"
                      name="id"
                      id="id"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="아이디"
                      required
                    />
                  </div>
                  {id.length > 0 && (
                    <div
                      className={`text-xs my-2 ${
                        idCheak ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {idMsg}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                  <input
                    onChange={onChangePassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호"
                    className={`${
                      passwordCheak ? "border-green-500" : ""
                    } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    required
                  />
                  {password.length > 0 && (
                    <div
                      className={`text-xs my-2 ${
                        passwordCheak ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {passwordChkMsg}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호 확인
                  </label>
                  <input
                    onChange={onChangePasswordConf}
                    type="password"
                    name="password"
                    id="Double_password"
                    placeholder="비밀번호 확인"
                    className={`${
                      passwordDoubleCheck ? "border-green-500" : ""
                    } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    required
                  />
                  {passwordConf.length > 0 && (
                    <div
                      className={`text-xs my-2 ${
                        passwordDoubleCheck ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {passwordConfMsg}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    이름
                  </label>
                  <div className="flex">
                    <input
                      onChange={onChangeName}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="이름"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    닉네임
                  </label>
                  <div className="flex">
                    <input
                      onChange={onChangeNickname}
                      type="text"
                      name="nickname"
                      id="nickname"
                      placeholder="닉네임"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default register;
