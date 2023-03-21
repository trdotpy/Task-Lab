import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/User";

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user = await User.create(body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const users = await User.find({}).populate("boards");
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
