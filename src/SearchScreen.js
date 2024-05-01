import FrameComponent from "../components/frame-component";
import Track1 from "../components/track1";
import BottomGroup1 from "../components/bottom-group1";
import { SearchBar } from "./SearchBar.jsx";
import styles from "./SearchScreen.css";
import "./SearchBar.css";
import "./TrackList.css";

const SearchScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperGroup}>
        <FrameComponent />
      </div>
      <main className={styles.middleSection}>
        <div className={styles.darkGreyBlock}></div> {/* Dark grey block */}
        <section className={styles.scrollableSection}>
          <div className={styles.optionsExpandParent}>
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
                  {[...Array(5)].map((_, index) => (
                    <Track1 key={index} propMinHeight="unset" />
                  ))}
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
          </div>
        </section>
      </main>
      <div className={styles.bottomGroup}>
        <BottomGroup1 />
      </div>
      <SearchBar /> {/* Adding SearchBar component */}
    </div>
  );
};

export default SearchScreen;
