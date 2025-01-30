import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Credentials",
            authorize: async (credentials) => {
                // Add logic here to look up the user from the credentials supplied
                if (credentials.username === "admin" && credentials.password === "password") {
                    return Promise.resolve({ id: 1, name: "Admin", email: ""});
                }
                return new Error("Invalid credentials");
            },
        }),
    ],
});