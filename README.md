<div align="center">
  <a href="https://netflix-gw.netlify.app">
    <img height="70" src="./previews/netflix_logo.png" />
    <br /><br />
    <a display="block" href="https://netflix-gw.netlify.app">https://netflix-gw.netlify.app</a>
    <br /><br />
    <img height="700" src="./previews/1.gif" />
  </a>
</div>

## Table of contents

- 🔥 [Built with](#built-with)
- 🌈 [Project](#project)
- 📑 [Pages](#pages)
- ⚙ [Features](#features)
- 📝 [License](#license)

## Built with

### Front-end

- `React`
- `Javascript`
- `Styled Components`
- `Axios`

### Deploy

- `Netlify`

## Project

> 1. 영화

- 영화 페이지에서 인기 영화, 현재 상영중, 상영 예정, 평점높은 영화를 확인할 수 있습니다.
- 영화 포스터와 제목, 개봉일, 평점, 설명을 확인할 수 있습니다.
- 무한 스크롤을 통해 페이지 하단에 도달했을 때, 추가적으로 영화들을 가져옵니다.
  <br /><br />
  <img height="700" src="./previews/2.gif" />

> 2. 영화 상세정보

- 영화 상세정보 페이지에서 영화 포스터와 제목, 키워드, 트레일러, 배우, 스틸컷을 확인할 수 있습니다.
- `Axios`를 이용해 `The Movie DB`로부터 영화 상세정보를 가져옵니다.
- 추가로 추천 영화 및 TV 프로그램을 가져옵니다.
  <br /><br />
  <img height="700" src="./previews/3.gif" />

> 3. TV

- TV 페이지에서 인기 프로그램, 현재 방영중, 방영 예정, 평점높은 프로그램을 확인할 수 있습니다.
- TV 포스터와 제목, 개봉일, 평점, 설명을 확인할 수 있습니다.
- 무한 스크롤을 구현하여 페이지 하단에 도달했을 때, 추가적으로 TV 프로그램들을 가져옵니다.
  <br /><br />
  <img height="700" src="./previews/4.gif" />

> 4. TV 상세정보

- TV 상세정보 페이지에서 TV 포스터와 제목, 키워드, 트레일러, 배우, 스틸컷을 확인할 수 있습니다.
- `Axios`를 이용해 `The Movie DB`로부터 TV 상세정보를 가져옵니다.
- 추가로 추천 영화 및 TV 프로그램을 가져옵니다.
  <br /><br />
  <img height="700" src="./previews/5.gif" />

> 5. 영화, TV 프로그램 검색

- 검색 페이지에서 영화 또는 TV 프로그램들을 검색할 수 있습니다.
- 영화 또는 TV 프로그램 제목을 입력하여 검색 시, 해당 제목이 포함된 전체 영화와 TV 프로그램을 찾습니다.
  <br /><br />
  <img height="700" src="./previews/6.gif" />

> 6. 기타

- 클래스형 컴포넌트와 `Container-Presenter`패턴을 사용하여, 데이터 처리와 데이터 출력을 분리하였습니다.
- Container에서는 API 요청, 에러 처리, state 변경 등을 처리하고, Presenter에서는 Container로부터 받아온 데이터를 출력합니다.

## Pages

> Root

- 홈
- 검색

> Movie

- 인기 영화
- 현재 상영중
- 상영 예정
- 평점높은 영화
- 영화 상세정보

> TV

- 인기 프로그램
- 현재 방영중
- 방영 예정
- 평점높은 프로그램
- TV 상세정보

## Features

### 🎬 Movie

- [x] 인기 영화 보기
- [x] 현재 상영중인 영화 보기
- [x] 상영 예정인 영화 보기
- [x] 평점높은 영화 보기
- [x] 영화 상세정보 보기

### 📺 TV

- [x] 인기 프로그램 보기
- [x] 현재 방영중인 프로그램 보기
- [x] 방영 예정인 프로그램 보기
- [x] 평점높은 프로그램 보기
- [x] TV 상세정보 보기

## License

<a>MIT</a>
