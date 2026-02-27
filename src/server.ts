import express, { type Request, type Response } from "express"
import { prisma } from "./lib/prisma"
const app = express()

const port = 3000

app.get("/", (req: Request, res: Response) => {
    res.send("app is running...")
})

app.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).send({
            success: true,
            message: "Data fetching successful",
            data: users
        })
    } catch (error) {
        console.error("error fetching users: ", error)
        res.status(500).send(
            {
                success: false,
                message: "Internal server error"
            }
        )
    }
})



app.listen(port, () => {
    console.log("app is running in port : ", port)
})