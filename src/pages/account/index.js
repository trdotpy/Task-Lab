import AccountSettings from "@/components/AccountSettings";
import Layout from "@/layouts/Layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

export default function AccountPage() {
  return (
    <Layout>
      <AccountSettings />
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
