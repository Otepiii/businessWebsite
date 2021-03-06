const express = require("express")
const app = express()

// Import Routes
const authRoute = require("./app/routes/auth")

// Routes Middlewares
app.use("/api/user", authRoute)

app.listen(3000, () => {
  console.log("Server up and running")
})
