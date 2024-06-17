import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    AgentName,
    AgentPhoneNumber,
    DateofLeadCreated,
    LeadSource,
    BuyerFullName,
    PhoneNumber,
    EmailId,
    DateofBirth,
    PassportNumber,
    PassportExpiry,
    Nationality,
    UAEResident,
    TotalCommissionVAT,
    NetTotalComission,
    EOIReciept,
  } = await request.json();

  await connectMongoDB();
  
  const newUser = await User.create({ AgentName,
    AgentPhoneNumber,
    DateofLeadCreated,
    LeadSource,
    BuyerFullName,
    PhoneNumber,
    EmailId,
    DateofBirth,
    PassportNumber,
    PassportExpiry,
    Nationality,
    UAEResident,
    TotalCommissionVAT,
    NetTotalComission,
    EOIReciept,
  });
  return NextResponse.json({ message: "User Created", newUser }, { status: 201 });
}



// export async function POST(request) {
//   try {
//     const {  name, email, address, phone,gmail } = await request.json();
//     console.log( name, email, address, phone, gmail );
//     await connectMongoDB();
//     const result = await Employee.create({ name, email, address, phone, gmail});

//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message },
//       {
//         status: 500,
//       }
//     );
//   }
// }
  // console.log(request.json())
//   const { title, description, agentName } = await request.json();
//   console.log(title)
//   await connectMongoDB();
//   const newUser = await User.create({ title, description, agentName });
//   return NextResponse.json({ message: "Topic Created", newUser }, { status: 201 });
// }

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
