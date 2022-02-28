# triple homework

* [파일 구조](#파일-구조)
* [커밋 컨벤션](#커밋-컨벤션)
* [사용한 기술과 선택한 이유](#사용한-기술과-선택한-이유)
* [실행 방법](#실행-방법)

![화면-기록-2022-02-28-20 01 48-min](https://user-images.githubusercontent.com/56878724/155978092-9bd62953-c0a7-43f4-9e10-f1cb677688e3.gif)


### 파일 구조

```
📦public
 ┣ 📂images
 ┃ ┣ 📜app-store@2x.png
 ┃ ┣ 📜play-store@2x.png
 ┃ ┗ 📜triple@2x.png
 ┗ 📜index.html
 📦src
 ┣ 📂components
 ┃ ┗ 📜FadeInContainer.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useCount.jsx
 ┣ 📂pages
 ┃ ┗ 📜TripleSection.jsx
 ┣ 📂styles
 ┃ ┣ 📜globalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┗ 📜easingAnimation.js
 ┣ 📂views
 ┃ ┣ 📜AwardInfoContent.jsx
 ┃ ┣ 📜StoreAward.jsx
 ┃ ┣ 📜TrophyContent.jsx
 ┃ ┗ 📜UsageCount.jsx
 ┣ 📜App.jsx
 ┗ 📜index.jsx
```

* <b>`public`</b> : html, image 등 정적 파일을 보관하는 디렉토리입니다.
* <b>`components`</b> : 재사용되는 공통 컴포넌트를 보관하는 디렉토리입니다.
* <b>`hooks`</b> : 커스텀 훅을 보관하는 디렉토리입니다.
* <b>`pages`</b> : 최상위 컴포넌트를 보관하는 디렉토리입니다. (container 역할)
* <b>`styles`</b> : 스타일링을 보관하는 디렉토리입니다.
* <b>`utils`</b> : 모듈화한 로직이 담기는 디렉토리입니다.
* <b>`views`</b> : pages 디렉토리의 컴포넌트에서 사용되는 하위 컴포넌트를 보관하는 디렉토리입니다. 

### 커밋 컨벤션

```
docs: 문서 작업
styles: 주석 추가, 간단한 코드 수정, 스타일링
refactor: 코드 리팩토링 
feat: 기능 구현 및 추가
conf: 프로젝트 환경 설정
```

### 사용한 기술과 선택한 이유

* 라이브러리 및 언어
    * React.js
    * Styled-component : Javascript 문법을 최대한 활용할 수 있고, 클래스 명을 따로 지정하지 않아도 되는 편리함이 좋아서 사용했습니다. 또, 해당 프로젝트에서 fade-in 애니메이션이 공통으로 사용되는데 재사용성이 좋은 Styled-component를 사용하는 것이 적합하다 판단했습니다.
    * Javascript
    

* 개발 환경
    * Webpack & Babel : 해당 프로젝트는 특성 상 가벼운 성격을 띄기 때문에 무거운 CRA대신 웹팩과 바벨로 React 환경을 설정했습니다.
    * ESLint & Prettier : 트리플에서 사용하는 규칙을 간접적으로 체험해보고자 [titicacadev/eslint-config-triple](https://github.com/titicacadev/eslint-config-triple)을 사용해서 린팅/포매팅을 셋업했습니다. 다만, prettier의 경우 적용이 정상적으로 되었지만 eslint의 경우 tsx 확장자에만 반영이 되는 현상으로 인해 jsx를 사용하는 현 프로젝트에는 사용하지 못했습니다. 따라서, [titicacadev/eslint-config-triple](https://github.com/titicacadev/eslint-config-triple) 레파지토리의 `rules/base`, `rules/react` 규칙을 참고하여 따로 설정 했습니다.

### 실행 방법

```
$ yarn install
$ yarn start
```
