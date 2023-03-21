import KanbanBoard from "@/components/KanbanBoard";
import Layout from "@/layouts/Layout";
import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function ProjectPage() {
  return (
    <Layout>
      <KanbanBoard />
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
