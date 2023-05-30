import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  
providers: [
GithubProvider({
  // clientId: process.env.GITHUB_ID,
  // clientSecret: process.env.GITHUB_SECRET,
  clientId: "dfbe105d4ef7647aa2e1",
  clientSecret: "b6b124c860b8e4df3c81850f4101d06b15a287fa",
  scope: "read:user read:org",

    })],

  callbacks: {
    async jwt({ token, account,profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id=profile.id
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    }
  },

  pages: {
    // // signIn: '/auth/login',
    // // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }

})
