import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MeeupDto } from "@/components/meetups/MeetupDto";

const meetupDetailDummy: MeeupDto = {
  id: "m1",
  title: "A First",
  image:
    "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
  address: "Some Address 5, 1234 Some city",
  description: "This is a first meet up",
};
export default function Home({ params }: { params: { meetUpId: string } }) {
  const meetUpId = params.meetUpId;

  console.log(meetUpId);

  return (
    <div>
      <MeetupDetail meetup={meetupDetailDummy}></MeetupDetail>
    </div>
  );
}
