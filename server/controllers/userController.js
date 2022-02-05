import { response } from 'express';
import UserModel from '../models/usermodel.js';

export const addUser = async (req, res) => {
    const newUser = new UserModel({ firstName: "sadik", lastName: "sheikh", email: "mohdsadik.sadik@gmail.com", dob: "12-01-2000", role: "admin", city: "jaipur", state: "rajsthan", password: "abc" });
    try {
        await newUser.save()
        res.status(201).json({ "message": "success" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
try {
    const users = await UserModel.find();
    res.status(200).json(users);
} catch (error) {
    res.status(400).json({ message: error.message });
}    
}

export const deleteUser = async (req, res) => {
    try {
        await UserModel.deleteOne({ _id: req.params.id });
        res.status(201).json("user deleted succesfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}