## Commnunity

React + TypeScript를 사용해서 만드는 커뮤니티 사이트

<br/>

## 📅 개발 기간

`2024. 03. 15 ~ ing` <br/> <br/>

## 💻기술 스택

-   [x] **형상관리 및 db**

 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Json Server-000?style=for-the-badge&logo=JSON&logoColor=white">

-   [x] **Front-end**

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/><br/> <br/>

- [x] **db 및 **
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
## 📌구현 사항

```
- firebase auth를 사용한 회원가입 및 로그인/로그아웃 구현
- React-Query, Recoil 사용하여 서버상태 / 클라이언트 상태 분리
- json-server를 활용한 RESTful API 구현
- 범용 재사용 컴포넌트 구현
  - 게시판
    - 게시글 리스트/상세 조회, 생성, 수정, 삭제 구현
    - 댓글 상세 조회, 생성 구현
```

## 📜 프로젝트 설명

```
- firebase auth를 사용하여 회원가입/로그인 구현
- 회원가입과 로그인 성공/실패에 따른 적절한 메세지 제공
- Private Router 사용하여 인증된 사용자만 접근할 수 있는 경로 분리
- firebase api 키값 환경변수로 분리하여 보안 강화 
```
![](https://github.com/mingnana/community/assets/96216178/d6309e13-ee47-45da-bf5a-e47c1898f88d)
![](https://github.com/mingnana/community/assets/96216178/8e9269ce-0584-4647-af00-ab65cb895708)

```
- json-server 사용하여 가상 RESTful API 서버 구축
- axiox Instance 사용하여 요청 및 응답에 대한 인터셉터 구현
```
![](https://github.com/mingnana/community/assets/96216178/133ad235-eade-4a9d-addc-522e05842690)

```
- 자신이 작성한 게시글/댓일 경우에만 수정/삭제 버튼 활성화

```
![image](https://github.com/mingnana/community/assets/96216178/7ab2b503-023f-4013-acc5-aedeb1018410)


## 📜 이슈사항

```
📌 Warning: Received `true` for a non-boolean attribute `signup`.
    - react dom에서 해당 속성을 인지하지 못하기 때문에 나오는 이슈
    - prefix 사용 : styled-components를 사용할때 prefix를 필터링해서 기본이 되는 dom으로 props 전달을 방지함
📌 React Hooks must be called in a React function component or a custom React Hook function.
    - 컴포넌트 호출 위치에 따른 이슈
    - react hook은 함수 컴포넌트 내부가 아닌 외부에서 호출되면 오류가 남
    - 해당 함수를 호출하는곳에서 필요한 상태를 인자로 전달하도록 해야함
📌 atom을 사용할 경우 새로고침시 데이터 없어지는 이슈
    - atom의 경우, 일반적으로 메모리에 저장되어 있어 새로고침이나 페이지 이동과 같은 브라우저 변화는 메모리 상태를 초기화 시킴. 따라서 recoilPersist를 사용하여 상태를 유지해야함
    - selector의 경우 자체적으로 캐싱 및 메모이제이션을 수행하여 상태를 유지시킴
📌 useSetRecoilState 함수를 사용하면 내부 값이 변경될때마다 상태업데이트를 효율적으로 처리할 수 있음
```
