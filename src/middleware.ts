import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {

  const openedRoutes = ['/login', '/signup']
  const curretnPath = req.nextUrl.pathname
  const isProtectedRoute = !(openedRoutes.includes(curretnPath) || curretnPath === "/") 

  if (isProtectedRoute) {
    const token = cookies().get('token')?.value;


    if (!token) {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // const session = await decrypt(token);
    // if (!session?.userId) {
    //   return NextResponse.redirect(new URL('/login', req.nextUrl)) 
    // }
    
    return NextResponse.next()
  }

  else {
    const token = cookies().get('token')?.value;

    if (token) {
        return NextResponse.redirect(new URL('/home', req.nextUrl))
    }
    return NextResponse.next()
  }

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};