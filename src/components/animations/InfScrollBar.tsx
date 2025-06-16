import React from 'react';
import styles from './animation.module.scss';
import Image from 'next/image';

type ScrollProps = {
  direction?: "left" | "right",
  value: string[],
}

export default function InfScrollBar(props: ScrollProps) {

  return (
    <div className={styles.infiniteScroll}>
      <ul className={styles[props.direction === "left" ? "left" : "right"]}>
        {props.value?.map((item, index) => (
          <div className={styles.imageWrapper} key={index}>
            <Image src={`https://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/${item}.webp`} alt={item} fill style={{ objectFit: 'contain' }} />
          </div>
        ))}
        {props.value?.map((item, index) => (
          <div className={styles.imageWrapper} key={`copy-${index}`}>
            <Image src={`https://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/${item}.webp`} alt={`copy-${index}`} fill style={{ objectFit: 'contain' }} />
          </div>
        ))}

      </ul>
    </div>
  );
}
