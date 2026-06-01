//route.ts for implementing request handlers. We usually use server actions for our own app, just for outside services to access our application. Like an express server.

//this is what own setup would look like, we're using the exported functions from the auth.ts setup.
//export async function GET() {}
//export async function POST() {}

//both import and export in same statement.
export { GET, POST } from '@/helpers/auth';
