import Head from "next/head";
import SWRegister from "@/components/clientComponents/SWRegister";

export default function Home() {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/apple-touch-icon.png"/>
      </Head>
      <SWRegister/>
    </div>
  );
}
