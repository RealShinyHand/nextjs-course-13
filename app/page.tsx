import MeetupList from "../components/meetups/MeetupList";
const Dummy_MEETUPS = [
  {
    id: "m1",
    title: "A First",
    image:
      "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
    address: "Some Address 5, 1234 Some city",
    decription: "This is a first meet up",
  },
  {
    id: "m2",
    title: "B First",
    image:
      "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
    address: "Some Address 5, 1234 Some city",
    decription: "This is a second meet up",
  },
];
export default function HomePage() {
  return <MeetupList meetups={Dummy_MEETUPS}></MeetupList>;
}
