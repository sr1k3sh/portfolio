// Photos from https://citizenofnowhe.re/lines-of-the-city
import styles from "./index.module.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageContainer({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [200, -200])
  const y1 = useTransform(scrollYProgress, [0, 1], [-300, 300]);//useParallax(scrollYProgress, 100);

  return (
    <div className={styles.container}>
      <figure className={styles.figure} ref={ref}>
        <Image className={styles.img} fill src={`/bg.avif`} style={{objectFit: 'cover'}} alt="A London skyscraper" />
      </figure>
      <motion.h2 className={styles.h2} style={{ y }}>{`#00${id}`}</motion.h2>
      <motion.h2 className={styles.p} style={{ y: y1 }}>{
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `
      }</motion.h2>
    </div>
  );
}

export default function TestGallery() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className={styles.main}>
      {[1, 2, 3, 4, 5].map((image,index) => (
        <ImageContainer id={image} key={index}/>
      ))}
      {/* <motion.div className={styles.progress} style={{ scaleX }} /> */}
    </section>
  );
}
