const Users = require('./user-model')
const router = require('express').Router()


router.get('/', (req,res)=>{
    Users.getUsers()
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(err=>{
            res.status(500).json({
                message: 'unable to retrieve data',
                error: err
            })
        })
})

router.post('/register', (req,res) =>{
    Users.addUser(req.body)
        .then(user=>{
           res.status(201).json(user)
        })
        .catch(err=>{
            res.status(500).json({
                message: 'unable to save user',
                error: err
            })
        })
})

router.delete('/delete/:id', (req, res)=>{
    Users.removeUser(req.params.id)
        .then(deleted=>{
            res.status(200).json({
                message: `deleted ${deleted} items`
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: 'unable to delete user',
                error: err
            })
        })
})