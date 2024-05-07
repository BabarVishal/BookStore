import express from "express"


import { userLoginData, userSingInData, getBook } from "../Controllers/user.controller.js";

const router = express.Router()

router.get("/Book", getBook);

router.post("/SingIn", userSingInData)

router.get("/Login", userLoginData)

export default router