import React from "react";
export default function newsPageNumber({
  params,
}: {
  params: { newsNumber: string };
}) {
  const newsNum: string = params.newsNumber;

  console.log(newsNum);
  return (
    <>
      <h1>this is Specific News Page : {newsNum}</h1>
    </>
  );
}
//typescript 분해할당 문법 요상하네....
