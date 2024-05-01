import { useMemo } from "react";
import styles from "./track1.module.css";

const Track1 = ({ propMinHeight, propPadding }) => {
  const imageIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={styles.track9}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle2.svg" />
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image1@2x.png"
        style={imageIconStyle}
      />
      <div className={styles.titleAndArtistWrapper}>
        <div className={styles.titleAndArtistContainer}>
          <p className={styles.nameOfLove}>Name of Love</p>
          <p className={styles.iceSpice}>Ice Spice</p>
        </div>
      </div>
      <div className={styles.pngwing1Wrapper}>
        <img
          className={styles.pngwing1Icon}
          loading="lazy"
          alt=""
          src="/pngwing-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Track1;
