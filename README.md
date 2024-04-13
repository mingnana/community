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

## 📌구현 사항

```
- firebase auth를 사용한 회원가입 및 로그인/로그아웃 구현
- React-Query, Recoil 사용하여 서버상태 / 클라이언트 상태 분리
- json-server를 활용하여 fake-Server 구축 및 모의 db 생성, RESTful API 구현
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
- 페이지 및 데이터 로딩시 보여질 로딩 컴포넌트 antd component 사용하여 구현
```

![](https://github.com/mingnana/community/assets/96216178/766e1080-b0c6-407d-bdf6-5893c565bd9e)

```
- 글 수정/삭제, 댓글 추가 가능
- firebase onAuthStateChanged 함수 사용하여 사용자 정보를 동적으로 가져와 활용
- 자신이 작성한 게시글/댓글일 경우에만 수정/삭제 버튼 활성화
- 글 수정 및 댓글 추가시 react-query의 invalidateQueries 메서드 사용하여 자동으로 retch 되도록 구현
```

![](https://github.com/mingnana/community/assets/96216178/7ab2b503-023f-4013-acc5-aedeb1018410)

## 📜 이슈 및 리뷰 사항

```
📌 style - antd 라이브러리 활용
    - 직접 UI를 디자인하기보다는, 기존에 잘 작성되어 있는 Antd component 사용하여 style props을 재정의해 필요에 따라 custom 하여 구현
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
📌 useEate를 props로 전달할 때 타입 이슈
    - String' 형식에 호출 시그니처가 없습니다.
    - 새로운 상태값을 전달하여 상태를 업데이트해야하기 때문에 < setCommentValue: React.Dispatch<React.SetStateAction<string>>; > 로 사용해야함
    - 다양한 데이터 유형에 대해 작동할 수 있도록 유연성을 제공하기 위해 React.SetStateAction<T> 제네릭 사용
📌 함수 인자 구조 분해 문법 이슈
    - 인자값을 받아올 경우 타입이 부합하지 않아 에러가 종종 남. interface 객체 내 하나의 속성을 가져오려면 반드시 구조분해 문법을 사용하여 해당 속성 추출해야함
📌 코드 포맷팅
    - useSetRecoilState 함수를 사용하여 내부 값이 변경될때마다 상태업데이트를 효율적으로 처리하고, 의도를 명확하게 할수있음
📌 '(commentId: string | undefined, inputValue: string) => void' 형식은 '(commentId?: string | undefined, inputValue?: string | undefined) => void' 형식에 할당할 수 없습니다.
    - 함수의 타입이 인터페이스에서 정의된 타입과 일치하지 않는다는 것을 나타냄
    - 해당 함수의 매개변수 타입과 인터페이스에서 정의한 타입을 일치시켜야 함
    - 인터페이스에서는 (commentId?: string, inputValue?: string) => void
로 지정했으니 함수의 매개변수 타입도 동일하게 일치시켜야함

```
