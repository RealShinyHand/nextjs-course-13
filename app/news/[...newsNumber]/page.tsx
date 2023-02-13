import React from "react";
export default function newsPageNumber({
  params,
}: {
  params: { newsNumber: string[] };
}) {
  const newsNum: string[] = params.newsNumber;

  console.log(newsNum);
  return (
    <>
      <h1>this is Specific News Page :</h1>
      {newsNum.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </>
  );
}
//typescript 분해할당 문법 요상하네....
