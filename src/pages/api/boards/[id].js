import dbConnect from "../../../../utils/dbConnect";
import Board from "../../../../models/Board";

export default async function handler(req, res) {
  const { method, body } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const board = await Board.findById(id).populate("createdBy");
        res.status(200).json({ success: true, data: board });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const board = await Board.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({ success: true, data: board });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const board = await Board.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: board });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
