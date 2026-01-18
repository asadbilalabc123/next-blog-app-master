// import {connectDB} from "@/lib/config/db";
// import BlogModel from "@/lib/models/BlogModel";
// import { error } from "console";
// import {writeFile} from "fs/promises"
// const { NextResponse } = require("next/server");
// const fs = require('fs')
// const loadDB = async ()=>{
//     await connectDB();

// }

// loadDB();

// //api endpoint to get all blogs
// export async function GET(request) {
// const blogId = request.nextUrl.searchParams.get("id")
// if (blogId) {
//   const blog = await BlogModel.findById(blogId);
//   return NextResponse.json((blog));
// fs.unlink(`./public${blog.image}` , ()=>{

// })
// await BlogModel.findByIdAndDelete(id);
// return NextResponse.json({msg:"blog deleted !"})
  
// } else {
  
//   const blogs = await BlogModel.find({});

//     console.log('Blog GET hit');
//     return NextResponse.json({blogs})
// }


// }

// // export async function POST(request) {
// //     const formData = await request.formData();
// //     const timestamp = Date.now();
// //     const image = formData.get('image');
// //     const imageByteData = await image.arrayBuffer();
// //     const buffer = Buffer.from(imageByteData);
// //     const path = `./public/${timestamp}_${image.name}`
// // await writeFile(path,buffer);
// // const imgUrl = `/${timestamp}_${image.name}`
// // console.log(imgUrl);
// // return NextResponse.json({imgUrl})
// // }

// //api endpoint to delete blogs
// export async function DELETE(request) {
//   const id = await request.nextUrl.searchParams.get('id');
//   const blog = await BlogModel.findById(id);

// }

// //api endpoint for uploading blogs
// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const image = formData.get("image");

//     if (!image || typeof image === "string") {
//       return NextResponse.json(
//         { error: "No image uploaded" },
//         { status: 400 }
//       );
//     }

//     const timestamp = Date.now();
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);
//     const path = `./public/${timestamp}_${image.name}`;

//     await writeFile(path, buffer);

//     const imgUrl = `/${timestamp}_${image.name}`;
//     // const blogData = {
//     //     title : `${formData.get('title')}`,
//     //     description : `${formData.get('description')}`,
//     //     category : `${formData.get('category')}`,
//     //     author : `${formData.get('author')}`,
//     //     image:`${imgUrl}`,
//     //     authorImg:`${formData.get('authorImg')}`
//     // }
//         // Build blog data
 
//       const blogData = {
//       title: formData.get("title") || "",
//       description: formData.get("description") || "",
//       category: formData.get("category") || "",
//       author: formData.get("author") || "",
//       image: imgUrl,
//       authImg: formData.get("authImg") || formData.get("authImg") || ""
//     };

//     await BlogModel.create(blogData);
//     console.log("blog saved");
//     return NextResponse.json({ success: true, msg: "blog added" });

//   } catch (err) {
//     // Yeh important hai
//     console.error("Upload failed:", err.message);
//     console.error(err.stack);

//     return NextResponse.json(
//       { error: "Upload failed", details: err.message },
//       { status: 500 }
//     );
//   }
// }





















//this is workable 
// import { connectDB } from "@/lib/config/db";
// import BlogModel from "@/lib/models/BlogModel";
// import { writeFile } from "fs/promises";
// import fs from "fs";
// import { NextResponse } from "next/server";

// // connect to DB
// const loadDB = async () => {
//   await connectDB();
// };
// loadDB();

// // ========== GET all blogs or a single blog ==========
// export async function GET(request) {
//   try {
//     const blogId = request.nextUrl.searchParams.get("id");

//     if (blogId) {
//       const blog = await BlogModel.findById(blogId);
//       if (!blog) {
//         return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//       }
//       return NextResponse.json(blog);
//     } else {
//       const blogs = await BlogModel.find({});
//       console.log("Blog GET hit");
//       return NextResponse.json({ blogs });
//     }
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to fetch blogs", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // ========== DELETE a blog ==========
// export async function DELETE(request) {
//   try {
//     const id = request.nextUrl.searchParams.get("id");
//     if (!id) {
//       return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
//     }

//     const blog = await BlogModel.findById(id);
//     if (!blog) {
//       return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//     }

//     // remove image file if exists
//     if (blog.image) {
//       fs.unlink(`./public${blog.image}`, (err) => {
//         if (err) console.warn("Failed to delete image file:", err.message);
//       });
//     }

//     await BlogModel.findByIdAndDelete(id);
//     return NextResponse.json({ msg: "Blog deleted!" });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to delete blog", details: err.message },
//       { status: 500 }
//     );
//   }
// }

// // ========== POST a new blog ==========
// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const image = formData.get("image");

//     if (!image || typeof image === "string") {
//       return NextResponse.json(
//         { error: "No image uploaded" },
//         { status: 400 }
//       );
//     }

//     const timestamp = Date.now();
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);
//     const path = `./public/${timestamp}_${image.name}`;
//     await writeFile(path, buffer);

//     const imgUrl = `/${timestamp}_${image.name}`;

//     // build blog data
//     const blogData = {
//       title: formData.get("title") || "",
//       description: formData.get("description") || "",
//       category: formData.get("category") || "",
//       author: formData.get("author") || "",
//       image: imgUrl,
//       authImg: formData.get("authImg") || "",
//     };

//     await BlogModel.create(blogData);
//     console.log("Blog saved");
//     return NextResponse.json({ success: true, msg: "Blog added" });
//   } catch (err) {
//     console.error("Upload failed:", err.message);
//     return NextResponse.json(
//       { error: "Upload failed", details: err.message },
//       { status: 500 }
//     );
//   }
// }





















import { connectDB } from "@/lib/config/connectDB";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import fs from "fs";
import { NextResponse } from "next/server";

// Connect to DB once when module loads
let dbConnected = false;

const ensureDBConnected = async () => {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
};

// ========== GET all blogs or a single blog ==========
export async function GET(request) {
  try {
    await ensureDBConnected();
    
    const blogId = request.nextUrl.searchParams.get("id");

    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      console.log("✅ Blog GET successful - Found", blogs.length, "blogs");
      return NextResponse.json({ blogs });
    }
  } catch (err) {
    console.error("❌ GET /api/blog error:", err.message);
    return NextResponse.json(
      { error: "Failed to fetch blogs", details: err.message },
      { status: 500 }
    );
  }
}

// ========== POST a new blog ==========
export async function POST(request) {
  console.log("📨 POST /api/blog received");
  
  try {
    await ensureDBConnected();
    
    const formData = await request.formData();
    const image = formData.get("image");

    // Handle image upload
    let imgUrl = "/Assets/default-blog.jpg"; // Default image
    if (image && typeof image !== "string") {
      const timestamp = Date.now();
      const imageByteData = await image.arrayBuffer();
      const buffer = Buffer.from(imageByteData);
      const path = `./public/uploads/${timestamp}_${image.name}`;
      
      // Ensure uploads directory exists
      if (!fs.existsSync('./public/uploads')) {
        fs.mkdirSync('./public/uploads', { recursive: true });
      }
      
      await writeFile(path, buffer);
      imgUrl = `/uploads/${timestamp}_${image.name}`;
      console.log("📸 Image saved to:", imgUrl);
    }

    // Build blog data
    const blogData = {
      title: formData.get("title") || "Untitled",
      description: formData.get("description") || "",
      category: formData.get("category") || "General",
      author: formData.get("author") || "Admin",
      image: imgUrl,
      authImg: formData.get("authImg") || "/Assets/author_img.png",
    };

    console.log("📝 Creating blog with data:", blogData);
    
    const newBlog = await BlogModel.create(blogData);
    console.log("✅ Blog saved with ID:", newBlog._id);
    
    return NextResponse.json({ 
      success: true, 
      message: "Blog added successfully",
      blog: newBlog 
    }, { status: 201 });
    
  } catch (err) {
    console.error("❌ POST /api/blog error:", err.message);
    console.error("Error stack:", err.stack);
    
    return NextResponse.json(
      { 
        error: "Upload failed", 
        details: err.message,
        suggestion: "Check MongoDB connection and form data"
      },
      { status: 500 }
    );
  }
}

// ========== DELETE a blog ==========
export async function DELETE(request) {
  try {
    await ensureDBConnected();
    
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Remove image file if exists
    if (blog.image && blog.image.startsWith('/uploads/')) {
      const imagePath = `./public${blog.image}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log("🗑️ Deleted image:", imagePath);
      }
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Blog deleted!" });
    
  } catch (err) {
    console.error("❌ DELETE /api/blog error:", err.message);
    return NextResponse.json(
      { error: "Failed to delete blog", details: err.message },
      { status: 500 }
    );
  }
}