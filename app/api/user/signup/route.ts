import { NextResponse } from 'next/server';
import bcrypt from "bcrypt"
import { prisma,supabase } from '../../../../server/db/client';
import { verify } from '../route';


export async function POST(req: Request, res: Response) {
  try {
    let { username, password, email, id_token } = await req.json();
    if (id_token){
      var id = await verify(id_token)
    }
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(password, salt);
    const hashpoverdif = bcrypt.hashSync(id,salt)
    var found = await supabase.auth.signUp({
      email:email,
      password:password,
      options:{
        data:{
          username:username
        }
      }
  })
    const data = await prisma.user.create({
      data: {
        user_id:found.data.user.id,
        email: email,
      }
    })
    return NextResponse.json({ isCreate: true });
  } catch (error: any) {
    console.log(error);
    if (error.code === 'P2002') {
      return NextResponse.json({ isCreate: false }, { status: 404 });
    } else {
      console.error('Error creating user:', error);
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}


