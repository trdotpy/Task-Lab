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
        title={board.title}
        description={board.description}
        boardId={board._id}
      />
    </Layout>
  );
});

// import KanbanBoard from "@/components/KanbanBoard";
// import Layout from "@/layouts/Layout";
// import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
// import axios from "axios";

// export async function getServerSideProps({ params }) {
//   const res = await axios.get(
//     `${process.env.BASE_URL}/api/boards/${params.id}`
//   );
//   const board = res.data.data;

//   return {
//     props: {
//       board,
//     },
//   };
// }

// export default withPageAuthRequired(function Kanban({ board }) {
//   return (
//     <Layout>
//       <KanbanBoard
//         title={board.title}
//         description={board.description}
//         boardId={board._id}
//       />
//     </Layout>
//   );
// });
