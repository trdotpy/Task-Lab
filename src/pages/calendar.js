import Layout from "@/layouts/Layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

export default function CalendarPage() {
  return (
    <Layout>
      <div>CalendarPage</div>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
