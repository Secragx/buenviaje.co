import React, {useState} from 'react'
import Navegador from '../components/Navegador'
import '../styles/loginStyle.css'

export default function Login() {

    const [form, setForm] = useState({})
    const inputs = (e) => {
        setForm({
            ...form, // propagation
            [e.target.name]: e.target.value
        })
    }

    const check = (e) => {
        setForm({
            ...form, // propagation
            [e.target.name]: e.target.checked
        })
    }

    return (
        <>
        <div id="login-custom"  className="d-flex justify-content-center align-items-center min-vh-100 w-100 bg-light ">
            <div className="card p-4 shadow" style={{ width: '350px' }}>
                <h3 className="text-center">Iniciar Sesión</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    name='email'
                    onChange={inputs}
                    value={form.email}
                    />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" 
                    className="form-check-input" 
                    id="exampleCheck1"
                    onChange={check}
                    name='condition'
                    />
                        <label className="form-check-label" htmlFor="exampleCheck1">Recordar usuario</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque natus assumenda at nulla libero est quod ipsum et distinctio. Adipisci cum nesciunt asperiores quia eius quam, libero velit distinctio. Ipsam?
        </>
    )
}