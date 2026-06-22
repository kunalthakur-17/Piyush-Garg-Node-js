import User from "../models/user.js";

export async function getAllUsersJSON(req, res) {
    const users = await User.find();
    return res.json(users);
}

export async function getAllUsersHTML(req, res) {
    const users = await User.find();
    const html = `<ul>${users.map(u => `<li>${u.first_name} ${u.last_name}</li>`).join("")}</ul>`;
    return res.send(html);
}

export async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ status: "error", message: "User not found" });
    return res.json(user);
}

export async function createUser(req, res) {
    const { first_name, last_name, email, gender, ip_address } = req.body;
    if (!first_name || !last_name || !email) {
        return res.status(400).json({ status: "error", message: "first_name, last_name, and email are required" });
    }
    const user = await User.create({ first_name, last_name, email, gender, ip_address });
    return res.status(201).json({ status: "success", user });
}

export async function updateUser(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ status: "error", message: "User not found" });
    return res.json({ status: "success", user });
}

export async function deleteUser(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ status: "error", message: "User not found" });
    return res.json({ status: "success", id: req.params.id });
}
