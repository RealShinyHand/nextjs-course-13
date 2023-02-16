import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { MeeupDto } from "./MeetupDto";
function MeetupList(props: { meetups: MeeupDto[] }) {
  return (
    <ul className={classes.list}>
      {props.meetups?.map((meetup) => (
        <MeetupItem
          key={meetup.id}
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
