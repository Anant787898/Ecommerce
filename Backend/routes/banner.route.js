import express from "express";
import {
  createBanner,
  deleteBanner,
  getAllBanners,
  getRandomBanner,
} from "../controller/banner.controller.js";
const router = express.Router();

//CREATE BANNER ROUTE

router.post("/", createBanner);

//GET ALL BANNERS

router.get("/", getAllBanners);

//DELETE BANNER

router.delete("/:id", deleteBanner);

//GET RANDOM BANNER

router.get("/random", getRandomBanner);

export default router;
