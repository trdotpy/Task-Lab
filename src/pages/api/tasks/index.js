import nextConnect from "next-connect";
import clientPromise from "../../../../lib/mongodb";

const handler = nextConnect(); // Create a new NextConnect instance

// GET /api/tasks
handler.get(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const tasks = await tasksCollection.find({}).toArray();

  res.status(200).json({ tasks });
});

// POST /api/tasks
handler.post(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const task = req.body;

  const result = await tasksCollection.insertOne(task);
  res.status(201).json(result.ops[0]);
});

export default handler;
