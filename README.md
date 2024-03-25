## Commnunity

React + TypeScript를 사용해서 만드는 커뮤니티 사이트

<br/>

## 📅 개발 기간

`2024. 03. 15 ~ ing` <br/> <br/>

## 💻기술 스택

-   [x] **개발 환경 및 툴**

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

-   [x] **Front-end**

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"/> <br/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axioss&logoColor=white"/> <img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white"><br/> <br/>

## 📌구현된 기능

```
- 회원가입 및 로그인
- 게시판
  - 글/댓글 조회
  - 글/댓글 생성
  - 글/댓글 수정
```

## 📜 Commit Convension

```
- feat: 새로운 기능을 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 스타일 변경, 기능상 변경이 없는 경우
- refactor: 코드 리팩토링
- test: 테스트 코드, 리팩토링 코드를 추가했을 경우
- chore: 패키지 매니지, 빌드업무 수정
- move: 코드/파일의 이동이 있는 경우
```

## 📜 이슈사항

```
- Warning: Received `true` for a non-boolean attribute `signup`.
    - react dom에서 해당 속성을 인지하지 못하기 때문에 나오는 이슈
    - prefix 사용 : styled-components를 사용할때 prefix를 필터링해서 기본이 되는 dom으로 props 전달을 방지함
- React Hooks must be called in a React function component or a custom React Hook function.
    - 컴포넌트 호출 위치에 따른 이슈
    - react hook은 함수 컴포넌트 내부가 아닌 외부에서 호출되면 오류가 남
    - 📌 해당 함수를 호출하는곳에서 필요한 상태를 인자로 전달하도록 해야함
- atom을 사용할 경우 새로고침시 데이터 없어지는 이슈
    - atom의 경우, 일반적으로 메모리에 저장되어 있어 새로고침이나 페이지 이동과 같은 브라우저 변화는 메모리 상태를 초기화 시킴. 따라서 recoilPersist를 사용하여 상태를 유지해야함
    - selector의 경우 자체적으로 캐싱 및 메모이제이션을 수행하여 상태를 유지시킴
- useSetRecoilState 함수를 사용하면 내부 값이 변경될때마다 상태업데이트를 효율적으로 처리할 수 있음
```
