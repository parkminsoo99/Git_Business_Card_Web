import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // cookies: {
  //   sessionToken: {
  //     name: "next-auth.session-token",
  //     options: {
  //       domain: ".localhost",
  //       path: "/",
  //       httpOnly: true,
  //       sameSite: "lax",
  //       secure: false
  //     }
  //   }
  // },

providers: [
GithubProvider({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET
    })],
  
  // pages: {
  //   signIn: "/signin"
  //   },
  // callbacks: {
  //   signIn(user, account, profile) {
  //     user.name = slug(user.email.slice(0, user.email.indexOf('@'))) // or whatever else
  //     console.log(user.name);
  //     return true
  //   },
  // },
})
