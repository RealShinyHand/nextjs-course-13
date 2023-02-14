export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>뉴스페이지</div>
      <div>{children}</div>
      <div>뉴스페이지 끝</div>
    </>
  );
}
