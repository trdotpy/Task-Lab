import dbConnect from "../../../../utils/dbConnect";
import Comment from "../../../../models/Comment";
import Task from "../../../../models/Task";
import User from "../../../../models/User";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { taskId } = req.query;
        const comments = await Comment.find({ task: taskId }).populate(
          "createdBy"
        );
        res.status(200).json({ success: true, data: comments });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { taskId, text } = req.body;
        const session = await getSession(req, res);
        const userEmail = session.user.email;
        const user = await User.findOne({ email: userEmail });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const task = await Task.findById(taskId);

        if (!task) {
          return res.status(404).json({ message: "Task not found" });
        }

        const comment = new Comment({
          text,
          createdBy: user._id,
          task: taskId,
        });

				console.log("comment before save", comment);

        await comment.save();

				console.log("comment after save", comment);

        res.status(201).json({ success: true, data: comment });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
  }
});

