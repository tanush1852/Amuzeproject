import TopGroup from "./top-group";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.topGroupWrapper}>
      <TopGroup topGroupAlignSelf="unset" topGroupFlex="1" />
    </div>
  );
};

export default FrameComponent;
