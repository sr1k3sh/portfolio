// Photos from https://citizenofnowhe.re/lines-of-the-city
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation
} from "framer-motion";
import Image from "next/image";
import { proza, sansFont } from "src/utils/fonts";
import Layout from "../Layout";
import NavBar from "../NavSection";
import HeaderTitleDesc from "../headerTitleDesc";

interface Props {
  galleryData: any
}

// function ImageContainer({image}:any) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useTransform(scrollYProgress, [0, 1], [-200, 200])
//   const y1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);//useParallax(scrollYProgress, 100);

//   const opacity = useTransform(
//     scrollYProgress,
//     [200, -200, 0],
//     [1, 0.5, 0]
//   )

//   console.log(opacity, y)
//   // return <></>
//   return (
//     <div className={styles.container}>
//       <figure className={`relative w-[500px] h-[calc(100vh__-__500px)]`} ref={ref}>
//         <Image className={`object-contain w-[500px] h-[calc(100vh__-__500px)]`} fill src={image.attributes.url} style={{objectFit: 'cover'}} alt="A London skyscraper" />
//       </figure>
//       <motion.h2 className={`${proza.className} text-5xl font-bold absolute bottom-1/2 right-32`} style={{ y, opacity }}>{`#00${image.id}`}</motion.h2>
//       <motion.h2 className={`text-base ${sansFont.className} text-black-500 absolute bottom-0`} style={{ y: y1 }}>{
//         `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//         `
//       }</motion.h2>
//     </div>
//   );
// }

// export default function TestGallery({ galleryData } : Props) {

//   // console.log(galleryData.files.data)

//   return (
//     <section className={styles.main}>
//       {
//         galleryData?.files.data.length ?
//         galleryData?.files.data.map((image:any, index:number) => (
//           <ImageContainer image={image} key={index}/>
//         )) : null
//       }
//       {/* {[1, 2, 3, 4, 5].map((image,index) => (
//         <ImageContainer id={image} key={index}/>
//       ))} */}
//       {/* <motion.div className={styles.progress} style={{ scaleX }} /> */}
//     </section>
//   );
// }


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function MainImage({ image }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  // const opacity = useTransform(scrollYProgress, [1000, 200 ,0],[1, 0.5, 0])

  return (
    <section className="relative h-screen flex justify-center items-center group" style={{ perspective: 500, scrollSnapAlign: 'center' }}>
      <figure ref={ref} className="relative w-[300px] md:w-[600px] md:h-[calc(100vh__-__400px)] h-[400px] bg-black-100 dark:bg-white">
        <Image className={`object-contain w-[300px] h-[400px] transition-all duration-300 grayscale group-hover:grayscale-0 p-5 md:p-10`} fill src={image.attributes.url} style={{objectFit: 'cover'}} alt="A London skyscraper" />
      </figure>
      <motion.h2 className={`${proza.className} absolute text-5xl font-bold left-0 right-2 md:left-[calc(50%__+__230px)] md:right-0 text-secondary`} style={{ y }}>{`#00${image.id}`}</motion.h2>
    </section>
  );
}

export default function TestGallery({ galleryData } : Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const blogData = {
    blogTitle: 'My gallery',
    blogSubTitle: 'Writing from my experience',
    blogDescription: `is a captivating blog where personal stories and insightful reflections come together to offer a unique and relatable perspective. Join the author on a journey through their triumphs, challenges, and the valuable life lessons they've learned along the way. Discover inspiration, entertainment, and thought-provoking insights that invite you to reflect on your own experiences.`,
  }

  return (
    <Layout className={`bg-white-700 dark:bg-black-200 dark:text-white`}>
      <NavBar></NavBar>
      <section>
        <div className="container m-auto">
          <HeaderTitleDesc blog={blogData}></HeaderTitleDesc>
        </div>
      </section>
      {
        galleryData?.files.data ?
        galleryData?.files.data.map((image:any,index:number) => (
          <MainImage key={index} image={image} />
        )) : null
      }
      <motion.div className="fixed left-0 right-0 bottom-10 h-1 rounded-full bg-secondary" style={{ scaleX }} />
    </Layout>
  );
}
