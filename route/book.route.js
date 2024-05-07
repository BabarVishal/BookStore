import express from "express"

import { getBook } from "../Controllers/book.contriller.js"

const router = express.Router()

router.get("/", getBook)

export default router