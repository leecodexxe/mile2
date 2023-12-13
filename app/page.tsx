'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import '../styles/globals.css'
import { buttonStyle, inputStyle } from '../styles/style'

export default function Login() {
  const { data: session } = useSession()
  const { push } = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const datapass = () => {
    const fetchresdata = async () => {
      const result = await fetch('api/user', {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          username: username,
          password: password,
          email: session ? session.user.email : '',
          id_token: session ? session.id_token : ''
        })
      })
      const data = await result.json()
      console.log(data)
      if (data.isLogin === false && data.canSignUp) {
        push(`/signup`)
      }
      else if (data.isLogin) {
        push(`/games`)
      }
      else {
        signOut()
      }
    }
    fetchresdata()
  }
  if (session && session.user) {
    datapass()
  }

  return (
    <main className='flex flex-col items-center justify-between'>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-blue-700">
              Slot Tracker App
            </h1>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                datapass()
              }}>
              <div>
                <label htmlFor="userName"
                  className="block text-sm font-medium leading-6 text-gray-200 text-center">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    onChange={(e) => setUsername(e.target.value)}
                    className={inputStyle}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center">
                  <label htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-200">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputStyle}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={buttonStyle}
                >
                  Sign in
                </button>
              </div>
            </form>
            <div
              className='flex w-full justify-center mt-5'>
              <button
                onClick={() => signIn("google")}>
                <img
                  className='w-12 px-2'
                  src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt="" />
              </button>
              <button
                onClick={() => signIn("github")}>
                <img
                  className='w-12 px-2'
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />

              </button>
            </div>
            <p
              className="mt-10 text-center text-sm text-gray-200">
              Not a member?{' '}
              <a href="/signup"
                className="font-semibold leading-6  text-red-600 hover:text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}