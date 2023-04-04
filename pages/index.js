import Head from "next/head";
import Section from "../components/section/section";
import Hero from "../components/hero/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Tokenized</title>
      </Head>
      <main>
        <Section type='hero'>
          <Hero />
        </Section>
      </main>


      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
