## Netflix Clone

#### 컨테이너 프리젠터 패턴이란?
- 컨테이너(Container) : data와 state(상태값)를 가지고, api를 호출하고, 기타 모든 로직들을 처리한다. (데이터를 받아와서 처리하는 것을 담당함)
- 프리젠터(Presenter) : 컨테이너가 처리한 데이터들을 화면에 뿌려주는 역할을 하는 함수형 컴포넌트이다.
- 프리젠터는 state(상태값), api, 클래스 등을 다루지 않는다. (데이터를 화면에 뿌려주고 스타일을 담당함)

- 작은 프로젝트가 아닌 조금 규모가 있는 프로젝트를 할 때는 지금처럼 Home폴더를 따로 만들고 Home폴더안에 index.js와 HomeContainer.js, HomePresenter.js 3개의 파일을 생성해서 관리하는 것이 좋다.
- 리액트에서 경로를 지정할 때 폴더의 경로까지만 지정하게 되면 기본적으로 index.js를 읽기 때문에 index.js가 필요하다.
- 이와 같은 방법을 컨테이너 프리젠터 패턴이라고 부른다.

#### createPortal

- createPortal(child, container)
- createPortal함수는 div#root밖에 있는 HTML태그들에 랜더가 필요할 때 사용할 수 있다.
- createPortal함수의 첫 번째 인자로는 전달하고자 하는 children을, 두 번째 인자로는 넣고자 하는 태그를 지정해준다.
- 첫 번째 인자(children)는 엘리먼트, 문자열, 혹은 fragment와 같은 것들이 올 수 있다.
- 두 번째 인자(container)는 HTML Element등이 올 수 있다.


#### App.js

```javascript
import { createPortal } from "react-dom";


const Portal = ({ children }) => {
  const header = document.querySelector("header");
  return createPortal(children, header);
};

function App() {
  return (
    <>
      <h1>App</h1>
      <Portal>
        <h1>HTML</h1>
        <h2>CSS</h2>
        <h3>Javascript</h3>
      </Portal>
    </>
  );
}

export default App;
```

#### index.html

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <header></header>
    <div id="root"></div>
  </body>
</html>
````
