import styles from "components/Event/EventCard/EventCard.module.scss";

import { useHistory } from "react-router-dom";

import { ReactComponent as DotsVertical } from "assets/icons/dots-vertical.svg";
import Badge from "components/Basic/Badge/Badge";

function EventCard() {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/event/asd/sessions");
  };

  return (
    <div className={styles["event-card"]} onClick={clickHandler}>
      <div className={styles["event-card-overlay"]}></div>
      <div className={styles["event-card-body"]}>
        <div className={styles["event-card-header"]}>
          <div>
            <Badge color="primary">12 hours to go</Badge>
          </div>
          <div className={styles["event-menu-icon"]}>
            <DotsVertical width={22} height={22} />
          </div>
        </div>
        <div className={styles["event-card-content"]}>
          <h3>Event List</h3>
          <p>20 Agustus 2021</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
