import dbConnect from "../../../../utils/dbConnect";
import Board from "../../../../models/Board";

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const board = await Board.create(body);
        res.status(201).json({ success: true, data: board });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const boards = await Board.find({}).populate("createdBy");
        res.status(200).json({ success: true, data: boards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
