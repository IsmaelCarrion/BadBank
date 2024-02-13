
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/mycontext.jsx';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Carda from './carta.jsx';

const CreateAccount = () => {

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');   
    const [password, setPassword] = React.useState('');
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const ctx = useContext(UserContext);

    const ClickForm = () => {
        setShow(true);
        setName('');
        setEmail('');
        setPassword('');
    }


    const validate_name = (field, label) => {
        if (!field) {
            setStatus('Error: must input a name');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        return true;
    }

    const validate_email = (field, label) => {
        if (!field) {
            setStatus('Error: must input an email ');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        
        return true;
    }

    const validate_password = (field, label) => {
        if (!field) {
            setStatus('Error: must input a password' );
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (field.length < 8) {
            setStatus('Error: password must be at least 8 characters long');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
                
        return true;
    }

    const handleCreate = () => {
        console.log(name,email,password);
        if (!validate_name(name, 'name')) return;
        if (!validate_email(email, 'email')) return;
        if (!validate_password(password, 'password')) return;

        ctx.users.push({name,email,password,balance:0});
        setShow(false);
        setButtonDisabled(true);
    }

    const handle_name = (e) => {
        setButtonDisabled(false);
        setName(e.currentTarget.value);
    }

    const handle_email = (e) => {
        setButtonDisabled(false);
        setEmail(e.currentTarget.value);
    }

    const handle_password = (e) => {
        setButtonDisabled(false);
        setPassword(e.currentTarget.value);
    }

    return (
        <Container className ='d-flex justify-content-center align-items-center' >
            <Carda
                bgcolor="primary"
                header="Create Account"
                status={status}
                body={show ? 
                    (
                        <>
                            
                            Name:<br/> 
                            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => handle_name(e)} /><br/>                        

                            Email address:<br/>
                            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => handle_email(e)} /><br/>

                            Password:<br/>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => handle_password(e)} /><br/>

                            <button type="submit" disabled = {buttonDisabled}  className="btn btn-light" onClick={handleCreate}>Create Account</button>
                        </>

                    ): 
                    (
                        <>
                            <h5>Successful !</h5>
                            <br/>
                            <button type="submit" disable = {buttonDisabled} className="btn btn-light" onClick={ClickForm}>Add another account</button>
                        </>

                    )
                }
            />
        </Container>

    )
    
}


export default CreateAccount;

