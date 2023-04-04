import { useState, useEffect, useCallback } from "react";
import KanbanBoard from "@/components/KanbanBoard";
import AppLayout from "@/layouts/AppLayout";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default withPageAuthRequired(function Kanban() {
  const [board, setBoard] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchBoard = useCallback(async () => {
    const res = await axios.get(`/api/boards/${id}`);
    const fetchedBoard = res.data.data;
    setBoard(fetchedBoard);
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchBoard();
  }, [id, fetchBoard]);

  if (!board) {
    return <AppLayout>Loading...</AppLayout>;
  }

  return (
    <AppLayout>
      <div className="mb-4">
        <Breadcrumb boardTitle={board.title} />
      </div>
      <KanbanBoard
        boardTitle={board.title}
        boardDescription={board.description}
        boardId={board._id}
        fetchBoard={fetchBoard}
      />
    </AppLayout>
  );
});
