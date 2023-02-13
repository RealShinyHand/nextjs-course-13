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
<div>-실험 결과 qwe 디렉터리 생성 후 그 안에 head와 layout을 다시 만들지 않으면 상위 layout과 head가 그대로 응답으로 온다.(page는 없으면 404에러다.)</div>
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
