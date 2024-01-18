const { response } = require('express')
const usermodel = require('../model/modelindex')

//alluser
const findall = (req, res, next) => {
    usermodel.find()
        .then(response => {
            res.json({ response })
        })
        .catch(err => {
            res.json({ err })
        })
}

//store
const store = (req, res, next) => {
    let name = req.body.name
    let age = req.body.age
    let mob = req.body.mob
    console.log(name, age, mob);
    const user = new usermodel({
        name: req.body.name,
        age: req.body.age,
        mob: req.body.mob
    })
    user.save()
        .then(response => {
            res.json({ message: "user created sucessfully." + user })
        })
        .catch(err => {
            res.json({ message: "User Creation failed!" + err })
        })
}

//find by id
const findByid = async (req, res, next) => {
    let id = req.body.id
    // console.log(id);
    try {
        const user = await usermodel.findById(id)
        if (user) {
            res.json({ user })
        } else {
            res.status(404).send({ message: "user not found" })
        }
    } catch (error) {
        res.status(505).json({ message: error.message })
    }
}

// update

const update = (req, res, next) => {
    let id = req.body.id;
    //   console.log(id);
    const updateduser = {
        name: req.body.name,
    }
    usermodel.findByIdAndUpdate(id, { $set: updateduser })
        .then(response => {
            res.json({ message: "update sucessfull." })
        })
        .catch(err => {
            res.json({ err })
        })
}

//delete
const dlit = (req, res, next) => {
    let id = req.body.id;
    console.log(id);
    usermodel.findByIdAndDelete(id)
    .then(response => {
        res.json({ message: "user deleted.." })
    })
    .catch(err => {
        res.json({ err })
    })
}

module.exports = {
    store,
    findall,
    findByid,
    update,
    dlit
}