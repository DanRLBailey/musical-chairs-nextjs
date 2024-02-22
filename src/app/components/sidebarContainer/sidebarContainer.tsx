import { useState } from "react";
import styles from "./sidebarContainer.module.scss";
// import { Link } from "react-router-dom";

interface SidebarContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

export const SidebarContainer = (props: SidebarContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={`${styles.sidebarContainer} ${!isOpen ? styles.closed : ""}`}
    >
      <div className={styles.sidebarContent}>
        <div className={styles.mainContent}>
          <div className={styles.homePageLink}>
            <span>Musical Chairs</span>
            {/* <Link to={"/"}>Musical Chairs</Link> */}
          </div>
          {props.children}
        </div>
      </div>
      <div className={styles.sidebarCollapse}>
        <div className={styles.collapse} onClick={() => setIsOpen(!isOpen)}>
          <div className={!isOpen ? styles.closed : ""}>^</div>
        </div>
      </div>
    </div>
  );
};
