const router = require("express").Router()
const { pets } = require("../models/pets")

const pets = [
  {
    owner_name: "Francis Hubble",
    pet_name: "Oreo",
    micro_status: true,
  },
  {
    owner_name: "Alice Wally",
    pet_name: "Peaches",
    micro_status: true,
  },
  {
    owner_name: "Billy Jimbles",
    pet_name: "Rex",
    micro_status: false,
  },
]

router.get("/", async (req, res) => {
  const petInfo = pets[req.params.id - 1]
  res.render("petInfo", petInfo)
})

router.get("/", (req, res) => {
  pets
    .findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.get("/:id", (req, res) => {
  pets
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No pet found with this ID" })
        return;
      }
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.post("/", (req, res) => {
  pets
    .create({
      pet: req.body.pet,
      owner: req.body.owner,
      isMicrochipped: req.body.isMicrochipped,
    })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.put("/:id", (req, res) => {
    pets.update(req.body,{
        where: {
            id: req.params.id,
        },
    })
    .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No pet found with this ID" })
          return;
        }
        res.json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

  router.delete("/:id", (req, res) => {
    pets.destroy(req.body,{
        where: {
            id: req.params.id,
        },
    })
    .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No pet found with this ID" })
          return;
        }
        res.json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

module.exports = router
