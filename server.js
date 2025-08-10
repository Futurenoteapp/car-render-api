import express from "express";

const app = express();
app.use(express.json());

// Test route
app.get("/", (_req, res) => res.json({ ok: true }));

// Placeholder render route
app.post("/render", (req, res) => {
  const { model_url, camera } = req.body || {};
  if (!model_url || !camera) {
    return res.status(400).json({ error: "Missing model_url or camera" });
  }
  // Return placeholder image URL
  res.json({
    image_url: "https://picsum.photos/seed/car/1536/1024"
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Renderer API running on ${port}`));
