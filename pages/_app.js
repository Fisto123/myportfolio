import "@/styles/globals.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
