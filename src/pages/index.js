import Head from "next/head";
import LandingLayout from "@/layouts/LandingLayout";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";
import Brands from "@/components/Brands";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  if (user) {
    router.push("/boards");
  }

  if (!user) {
    return (
      <>
        <Head>
          <title>TaskLab | Project Management</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <LandingLayout>
            <Hero />
            <Brands />
          </LandingLayout>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>TaskLab | Project Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
