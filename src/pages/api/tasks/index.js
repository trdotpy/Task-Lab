import Board from "../../../../models/Board";
import Task from "../../../../models/Task";
import dbConnect from "../../../../utils/dbConnect";

export default async function handler(req, res) {
  const { method, body, query } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find({ board: query.boardId });
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const task = await Task.create({ ...body, board: query.boardId });

        await Board.findByIdAndUpdate(query.boardId, {
          $push: { tasks: task._id },
        });

        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
