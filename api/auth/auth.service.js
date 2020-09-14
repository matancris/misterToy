const bcrypt = require('bcryptjs')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)
    if (!username || !password) return Promise.reject('username and password are required!')

    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')
    const match = ((password === user.password) || (await bcrypt.compare(password, user.password)))
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password;
    return user;
}

async function signup(fullName, password, username) {
    logger.debug(`auth.service - signup with fullName: ${fullName}, username: ${username}`)
    if (!fullName || !password || !username) return Promise.reject('fullName, username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({fullName, password: hash, username})
}

module.exports = {
    signup,
    login
}