const router = require("express").Router()
const  Pets  = require("../../models/pets")
const fs = require('fs')
const path = require('path')
let vetsData = require('../../db/vets.json')

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

router.post("/", (req, res) => {
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

router.post("/vets-login", (req, res) => {
  const { pet, owner, isMicrochipped } = req.body;
  if (pet && owner && isMicrochipped) {
    const newPost = {
      pet, 
      owner,
      isMicrochipped,
    }
    vetsData.push(newPost)
    fs.writeFileSync(path.join(__dirname, '../../db/vets.json'),JSON.stringify(vetsData))
  }
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
