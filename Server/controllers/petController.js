import Pet from "../models/Pet.js";

// Add pet
const addPet = async (req, res) => {
  try {
    const {
      name,
      species,
      breed,
      gender,
      dateOfBirth,
      weight,
      profileImage,
      medicalInfo,
      vaccinations,
      notes,
    } = req.body;

    const pet = await Pet.create({
      owner: req.user.id,
      name,
      species,
      breed,
      gender,
      dateOfBirth,
      weight,
      profileImage,
      medicalInfo,
      vaccinations,
      notes,
    });

    res.status(201).json({
      message: "Pet added successfully",
      pet,
    });
  } catch (error) {
    console.error("Add pet error:", error);

    res.status(500).json({
      message: "Failed to add pet",
      error: error.message,
    });
  }
};

// Get logged-in user's pets
const getMyPets = async (req, res) => {
  try {
    const pets = await Pet.find({
      owner: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(pets);
  } catch (error) {
    console.error("Get pets error:", error);

    res.status(500).json({
      message: "Failed to fetch pets",
      error: error.message,
    });
  }
};

// Get one pet
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found",
      });
    }

    res.status(200).json(pet);
  } catch (error) {
    console.error("Get pet error:", error);

    res.status(500).json({
      message: "Failed to fetch pet",
      error: error.message,
    });
  }
};

// Update pet
const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found",
      });
    }

    res.status(200).json({
      message: "Pet updated successfully",
      pet,
    });
  } catch (error) {
    console.error("Update pet error:", error);

    res.status(500).json({
      message: "Failed to update pet",
      error: error.message,
    });
  }
};

// Delete pet
const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found",
      });
    }

    res.status(200).json({
      message: "Pet deleted successfully",
    });
  } catch (error) {
    console.error("Delete pet error:", error);

    res.status(500).json({
      message: "Failed to delete pet",
      error: error.message,
    });
  }
};
export {
  addPet,
  getMyPets,
  getPetById,
  updatePet,
  deletePet,
};