import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/Home/ContactUs";
import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";
import Layout from "../components/Layout-components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <ContactUs />
      </Layout>
    </>
  );
}
