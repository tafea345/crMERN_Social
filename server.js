const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (res, req) => req.send("API running"))

app.listen(PORT, () => console.log(`SErver running on port: ${PORT}`));