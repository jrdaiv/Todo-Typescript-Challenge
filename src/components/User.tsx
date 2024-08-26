import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const User: React.FC = () => {
    const [user, setUser] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert(`Welcome ${user}`)
        setUser('')
        localStorage.setItem('user', user)
        console.log(localStorage.getItem('user'))
        navigate('/todo')
        console.log(user)
    }


  return (



    <div>
        <Container>
            <h1>Enter Name</h1>
            <input type='text' value={user} className='form-control' placeholder='ex: Ava or Jim' onChange={(e) => setUser(e.target.value)} />
            <Button variant='success' onClick={handleSubmit}>Enter</Button>
        </Container>
        


    </div>



  )



}

export default User