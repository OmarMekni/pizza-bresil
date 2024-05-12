import Head from "next/head";

interface Props {
  title: String;
  description: String;
}

export const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title>Pizza Brésil</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
