import { MeetupDto } from "@/components/meetups/MeetupDto";
import MeetupList from "../components/meetups/MeetupList";

export default async function HomePage() {
  const meetupList = await getData();
  return <MeetupList meetups={meetupList}></MeetupList>;
}

// export default function HomePageCSR() {
//   const [meeupList, setMeetUpList] = useState<MeeupDto[]>([]);
//   useEffect(() => {
//     getDataClient().then((data) => setMeetUpList(data));
//   }, []);
//   return <MeetupList meetups={meeupList}></MeetupList>;
// }

async function getData(): Promise<MeetupDto[]> {
  const meetup = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then<MeetupDto[], MeetupDto[]>((res) => {
      let meetUpList: Array<MeetupDto> = new Array();

      for (let i = 0; i < res.length; i++) {
        meetUpList.push({
          id: res[i].userId,
          title: res[i].id,
          image:
            "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
          address: res[i].completed + "동",
          description: res[i].title + " description",
        });
      }

      return meetUpList;
    });
  return meetup;
}

// async function getDataClient(): Promise<MeeupDto[]> {
//   const meetup = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       let meetup: MeeupDto = {
//         id: res.userId,
//         title: res.id,
//         image:
//           "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
//         address: res.completed + "동",
//         description: res.title + " description",
//       };
//       console.log(meetup);
//       return [meetup];
//     });
//   return meetup;
// }
