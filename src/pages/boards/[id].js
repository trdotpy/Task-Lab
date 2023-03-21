import KanbanBoard from "@/components/KanbanBoard";
import Layout from "@/layouts/Layout";
import axios from "axios";

export default function Kanban({ board }) {
  // console.log(board);
  return (
    <Layout>
      <KanbanBoard
        title={board.title}
        description={board.description}
        boardId={board._id}
      />
    </Layout>
  );
}

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

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.BASE_URL}/api/boards`);
  const boards = res.data.data;

  const paths = boards.map((board) => ({
    params: { id: board._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/boards/${params.id}`
  );
  const board = res.data.data;

  return {
    props: {
      board,
    },
  };
}