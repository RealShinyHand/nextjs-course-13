"use client";
import { MeeupDto } from "@/components/meetups/MeetupDto";
import { use, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const Dummy_MEETUPS: MeeupDto[] = [
  {
    id: "m1",
    title: "A First",
    image:
      "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
    address: "Some Address 5, 1234 Some city",
    description: "This is a first meet up",
  },
  {
    id: "m2",
    title: "B First",
    image:
      "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
    address: "Some Address 5, 1234 Some city",
    description: "This is a second meet up",
  },
];

// export default async function HomePage() {
//   const meetupList = await getData();
//   return <MeetupList meetups={meetupList}></MeetupList>;
// }

export default function HomePageCSR() {
  const [meeupList, setMeetUpList] = useState<MeeupDto[]>([]);
  useEffect(() => {
    const data = getDataClient();
    console.log(data);
    setMeetUpList(Dummy_MEETUPS);
  }, []);
  return <MeetupList meetups={Dummy_MEETUPS}></MeetupList>;
}

async function getData(): Promise<MeeupDto[]> {
  const meetup = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((res) => {
      let meetup: MeeupDto = {
        id: res.userId,
        title: res.id,
        image:
          "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
        address: res.completed + "동",
        description: res.title + " description",
      };
      return [meetup];
    });
  return meetup;
}

async function getDataClient(): Promise<MeeupDto[]> {
  const meetup = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let meetup: MeeupDto = {
        id: res.userId,
        title: res.id,
        image:
          "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
        address: res.completed + "동",
        description: res.title + " description",
      };
      console.log(meetup);
      return [meetup];
    });
  return meetup;
}
