import FrameComponent from "../components/frame-component";
import Track1 from "../components/track1";
import BottomGroup1 from "../components/bottom-group1";
import styles from "./home-screen-dark1.module.css";

const HomeScreenDark1 = () => {
  return (
    <div className={styles.homeScreenDark}>
      <FrameComponent />
      <main className={styles.homeScreenDarkInner}>
        <section className={styles.optionsExpandParent}>
          <div className={styles.optionsExpand}>
            <div className={styles.pngimg}>
             
              <img
                className={styles.pngimg1Icon}
                loading="lazy"
                alt=""
                src="/pngimg-1@2x.png"
              />
              
            </div>
          </div>
          <div className={styles.trackContainerParent}>
            <div className={styles.trackContainer}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.rectangleIcon1}
                  alt=""
                  src="/rectangle3.svg"
                />
                <Track1 />
                <Track1 propMinHeight="unset" />
                <Track1 propMinHeight="unset" />
                <Track1 propMinHeight="unset" />
                <Track1 propMinHeight="unset" />
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <img className={styles.rectangleIcon2} alt="" />
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.rectangleIcon3}
                  alt=""
                  src="/rectangle-1.svg"
                />
                <div className={styles.titleAndArtist}>Submit List</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomGroup1 />
    </div>
  );
};

export default HomeScreenDark1;
