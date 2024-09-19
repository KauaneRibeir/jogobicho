import "dotenv/config";
import e from "express";
import jogoRouter from "./routes/jogo-route.js"
import bichoRouter from "./routes/bicho-route.js"
import apostaRouter from "./routes/aposta-route.js"

const app = e();

app.use(e.json())

app.use("/jogo", jogoRouter)
app.use("/bicho", bichoRouter)
app.use("/aposta", apostaRouter)

app.listen(process.env.API_PORT, () => {
    console.log(`Server running in port ${process.env.API_PORT}`)
});