import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MeetupDto } from "@/components/meetups/MeetupDto";

export default async function Home({
  params,
}: {
  params: { meetUpId: string };
}) {
  const meetUpId = params.meetUpId;

  const meetupDetail = await getSpecificData(meetUpId);

  return (
    <div>
      <MeetupDetail meetup={meetupDetail}></MeetupDetail>
    </div>
  );
}

async function getSpecificData(id: string): Promise<MeetupDto> {
  const meetup = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .then((res) => {
      let meetupDto: MeetupDto = {
        id: res.userId,
        title: res.id,
        image:
          "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
        address: res.completed + "동",
        description: res.title + " description",
      };

      return meetupDto;
    });
  return meetup;
}
