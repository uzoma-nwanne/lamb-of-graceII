import { NextRequest, NextResponse } from "next/server"

export  async function  POST(request: NextRequest){
   try{
    return NextResponse.json({ message: "Message sent" });
   }catch(error){
    return NextResponse.json({error});
   }
}

export  async function  GET(request: NextRequest){
    try{
     return NextResponse.json({ message: "Message sent" });
    }catch(error){
     return NextResponse.json({error});
    }
 }