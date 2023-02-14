export default function Home({ params }: { params: { meetUpId: string } }) {
  const meetUpId = params.meetUpId;

  console.log(meetUpId);
  return <h1>Hello, Next.js!</h1>;
}
