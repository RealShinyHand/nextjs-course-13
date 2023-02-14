import Link from "next/link";

export default function newsPage() {
  const list: string[] = ["news1", "news2", "news3", "news4"];

  return (
    <>
      <div>A 태그형</div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a href={`/news/${index}`}>
              {index} - {item}
            </a>
          </li>
        ))}
      </ul>

      <div>Link 태그 형</div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <Link href={`/news/${index}`} replace={true} prefetch={false}>
              {index} - {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
