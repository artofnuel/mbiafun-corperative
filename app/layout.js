import { Inter, Montserrat, Playfair, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });
const raleway = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "The Mbiafun Cooperative",
  description: "Building a better community for our people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} w-full h-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
