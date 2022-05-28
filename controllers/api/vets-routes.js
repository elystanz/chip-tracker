const router = require("express").Router()
const  Pets  = require("../../models/pets")

router.get("/", (req, res) => {
  Pets
    .findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})



router.get("/:id", (req, res) => {
  Pets
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

router.post("/vets-login", (req, res) => {
  Pets
    .create({
      pet: req.body.pet,
      owner: req.body.owner,
      isMicrochipped: req.body.isMicrochipped,
    })
    .then((dbPetsData) => {req.session.save(()=>{
      req.session.pet = dbPetsData.pet;
      req.session.owner = dbPetsData.owner;
      req.session.loggedIn = true;
    })})
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.put("/:id", (req, res) => {
    Pets.update(req.body,{
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
    Pets.destroy({
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
