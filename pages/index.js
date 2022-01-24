import ContactUs from "../components/Home/ContactUs";
import JustForFun from "../components/Home/JustForFun";
import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";
import Layout from "../components/Layout-components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <JustForFun />
        <ContactUs />
      </Layout>
    </>
  );
}
