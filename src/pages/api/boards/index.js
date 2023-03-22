import dbConnect from "../../../../utils/dbConnect";
import Board from "../../../../models/Board";
import User from "../../../../models/User";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const session = await getSession(req, res);
        const userEmail = session.user.email;

        const user = await User.findOne({ email: userEmail });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const boards = await Board.find({ createdBy: user._id }).populate(
          "createdBy"
        );

        res.status(200).json({ success: true, data: boards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        // Get the current logged-in user's email
        const session = await getSession(req, res);
        const userEmail = session.user.email;

        // Find the user document with the given email
        const user = await User.findOne({ email: userEmail });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Create a new board with the current user as the creator
        const { title, description } = req.body;
        const board = new Board({
          title,
          description,
          createdBy: user._id,
        });

        // Save the new board to the database
        await board.save();

        // Return the new board as the response
        res.status(201).json(board);
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
