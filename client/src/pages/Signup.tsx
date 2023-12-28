import { useRef } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

function Signup() {
    const usernameref = useRef<HTMLInputElement>(null)
    const nameref = useRef<HTMLInputElement>(null)
    const imageUrlref = useRef<HTMLInputElement>(null)
  return (
    <>
     <h1>Sign Up</h1>
     <form action="">
        <label htmlFor="username">Username</label>
        <Input id='username' pattern='\S*' required ref={usernameref} />
        <label htmlFor="name">name</label>
        <Input id='name' required ref={nameref} />
        <label htmlFor="imageUrl">imageUrl</label>
        <Input id='imageUrl' type='url' required ref={imageUrlref} />
        <Button className='col-span-full' type='submit'>Sign Up</Button>
     </form>
    
    </>
    )
}

export default Signup