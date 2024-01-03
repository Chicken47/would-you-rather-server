import express from "express";
import axios from "axios";

const wyrRoutes = express.Router();

wyrRoutes.post("/get/wyrs", async (req, res) => {
  try {
    const { type } = req.body;

    const apiUrl = `https://www.reddit.com/r/WouldYouRather/${type}/.json`;
    const response = await axios.get(apiUrl);

    console.log("Received request:", req.body);
    console.log(apiUrl, "apiUrl");

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default wyrRoutes;
