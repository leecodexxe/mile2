'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import '../../styles/globals.css'
import { inputStyle, buttonStyle, lableStyle, textStyle, divStyle } from '../../styles/style'

const PasswordCheck = ({textColor})=>{
    return(
        <div className='bg-white my-1'>
            <p className={textColor.cap? 'text-green-600' : 'text-rose-600'}>
            a capitalized letter
            </p>
            <p className={textColor.num? 'text-green-600' : 'text-rose-600'}>
            a number
            </p>
            <p className={textColor.special? 'text-green-600' : 'text-rose-600'}>
                {'special characters([!@#$%^&*-_+=?~<>])'}
            </p>
            <p className={textColor.length? 'text-green-600' : 'text-rose-600'}>
            at least 8 character long
            </p>
        </div>
    )
}

export default PasswordCheck