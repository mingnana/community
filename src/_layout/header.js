import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  forwardRef,
} from "react";

import Link from "next/link";

//------------------------------------------------------------------------------- UI
import Gnb from "../components/layout/gnb";
//------------------------------------------------------------------------------- UI

// /////////////////////////////////////////////////////////////////////////////////////// Gnb

const Home = () => {
  // const { common, auth } = props.store;
  const [drop, setDrop] = useState(false);

  const commonOption = {
    drop: drop,
    setDrop: setDrop,
  };
  return (
    <>
      <Gnb />

      {/* <Sticky className="gnb-sticky">
                    <div className="ui gnb default">
                        <GnbDefault {...props} />
                        <div className="category">
                            <Category {...props} {...commonOption} />
                        </div>
                    </div>
                </Sticky> */}
    </>
  );
};

// /////////////////////////////////////////////////////////////////////////////////////// NoneGnb
export default Home;

/* ///////////////////////////////////////////////////////////// Gnb default */
// const GnbDefault = observer((props) => {
//   const store = props.store;
//   const { common, auth } = store;

//   const MENU_DATA = [
//     { title: "DROP", page: "/drop" },
//     { title: "EDITORIAL", page: "/editorial" },
//     { title: "ABOUT", page: "/info/about" },
//   ];

//   const SNS_DATA = [
//     { src: "/src/img/icon_instagram_01.png", page: "/" },
//     { src: "/src/img/icon_twitter_01.png", page: "/" },
//   ];
//   var arr = [];
//   for (let i = 0; i < 100; i++) {
//     arr.push(props);
//   }
//   const options = {
//     play: true,
//     // loop: true,
//   };

//   return (
//     <>
//       {auth.data.loginResult.result == "ok" && (
//         <div className="hello">
//           <Marquee gradient={false} pauseOnHover={true}>
//             {arr.map((item, key) => {
//               return (
//                 <div key={key}>
//                   Hello, {auth.data.loginResult.nickname}
//                   <img src="/src/img/icon_hello_01.png" />
//                 </div>
//               );
//             })}
//           </Marquee>
//         </div>
//       )}
//       <nav>
//         <div className="logo">
//           <Link href="/">
//             <a>
//               <Lotties.default
//                 id={"ConfettiLogoH5"}
//                 loop={true}
//                 play={true}
//                 className={"ConfettiLogoH5"}
//                 {...options}
//               />
//             </a>
//           </Link>
//         </div>
//         <div className="menus">
//           <ul>
//             {MENU_DATA.map((menu, idx) => {
//               return (
//                 <li
//                   key={idx}
//                   onClick={() => {
//                     Router.push(menu.page);
//                   }}
//                 >
//                   <Marquee direction={"right"} gradient={false} speed={100}>
//                     {arr.map((item, key) => {
//                       return <a key={key}>{menu.title}</a>;
//                     })}
//                   </Marquee>
//                   <a>{menu.title}</a>
//                 </li>
//               );
//             })}
//           </ul>
//           <div>
//             {SNS_DATA.map((sns) => {
//               return (
//                 <a
//                   key={sns.src}
//                   onClick={() => {
//                     Router.push(sns.page);
//                   }}
//                 >
//                   <img src={sns.src} alt="" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//         {/* {auth.data.loginResult.result == "ok" ? (
//                     <ul className="my">
//                         <li className="on">
//                             <a
//                                 onClick={() => {
//                                     common.dataChange("uiNotification", true);
//                                 }}
//                             >
//                                 <img src="/src/img/icon_my_01.png" alt="my" />
//                             </a>
//                         </li>
//                         <li>
//                             <Link href="/">
//                                 <a>
//                                     <img
//                                         src="/src/img/icon_basket_01.png"
//                                         alt="basket"
//                                     />
//                                 </a>
//                             </Link>
//                         </li>
//                     </ul>
//                 ) : (
//                     <ul className="login">
//                         <li
//                             onClick={() => {
//                                 // Router.push("/member/login");
//                                 common.dataChange("uiLogin", true);
//                             }}
//                         >
//                             <Marquee gradient={false} speed={100}>
//                                 {arr.map((item, key) => {
//                                     return <a key={key}>LOGIN</a>;
//                                 })}
//                             </Marquee>
//                             <a>LOGIN</a>
//                         </li>
//                     </ul>
//                 )} */}
//       </nav>
//     </>
//   );
// });
/* ///////////////////////////////////////////////////////////// Gnb default */
/* ///////////////////////////////////////////////////////////// Category */
// const Category = observer((props) => {
//   const { drop, setDrop } = props;
//   return (
//     <>
//       <ul
//         onClick={() => {
//           setDrop(!drop);
//         }}
//       >
//         <li>
//           <a>시리즈 #1</a>
//         </li>
//         <li className={drop ? "arrow up" : "arrow down"}></li>
//         {drop && (
//           <ul
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             <li>
//               <a>시리즈 #2</a>
//             </li>
//             <li>
//               <a>시리즈 #3</a>
//             </li>
//             <li>
//               <a>시리즈 #4</a>
//             </li>
//             <li>
//               <a>시리즈 #5</a>
//             </li>
//           </ul>
//         )}
//       </ul>
//       <div>전체</div>
//     </>
//   );
// });
/* ///////////////////////////////////////////////////////////// Category */
