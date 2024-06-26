import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
  const { userId } = auth()
  const searchParams = { clerkId: userId }
  try {

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 })
    }

    await connectToDB()

    let user = await User.findOne(searchParams)

    // When the user sign-in for the 1st, immediately we will create a new user for them
    if (!user) {
      user = await User.create(searchParams)
      await user.save()
    }

    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    console.log("[users_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
// import User from "@/lib/models/User";
// import { connectToDB } from "@/lib/mongoDB";
// import { auth } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req: NextRequest) => {
//   try {
//     const { userId } = auth();
    
//     if (!userId) {
//       // return new NextResponse("unauthorized", {status: 401})
//       return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
//         status: 401,
//       });
//     }
//     await connectToDB();

//     let user = await User.findOne({ clerkId: userId });
    
//     if (!user) {
//       user = await User.create({ clerkId: userId });
//       await user.save();
//       return NextResponse.json(user, { status: 200 });
//     }
//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     console.log("User_GET", error);
//     return new NextResponse("Internal server error", { status: 500 });
//   }
// };
