import nextConnect from "next-connect";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

const handler = nextConnect();

// GET /api/tasks/:id
handler.get(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const { id } = req.query;
  const task = await tasksCollection.findOne({
    _id: new ObjectId(id),
  });

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// PUT /api/tasks/:id
handler.put(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const { id } = req.query;
  const updatedTask = req.body;

  const result = await tasksCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedTask }
  );

  if (result.modifiedCount > 0) {
    res.status(200).json({ message: "Task updated successfully" });
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// PATCH /api/tasks/:id
handler.patch(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const { id } = req.query;
  const updatedTask = req.body;

  const result = await tasksCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedTask }
  );

  if (result.modifiedCount > 0) {
    res.status(200).json({ message: "Task updated successfully" });
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// DELETE /api/tasks/:id
handler.delete(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const { id } = req.query;

  const result = await tasksCollection.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount > 0) {
    res.status(200).json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

export default handler;
