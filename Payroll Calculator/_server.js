import ViteExpress from "vite-express";
import express from "express";
const app = express();
const PORT = 5173;


app.use(express.json());

app.get('/results', (req, res) => {
  return res
  .status(200)
  .sendFile('Payroll Calculator/public/results.html')
});

ViteExpress.listen(app, PORT, () => console.log(`Listening on port ${PORT}`));
