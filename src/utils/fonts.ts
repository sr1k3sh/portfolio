import { Cormorant, DM_Sans, Montserrat, Poiret_One, Proza_Libre } from "next/font/google";

// export const notojp = Noto_Sans_JP({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// + variable: "--font-notojp",
//   display: "swap",
// });

export const sansFont = DM_Sans({
  subsets: ['latin'] ,
  weight: ['400','500','700'],
  variable: "--font-dm_sans",
})

export const carmorant = Cormorant({
  subsets: ['latin'],
  // weight: [],
  weight: ['300','400','500','600','700'],
  variable: "--font-poiret_one",
})

export const proza = Proza_Libre({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  // weight: ['100','200','300','400','500','600','700','800','900'],
  variable: "--font-montserrat",
})