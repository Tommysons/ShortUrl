import express from "express"
import { createUrl, getAllUrl, getUrl, editUrl, deleteUrl } from "../controllers/shortUrl"
const router = express.Router()

router.post("/shortUrl", createUrl)
router.get("/shortUrl", getAllUrl)
router.get("/shortUrl/:id", getUrl)
router.post("/shortUrl/:id", editUrl)
router.delete("/shortUrl/:id", deleteUrl)

export default router


