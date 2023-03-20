import axios from "axios";

export default async (req, res) => {
  const { data } = await axios.get("http://localhost:4000/api/boards");
  res.json(data);
};