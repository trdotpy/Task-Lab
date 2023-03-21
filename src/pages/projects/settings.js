import Layout from "@/layouts/Layout";
import ProjectSettings from "@/components/ProjectSettings";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function SettingsPage() {
  return (
    <Layout>
      <ProjectSettings />
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
