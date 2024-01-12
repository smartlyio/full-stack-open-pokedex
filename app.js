const express = require("express")
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static("dist"))

app.get("/health", (_req, _res) => {
   throw new Error("It's not working")
   // res.send("ok")
})

app.listen(PORT, () => {
   // eslint-disable-next-line no-console
   console.log("server started on port 5000")
})
