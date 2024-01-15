import express from 'express'
import { addVideo, getBytag, getVideo, random, search, sub, trend, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();


router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, addVideo);
router.get("/find/:id", verifyToken, getVideo);
router.put("/view/:id", verifyToken, addVideo);
router.get("/trend/", verifyToken, trend);
router.get("/random/", random);
router.get("/sub", verifyToken, sub);
router.get("/tags", verifyToken, getBytag);
router.get("/search", verifyToken, search);

export default router;