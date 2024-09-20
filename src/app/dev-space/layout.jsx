import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default function DevLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
