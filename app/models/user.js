import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    AgentName: String,
    AgentPhoneNumber: String,
    DateofLeadCreated: String,
    LeadSource: String,
    BuyerFullName: String,
    PhoneNumber: String,
    EmailId: String,
    DateofBirth: String,
    PassportNumber: String,
    PassportExpiry: String,
    Nationality: String,
    UAEResident: String,
    TotalCommissionVAT: String,
    NetTotalComission: String,
    EOIReciept: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;