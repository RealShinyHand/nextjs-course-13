import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { MeetupDto } from "./MeetupDto";
function MeetupList(props: { meetups: MeetupDto[] }) {
  return (
    <ul className={classes.list}>
      {props.meetups?.map((meetup, index) => (
        <MeetupItem
          key={index}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
