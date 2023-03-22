import { useState, useEffect } from "react";
import KanbanBoard from "@/components/KanbanBoard";
import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";

export default withPageAuthRequired(function Kanban() {
  const [board, setBoard] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const res = await axios.get(`/api/boards/${id}`);
      const fetchedBoard = res.data.data;
      setBoard(fetchedBoard);
    };

    fetchData();
  }, [id]);

  if (!board) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <KanbanBoard
        boardTitle={board.title}
        boardDescription={board.description}
        boardId={board._id}
      />
    </Layout>
  );
});
