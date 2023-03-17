import axios from "axios";

export default async (req, res) => {
  const { id } = req.query;
  const { data } = await axios.patch(
    `http://localhost:4000/api/tasks/${id}`,
    req.body
  );
  res.json(data);
};
