import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  forwardRef,
} from "react";
//------------------------------------------------------------------------------- Module
//------------------------------------------------------------------------------- Module
import Header from "./header";
import Footer from "./footer";

const Home = ({ children }) => {
  // const router = useRouter();
  // const { common, auth } = props.store;

  // useEffect(() => {
  //     if (auth.data.loginResult) {
  //         auth.checkLoginStatus();
  //     }
  // }, [auth.data.loginResult]);

  return (
    <>
      <Header />
      <div className="ui inner default">{children}</div>
      <Footer />
      {/* <Login.default store={props.store}></Login.default>
            <Login.selfAuth store={props.store}></Login.selfAuth>
            <Login.join store={props.store}></Login.join>
            <Login.service store={props.store}></Login.service>
            <Alarm.default store={props.store}></Alarm.default>
            <SideMenu.default store={props.store}></SideMenu.default>
            <SideMenu.notification store={props.store}></SideMenu.notification>
            <SideMenu.invite store={props.store}></SideMenu.invite>
            <SideMenu.secession store={props.store}></SideMenu.secession> */}
    </>
  );
};

export default Home;
