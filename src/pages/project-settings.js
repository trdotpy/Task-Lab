import Layout from "@/components/Layout";
import ProjectSettings from "@/components/ProjectSettings";
import Head from "next/head";
import React from "react";

export default function ProjectSettingsPage() {
  return (
    <>
      <Head>
        <title>TaskLab | Project Settings</title>
      </Head>
      <Layout>
        <ProjectSettings />
      </Layout>
    </>
  );
}
