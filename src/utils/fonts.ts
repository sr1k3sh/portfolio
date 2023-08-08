import { DM_Sans } from "next/font/google";

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