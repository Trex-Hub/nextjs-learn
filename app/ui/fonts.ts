import { Inter, Lusitana } from "next/font/google";
// Playwrite Colombia Guides
import { Playfair_Display } from "next/font/google";
// Playwrite Perú Guides
import { Playfair_Display_SC } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"] });
export const playfairPeru = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
