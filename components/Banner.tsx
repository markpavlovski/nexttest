import React, {useState} from "react";
import {BannerProps} from "./types";
import styles from "./Banner.module.scss";
import cn from "classnames";

const SHOW_MORE = "Show more";
const SHOW_LESS = "Show less";

const Banner: React.FC<BannerProps> = ({bannerContent}) => {
  const {visibleContent, hiddenContent} = bannerContent;
  const [showHidden, setShowHidden] = useState(false);

  if (!visibleContent) return null;

  return (
    <div className={cn(styles.container)}>
      <section>
        <div dangerouslySetInnerHTML={{__html: visibleContent}}/>
      </section>
      {hiddenContent && showHidden && (
        <section>
          <div dangerouslySetInnerHTML={{__html: hiddenContent}}/>
        </section>
      )}
      {hiddenContent && (
        <section>
          <button className={styles.toggleShowMore} onClick={() => setShowHidden(!showHidden)}>
            {showHidden ? SHOW_LESS : SHOW_MORE}
          </button>
        </section>
      )}
    </div>
  );
};

export default Banner;