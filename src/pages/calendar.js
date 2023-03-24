import AppLayout from "@/layouts/AppLayout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

export default function CalendarPage() {
  return (
    <AppLayout>
      <div>CalendarPage</div>
    </AppLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
