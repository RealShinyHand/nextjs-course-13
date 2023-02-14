"use client";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
export default function Home() {
  const addMeetupHandler = (data: object) => {
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
