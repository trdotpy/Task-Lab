import AppLayout from "@/layouts/AppLayout";
import ProjectSettings from "@/components/ProjectSettings";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function SettingsPage() {
  return (
    <AppLayout>
      <ProjectSettings />
    </AppLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
