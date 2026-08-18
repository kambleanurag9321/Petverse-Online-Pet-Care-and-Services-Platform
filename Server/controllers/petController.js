const Pet = require("../models/Pet");

// Add pet
const addPet = async (req, res) => {
  try {
    const { name, type, breed, age } = req.body;

    const pet = await Pet.create({
      name,
      type,
      breed,
      age,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Pet added successfully",
      pet,
    });
  } catch (error) {
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
    });

    res.status(200).json(pets);
  } catch (error) {
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
    res.status(500).json({
      message: "Failed to delete pet",
      error: error.message,
    });
  }
};

module.exports = {
  addPet,
  getMyPets,
  getPetById,
  updatePet,
  deletePet,
};