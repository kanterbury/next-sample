import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = ({ message }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (ctx) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
