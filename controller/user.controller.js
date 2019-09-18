const User = require('../model/user.model');

const insert = async(data) => {
    try {
        let user = new User({
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            state: data.state
        });

        let result = await user.save();

        return result;
    } catch (e) {
        console.log(e);
        return e
    }
}

const update = async(id, data) => {
    try {
        let result = await User.findOneAndUpdate({ _id: id }, { $set: data }, { useFindAndModify: false, upsert: true });
        return result;
    } catch (e) {
        console.log(e);
        return e
    }
}
const remove = async(id) => {
    try {
        let result = await User.findOneAndDelete({ _id: { $eq: id } }, { useFindAndModify: false });
        return result
    } catch (e) {
        console.log(e);
        return e
    }
}
const getById = async(id) => {
    try {
        let result = await User.find({ _id: id }, { useFindAndModify: false });
        return result
    } catch (e) {
        console.log(e);
        return e
    }

}

const get = async() => {

    try {
        let result = await User.find({}, { useFindAndModify: false });
        return result
    } catch (e) {
        console.log(e);
        return e
    }

}
module.exports = { insert, update, remove, getById, get };