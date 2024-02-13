import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Carda from './carta.jsx';
import { useContext } from 'react';
import { UserContext } from '../contexts/mycontext.jsx';

const Deposit = () => {

    const [balance, setBalance] = React.useState(0);
    const [deposit, setDeposit] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const ctx = useContext(UserContext);

    let length = ctx.users.length;
    

    const validateDeposit = (field) => {

        if (!field) {
            setStatus('Error: You must input an amount');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        
        if (Number(field) <= 0) {
            setStatus('Error: the amount must be greater than 0');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        if (isNaN(field)) {
            setStatus('Error: the amount must be a number');
            setTimeout(() => setStatus(''), 3000);
            setDeposit('');
            return false;
        }

        setButtonDisabled(false);
        return true;
    }


    const handle_validations = (e) => {
        setButtonDisabled(false);
        setDeposit(e.target.value);
    }

    const handleDeposit = () => {
        if (!validateDeposit(deposit)) return;
        
        
        let tempBalance = Number(ctx.users[length-1].balance);
        ctx.users[length-1].balance =  tempBalance + Number(deposit);
        setBalance(tempBalance + Number(deposit));
        setDeposit('');
        setStatus('Success: Deposit made!');
        setButtonDisabled(true);
        setTimeout(() => setStatus(''), 3000);
    }

    return (

        <Container className ='d-flex justify-content-center align-items-center' >
            <Carda
                bgcolor="primary"
                header="Make Deposit for: The last USER in preloaded data" 
                status={status} 
                body={
                    <>
                        Balance: {ctx.users[length-1].balance}<br/><br/>
                        Deposit Amount: <br/><br/>
                        <input type="input" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => handle_validations(e)} /><br />
                        <button type="submit" disabled = {buttonDisabled} className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                    </>
                }
            />
        </Container>
    )
}

export default Deposit;