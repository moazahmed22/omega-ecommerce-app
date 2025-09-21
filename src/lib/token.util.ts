// utils/getUserToken.ts
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const getUserToken = async () => {
  try {
    const session = await getServerSession(authOptions);
    return session?.token ?? null;
  } catch (error) {
    console.error("Error fetching session:", error);
    return null;
  }
};
