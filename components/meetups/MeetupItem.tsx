"use client";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Image from "next/image";

import { useRouter } from "next/navigation";
function MeetupItem(props: any) {
  const router = useRouter();

  const detailButtonHandler = () => {
    router.push(`/${props.title}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.title}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={detailButtonHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
