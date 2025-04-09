// // //
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "../database/data-service";

// all note, form next auth
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; // !! its convert boolean,, note for !! note how it work?
    },

    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name }); // why await note

        return true; // note why
      } catch (error) {
        return false; // notw why
      }
    },

    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

// note why we return this
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

// 🍪 How auth() uses cookies in Next.js:
// 	1.	When a user logs in, NextAuth sets a cookie in the browser (like next-auth.session-token).
// 	2.	This cookie is sent automatically with every request to the server.
// 	3.	When auth() runs on the server, it reads that cookie to check if the user is logged in.
// 	4.	If the cookie is valid, auth() returns the session info (like user name, email, image).
// more note
