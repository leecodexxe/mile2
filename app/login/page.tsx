'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Page(){
    const { push } = useRouter()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [islogin,setIsLoggedIn] = useState(true)
    const datapass = () => {
        const fetchresdata = async () => {
            const result = await fetch('api/user', {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ username:username, pw:password })
            })
            const data = await result.json()
            console.log(data)
            if(data.isLogin) {
                push(`/games`)
            }else{
                setIsLoggedIn(false)
            }
        }
        fetchresdata()
    }
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                datapass()
            }}>
            <div>
                <label >User name</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label >Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit'>Log in</button>
            </form>
            <button onClick={()=>push('/signup')}>Sign Up</button>
            {islogin ? '' : 'dont find match user. Do you want to try again or sign up?'}
        </div>
    )
    }
