import Head from "next/head";
import LandingLayout from "@/layouts/LandingLayout";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading)
    return (
      <div>
        <div
          className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-purple-600"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
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
