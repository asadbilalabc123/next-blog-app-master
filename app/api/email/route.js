// const { connectDB } = require("@/lib/config/db")
// import EmailModel from "@/lib/models/EmailModel";
// import { NextResponse } from "next/server";

// const loadDB = async ()=>{
//   await  connectDB();
// }

// loadDB();

// export async function POST(request) {
//     const formData = await request.formData();
//     const emailData = {
//         email: `${formData.get('email')}`,

//     }
//     await EmailModel.create(emailData);
//     return NextResponse.json({success:true , msg:"email successfully subscribed!"})
// }

// export async function GET(request ) {
//     const emails = await EmailModel.find({});
//     return NextResponse.json({emails});
    
// } 

// export async function DELETE(request){
//     const id = await request.nextUrl.searchParams.get("id");
//     await EmailModel.findByIdAndDelete(id);
//     return NextResponse.json({success:true , msg:"Email Deleted !"})
// } 




import { connectDB } from "@/lib/config/connectDB";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

// Connect to DB once when module loads
let dbConnected = false;

const ensureDBConnected = async () => {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
};

export async function POST(request) {
  try {
    await ensureDBConnected();
    
    const formData = await request.formData();
    const email = formData.get('email');
    
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingEmail = await EmailModel.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { success: false, error: "Email already subscribed" },
        { status: 400 }
      );
    }
    
    const emailData = {
      email: email,
      date: new Date()
    };
    
    await EmailModel.create(emailData);
    console.log("✅ Email subscribed:", email);
    
    return NextResponse.json({
      success: true, 
      message: "Email successfully subscribed!"
    });
    
  } catch (err) {
    console.error("❌ POST /api/email error:", err.message);
    return NextResponse.json(
      { success: false, error: "Subscription failed", details: err.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await ensureDBConnected();
    
    const emails = await EmailModel.find({}).sort({ date: -1 });
    console.log("✅ GET /api/email - Found", emails.length, "emails");
    
    return NextResponse.json({
      success: true,
      emails: emails
    });
    
  } catch (err) {
    console.error("❌ GET /api/email error:", err.message);
    return NextResponse.json(
      { success: false, error: "Failed to fetch emails", details: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await ensureDBConnected();
    
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Email ID is required" },
        { status: 400 }
      );
    }
    
    const result = await EmailModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { success: false, error: "Email not found" },
        { status: 404 }
      );
    }
    
    console.log("🗑️ Email deleted:", id);
    
    return NextResponse.json({
      success: true,
      message: "Email deleted successfully!"
    });
    
  } catch (err) {
    console.error("❌ DELETE /api/email error:", err.message);
    return NextResponse.json(
      { success: false, error: "Failed to delete email", details: err.message },
      { status: 500 }
    );
  }
}