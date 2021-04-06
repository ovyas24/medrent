const Admin = require("../model/admin")
const bcrypt = require('bcryptjs')

class BaseRepo {
    constructor (modelType) {
        this._modelType = modelType;
    }

    CreateUser = async (body) => {
        const { name, email, password, role } = body
        const hashedPassword = await this.hashPassword(password)
        const newUser = new Admin({
            anme,
            email,
            password:hashedPassword,
            role
        })

        const isUser = newUser.save()
        return isUser
    }

    hashPassword = async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
    }
}

module.exports = BaseRepo