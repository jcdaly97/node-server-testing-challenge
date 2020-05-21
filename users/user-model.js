const db = require('../db/db-connect')

module.exports = {
    addUser,
    removeUser,
    getUsers,
    getUsersBy

}

function getUsers(){
    return db('users').select('id', 'username')
}

function getUsersBy(param){
    return db('users').where(param)
}

async function addUser(user){
    try{
        const [newID] = await db('users').insert(user)
        return getUsersBy({id: newID})
    }catch(err){
        throw err
    }
}

function removeUser(id){
    return db('users').where({id: id}).del()
}