const router = require("express").Router()
const  Pets  = require("../../models/pets")
const fs = require('fs')
const path = require('path')
let clientData = require('../../db/client.json')

router.post("/client-login", (req, res) => {
    const { pet, owner, } = req.body;
    if (pet && owner ) {
      const newPost = {
        pet, 
        owner,
      }
      clientData.push(newPost)
      fs.writeFileSync(path.join(__dirname, '../../db/client.json'),JSON.stringify(clientData))
    }
  })