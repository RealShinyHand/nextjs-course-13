<h1>Next js 13 연습</h1>
<h3>개요</h3>
<p>Udemy 강의에서 Next Js 에서 다루고 있다. 하지만 버전이 12이다. 따라서 해당 강의에서 수행하는 작업을 Next Js 13 버전으로 수행하고자 한다.
</p>
<h3>수행 과정 참고 자료</h3>
<ul>
<li>https://beta.nextjs.org/docs/installation > 13버전 docs</li>
<li>https://www.udemy.com/course/best-react/ > 리액트 완벽가이드 중 섹션 23을 수행할 것이다.</li>
</ul>

<h2>1. 설치 및 셋팅</h2>
<code>npx create-next-app@latest --experimental-app</code>
<br/>
해당 명령어를 통해 손쉽게 next js 13 버전 프로젝트를 생성할 수 있다.
<div>
기존 12버전과는 다르게 TypeScript가 default이다.(물론 설치중에 선택 안하면 되긴함)<br/>
<i><<0001 이미지  추가 할 것>><br/></i>
/app 디렉토리가 존재한다.
<br/>
보면 head,layout,page 등등이 존재한다.<br/>
이름 그대로의 기능을 하는 예약파일들이다. 
head 는 page 헤드 구성하고 layout은 page의 레이아웃 잡는 것이다.
<div>-실험 결과 qwe 디렉터리 생성 후 그 안에 head와 layout을 다시 만들지 않으면 상위 layout과 head가 그대로 응답으로 온다.(page는 없으면 404에러다.)</div>
</div>
