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
<p align="center">
  <img src="https://user-images.githubusercontent.com/57449358/218498683-9dc9a34c-ba0e-4b2c-a650-0cd839e440f8.PNG">
</p>
/app 디렉토리가 존재한다.
<br/>
보면 head,layout,page 등등이 존재한다.<br/>
이름 그대로의 기능을 하는 예약파일들이다. 
head 는 page 헤드 구성하고 layout은 page의 레이아웃 잡는 것이다.
<div>
<del>-실험 결과 qwe 디렉터리 생성 후 그 안에 head와 layout을 다시 만들지 않으면 상위 layout과 head가 그대로 응답으로 온다.(page는 없으면 404에러다.)
</del>
layout의 경우 중첩되는 것이였다. 
</div>
</div>

<br/>
<h2>2. Routing </h2>
<div>2.1.기본</div>
<div>디렉터리 생성 후 그안에 page.tsx 만들면 끝이다.</div>
<pre>
    /app
       ㄴnews
         page.tsx
    page.tsx
    layout.tsx
</pre>
<div>url : ip:port/ ---> /app 바로 하위 page.tsx layout.tsx <br/>
url : ip:port/news ---> news 하위의 page.tsx 반환 layout 재정의 안했으니 app하위 layout.tsx가 사용된다.
 </div>
<div><br/>2.2.Route Group</div>
https://beta.nextjs.org/docs/routing/defining-routes<br/>
해당 Docs에 따르면 url에 영향을 주지 않고 layout등을 그룹별로 변경하기 위한 방법이 알려져있다.
<pre>
    /app
       ㄴ(board)
         ㄴwrite
           page.tsx
         ㄴlist
           page.tsx
         layout.tsx
       ㄴnews
         page.tsx
    page.tsx
    layout.tsx
</pre>
<div>그 방식은 바로 "( )" 대괄호를 이용하는 것이다.<div>
<div>이 경우 layout을 그룹별로 url에 영향을 안 끼치고 다르게 할 수 있다고 한다. 
위 경우 write > page.tsx 의 url은
ip:port/write 로 접근할 수 있을 것이다. ...(restfull 하지 않은데? 예시니깐 그냥 넘어가자) </div>

<br/>
<div>2.3. 동적 페이지</div>
<div>강의에서는 동적 페이지(매개변수 포함), Docs에서는 Dynamic Segments라 하고 있다. 그냥 스프링 부트에서의 Path Variable이다. url로 부터 변수 추출하는 것일 뿐</div>

<p align="center">
  <img src="https://user-images.githubusercontent.com/57449358/218498599-65081a20-9e2d-43c9-95c3-18d8390299bd.PNG">
</p>

<div>폴더명을 [] 대괄호 안에 쓰고 코드를 다음과 같이하면 변수를 받아온다.</div>
<pre>
import React from "react";
export default function newsPageNumber({
  params,
}: {
  params: { newsNumber: string };
}) {
  const newsNum: string = params.newsNumber;
  return <>this is Specific News Page : {newsNum}</>;
}
</pre>
<div>그리고 catch-All Segment</div>
<div>임마는 [] 대괄호에 변수명 적고 앞에 ... 을 붙이는데 예시 : [...newsNumber]</div>
<div>이경우 ip:port/news/1/2/3/4/5/6/ 로 요청 시 params.newsNumber는 배열형태가 되고 
[1,2,3,4,5,6] 을 요소로 가진다. 근데 이걸 쓰냐?</div>
<div>실험해보니 우선 순위는 catch-All segment가 낮더라. ip:port/news/1 로 요청시 [...newsNumber]이 아니라 [newsNumber]페이지가 반환된다는 소리이다.</div>

<br/>
<h2>3. 페이지간 연결하기 </h2>

3.1.< a > 태그랑 크게 < Link > 랑 있는데 Link를 쓰면된다. </br>
Link 태그가 최적화 되어있다. </br>
Link 태그의 replace 속성을 true , prefetch를 false로 하니 개발자 브라우저 네트워크 상태가
유사하게 동작하는 것 같다.

단 외부 사이트의 경우 당연히 < a > 태그

참고자료) https://velog.io/@itkdgus489/NextJSLink-%EC%99%80-a-%EC%B0%A8%EC%9D%B4%EC%A0%90
3.2. 함수형 방식 useRouter() Hook
<code>
'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
const router = useRouter();

return (
<button type="button" onClick={() => router.push('/dashboard')}>
Dashboard
</button>
);
}
</code>

<pre>
뭐 별 차이 없는 것 같다. 근데 맨위에 'use Client' 는 무엇인가!!
</pre>
<br/>
<h2>4.Server,Client Component</h2>
<div>
일반적으로 app 디렉토리 안의 모든 Component는 React Server Component이다.
그래서 console.log를 찍으면 개발 IDE의 Terminal에 찍히는 것이다.
</div>
<div>그런데 Server Component에서는 React의 useState,userEffect 등을 쓰지 못한다.</div>
<div>상황에 따라 Server 혹은 Client Component를 써야하는 것이 다른데, 이는 https://beta.nextjs.org/docs/rendering/server-and-client-components에서 표로 잘 설명되어있다.</div>
<div>
해당 프로젝트의 경우 components > ** >NewMeetupForm에서 useRef를 사용하는 것으로 인해 'use client'를 써야했다.<br/>
근데 app > new-meetup > page.tsx 의 함수를 내려받아 쓰니깐 
</br>
<code>
Error: Event handlers cannot be passed to Client Component props.
<... onAddMeetup={function}></code>
과 같은 에러가 나서 page.tsx에 'use client'를 쓰니 해결되었다.
<div>
그러니깐, SSR 하위에 SPA를 만들고 싶다면 page에 use Client를 사용하면 된다.
</div>
몇몇 가지 제한을 보자면 다음과 같다. 
<ul>
  <li>클라이언트 컴포넌트 하위에 서버 컴포넌트를 포함할 수 없다. (server 측 코드 노출)</li>
  <li>children으로 넘겨주는 것은 가능하다고 한다. 하위 구성요소는 이미 렌더링 된다고 함</li>
  더 많은데, 하다보면서 경험해야겠다.
</ul>
</div>
