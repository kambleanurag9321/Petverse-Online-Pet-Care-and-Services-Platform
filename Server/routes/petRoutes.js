import express from "express";

import {
  addPet,
  getMyPets,
  getPetById,
  updatePet,
  deletePet,
} from "../controllers/petController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// All pet routes require authentication
router.use(protect);

// Add a pet
router.post("/", addPet);

// Get all pets belonging to logged-in user
router.get("/", getMyPets);

// Get one pet
router.get("/:id", getPetById);

// Update pet
router.put("/:id", updatePet);

// Delete pet
router.delete("/:id", deletePet);

export default router;