import connectMongoDB from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { AgentName,
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
    EOIReciept, } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { AgentName,
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
    EOIReciept, });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}


