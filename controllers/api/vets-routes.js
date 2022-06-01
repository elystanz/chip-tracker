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
  Vet.create({
    name: req.body.username,
    password: req.body.password
  })
  console.log('jus')
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

router.post('/add-pet',(req,res)=>{
  Pets.create({
    pet: req.body.petName,
    owner: req.body.ownerName,
    isMicrochipped: req.body.chipped
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
})


router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Vet.findOne({
    where: {
      name: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ vet: dbUserData, message: 'You are now logged in!' });
    });
  });
});


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
