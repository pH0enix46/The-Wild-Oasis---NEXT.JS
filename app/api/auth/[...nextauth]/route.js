// // //
// so, the [...nextauth] means, we catch all segment is that all URLs that start with /api/auth, and then slash whatever we want will be handled by this route.js. example: auth/providers or auth/signin. more in note

export { GET, POST } from "@/app/_library/auth/auth";

// example: this URL (http://localhost:3000/api/auth/signin)
