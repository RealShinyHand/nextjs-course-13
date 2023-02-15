import Image from "next/image";
import { MeeupDto } from "./MeetupDto";
import classes from "./MeetupDetail.module.css";

export default function MeetupDetail({ meetup }: { meetup: MeeupDto }) {
  return (
    <>
      <div className={classes.detail}>
        <div className={classes.imgBox}>
          <Image src={meetup.image} alt="detail image" fill={true}></Image>
        </div>
        <h1>{meetup.title}</h1>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </div>
    </>
  );
}
