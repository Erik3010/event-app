import styles from "components/Login/LoginSidebar/LoginSidebar.module.scss";

import { ReactComponent as Banner } from "assets/banner.svg";
import { ReactComponent as Pattern } from "assets/pattern.svg";

function LoginSidebar() {
  return (
    <div className={styles["login-sidebar"]}>
      <div className={styles["login-sidebar-overlay"]}>
        <Pattern width={800} height={800} viewBox="0 0 1100 1100" />
      </div>
      <div className={styles["login-sidebar-wrapper"]}>
        <Banner width={320} height={320} />
        <div className={styles["login-sidebar-text"]}>
          <h1>Join an event with just 1 click.</h1>
          <p>
            Come with us and get some excellent experience. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Saepe doloremque, beatae nisi
            laborum sapiente mollitia quia alias ab? Iure, quas?
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSidebar;
