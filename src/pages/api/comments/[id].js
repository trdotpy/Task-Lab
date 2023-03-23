import dbConnect from "../../../../utils/dbConnect";
import Comment from "../../../../models/Comment";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        const deletedComment = await Comment.findByIdAndDelete(id);

        if (!deletedComment) {
          return res.status(404).json({ message: "Comment not found" });
        }

        res.status(200).json({ success: true, data: deletedComment });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
  }
});
