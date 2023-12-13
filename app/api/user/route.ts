import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { prisma } from '../../../server/db/client';
import bcrypt from "bcrypt"
import { OAuth2Client } from 'google-auth-library';

export async function GET(req: Request, res: Response) {
    try {
        const data = await prisma.user.findMany();
        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error retrieving data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: Request, res: Response) {
    try {
        let { username, password, email, id_token } = await req.json()
        if (id_token === undefined && username === undefined && password === undefined && email === undefined) {
            return NextResponse.json({ status: 404 })
        }
        if (id_token) {
            let id = await verify(id_token)
            var foundUser = await prisma.user.findFirst({
                where: {
                    email,
                    token_id: Number(id),
                },
            })
        } else {
            var foundUser = await prisma.user.findFirst({
                where: {
                    email,
                }
            })
        }
        console.log(foundUser)
        if (foundUser) {
            cookies().set('user_id', String(foundUser.user_id));
            cookies().set('username', String(foundUser.username));
            return NextResponse.json({ isLogin: true });
        } else {
            if (id_token) {
                return NextResponse.json({ isLogin: false, canSignUp: true })
            }
            return NextResponse.json({ isLogin: false, work: true });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ isLogin: false, error }, { status: 500 });
    }
}

export async function PUT(req: Request, res: Response) {
    try {
        const { user_id, data } = await req.json()
        cookies().set('username', String(data.username));
        if (data.password) {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(data.password, salt, async function (err, hash) {
                    data.password = hash
                    const dataInput = await prisma.user.update({
                        where: {
                            user_id: user_id,
                        },
                        data
                    })
                });
            });
            return NextResponse.json({ Edit: true })
        }
        else {
            const dataInput = await prisma.user.update({
                where: {
                    user_id: user_id,
                },
                data: {
                    username: data.username,
                    email: data.email
                }
            })
            return NextResponse.json({ Edit: true })
        }
    } catch (error) {
        return NextResponse.json({ Edit: false }, { status: 500 })
    }
}

export async function DELETE(req: Request, res: Response) {
    try {
        cookies().delete("user_id");
        cookies().delete("username");
        return NextResponse.json({ isSignOut: true });
    } catch (error) {

    }
}


export async function verify(token: string) {
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
        idToken: token,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    return userid
}