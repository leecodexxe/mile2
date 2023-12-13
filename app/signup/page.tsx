'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import '../../styles/globals.css'
import { inputStyle, buttonStyle, lableStyle, textStyle, divStyle } from '../../styles/style'
import PasswordCheck from './passwordCheck'


export default function Page() {
    const { data: session } = useSession()
    const { push } = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passClicks, setPassClicks] = useState(false)
    const [textColor,setTextColor] = useState({
        cap:false,
        num:false,
        special:false,
        length:false,
    })
    //fetch data from api route
    const datapass = () => {
        const fetchresdata = async () => {
            const result = await fetch('api/user/signup', {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: session ? session.user.email : email,
                    id_token: session ? session.id_token : ''
                })
            })
            const data = await result.json()
            if (data.isCreate) {
                push(`/`)
            } else {
                alert('The username is already being used please try a different one')
            }
        }
        fetchresdata()
    }
    //check if user login at SSO
    useEffect(() => {
        if (session && session.user) {
            setUsername(session.user.name.split(' ').join(''))
            setEmail(session.user.email)
        }
    }, [])
    return (
        <div className={divStyle}>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center text-white">
                <form className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault()
                        //check if user use special characters in the range
                        if (username !== '' && password !== '') {
                            const regex = new RegExp('[,./"_{}|;]')
                            const passwordRule = regex.test(password)
                            console.log(passwordRule)
                            if(!passwordRule && textColor.cap && textColor.num && textColor.length && textColor.special){
                                datapass()
                            }else{
                                alert('Please enter a capitalized letter a number and special characters(!@#$%^&*?~<>)')
                            }
                        }
                        else {
                            alert('Please Enter username or password')
                        }
                    }}>
                    <h2 className={textStyle}>
                        Create Your Account
                    </h2>
                    <div>
                        <label className={lableStyle}>Username</label>
                        <input
                            className={inputStyle}
                            type="text"
                            defaultValue={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label className={lableStyle}>Password</label>
                        <input
                            className={inputStyle}
                            type="password"
                            onChange={
                                (e) => {
                                    setPassClicks(true)
                                    setTextColor(checkPasswordrequired(e.target.value))
                                    setPassword(e.target.value)
                                }}
                                required />
                                {passClicks? <PasswordCheck textColor={textColor}/>: null}
                    </div>
                    <div>
                        <label className={lableStyle}>Email</label>
                        <input
                            className={inputStyle}
                            type="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <button
                        className={buttonStyle}
                        type='submit'>Sign Up</button>
                    <button type="button"
                        className={buttonStyle}
                        onClick={() => {
                            signOut({ callbackUrl: '/' })
                        }}>Login page</button>
                </form>
            </div>
        </div>
    )
}

function checkPasswordrequired(value) {
    const isTrue = {
        cap:false,
        num:false,
        special:false,
        length:false,
    }
    const regexCap = /[A-Z]/
    const regexNum = /[0-9]/
    const regexSpecial = /[!@#$%^&*-+=?~<>]/
    //capitalized 
    if(regexCap.test(value)){
        isTrue.cap = true
    }else{
            isTrue.cap = false
    }
    //Number
    if(regexNum.test(value)){
        isTrue.num = true
    }
    else{
        isTrue.num = false
    }
    //special characters
    console.log(regexSpecial.test(value))
    if(regexSpecial.test(value)){
        isTrue.special = true
    }
    else{
        isTrue.special = false
    }
    //at least 8 character long
    if(value.length >= 8){
        isTrue.length = true
    }else{
        isTrue.length = false
    }
    console.log(isTrue)
    return isTrue
}