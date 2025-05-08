import { Users } from "../model/User.js";
import bcrypt from 'bcryptjs';
import { GenerateVerificationToken } from "../utils/GenerateVerificationToken.js";
import { GenerateAWTToken } from "../utils/GenerateJWTToken.js";

export const SignUp = async (req, resp) => {

    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return resp.status(400).json({ message: 'This Field is required' })
        }
        const AlreadyExit = await Users.findOne({ email })
        if (AlreadyExit) {
            return resp.status(400).json({ message: 'This Email already exists' })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const verificationToken = GenerateVerificationToken();

        const user = new Users({
            name,
            email,
            password: hashPassword,
            verificationToken,
            VerificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 100, // 24 hours
        });

        await user.save();

        GenerateAWTToken(resp, user._id);

        resp.status(201).json({ message: 'User Created Successfully' });
    } catch (error) {
        resp.status(400).json({ success: false, message: error.message })
    }
};

export const Login = async (req, resp) => {
    resp.send("This is the Login page");
};

export const Logout = async (req, resp) => {
    resp.send("This is the Logout page");
};

export const ForgotPassword = async (req, res) => {
    res.send("Reset password")
}
