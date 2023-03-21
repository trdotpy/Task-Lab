import mongoose from "mongoose";
import Task from "../../../../models/Task";
import dbConnect from "../../../../utils/dbConnect";

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const task = await Task.create(body);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
