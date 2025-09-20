import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export const getUserToken = async () => {
  try {
    const encodedToken = (await cookies()).get(
      "next-auth.session-token"
    )?.value;
    const decodedToken = await decode({
      token: encodedToken,
      secret: process.env.AUTH_SECRET!,
    });
    const token = decodedToken?.token;
    return token;
  } catch (error) {
    console.log(error);
  }
};
