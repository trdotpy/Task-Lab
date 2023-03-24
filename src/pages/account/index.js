import AccountSettings from "@/components/AccountSettings";
import AppLayout from "@/layouts/AppLayout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

export default function AccountPage() {
  return (
    <AppLayout>
      <AccountSettings />
    </AppLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
