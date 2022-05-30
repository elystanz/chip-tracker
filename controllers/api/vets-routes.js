const router = require("express").Router()
const  Pets  = require("../../models/pets")
const Vet = require('../../models/vets')
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

// router.post("/vets-login", (req, res) => {
//   Pets
//     .create({
//       pet: req.body.pet,
//       owner: req.body.owner,
//       isMicrochipped: req.body.isMicrochipped,
//     })
//     .then((dbPetsData) => {req.session.save(()=>{
//       req.session.pet = dbPetsData.pet;
//       req.session.owner = dbPetsData.owner;
//       req.session.loggedIn = true;
//     })})
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json(err)
//     })
// })

// router.post("/vets-login", (req, res) => {
//   const { pet, owner, isMicrochipped } = req.body;
//   if (pet && owner && isMicrochipped) {
//     const newPost = {
//       pet, 
//       owner,
//       isMicrochipped,
//     }
//     vetsData.push(newPost)
//     fs.writeFileSync(path.join(__dirname, '../../db/vets.json'),JSON.stringify(vetsData))
//   }
// })
router.post('/signup', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Vet.create({
    name: req.body.username,
    password: req.body.password
  })
    .then(async () =>{ 
      let pets = await Pets.findAll();
      pets = pets.map(pet => pet.get({plain: true}));

      console.log(pets);
      res.render('vet', {pets});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post('/signup',(req,res)=>{
//   const username =  req.body.username
//   const password = req.body.password
//   // res.json(username)
//   // res.json(password)
//   console.log(username)
//   console.log(password)
// })

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
