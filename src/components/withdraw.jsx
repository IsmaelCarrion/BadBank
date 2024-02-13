import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/mycontext.jsx';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Carda from './carta.jsx';

const Withdraw = () => {    
    const [withdraw, setWithdraw] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const ctx = useContext(UserContext);

    let length = ctx.users.length;

    const validateWithdraw = (field) => {
        

        if (!field) {
            setStatus('Error: You must input an amount');
            setButtonDisabled(true);
            setWithdraw('');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        
        if (Number(field) <= 0) {
            setStatus('Error: the amount must be greater than 0');
            setButtonDisabled(true);
            setWithdraw('');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        if (isNaN(field)) {
            setStatus('Error: the amount must be a number');
            setButtonDisabled(true);
            setTimeout(() => setStatus(''), 3000);
            setWithdraw('');
            return false;
        }

        setButtonDisabled(false);
        return true;

    }

    const handle_validations = (e) => {
        setButtonDisabled(false);
        setWithdraw(e.currentTarget.value);
    }

    const handleWithdraw = () => {
        if (!validateWithdraw(withdraw)) return;
        let tempBalance = Number(ctx.users[length-1].balance);
        if (tempBalance < Number(withdraw)) {
            setStatus('Error: Withdraw amount is greater than balance!');
            setWithdraw('');
            setButtonDisabled(true);
            setTimeout(() => setStatus(''), 3000);
            return;
        }
        ctx.users[length-1].balance =  tempBalance - Number(withdraw);
        setBalance(tempBalance - Number(withdraw));
        setWithdraw('');
        setStatus('Success: Withdraw made!');
        setButtonDisabled(true);
        setTimeout(() => setStatus(''), 3000);
    }

    return (
        
        <Container className ='d-flex justify-content-center align-items-center' >
            <Carda
                bgcolor="primary"
                header="Account Withdrawal for: The last USER in preloaded data"
                status={status}
                body={
                    <>
                        Balance: {ctx.users[length-1].balance}<br/><br/>
                        Withdraw Amount <br/><br/>
                        <input type="input" className="form-control" id="withdraw" placeholder="Enter withdraw amount" value={withdraw} onChange={e => handle_validations(e)} /><br />
                        <button type="submit" disabled = {buttonDisabled} className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                    </>
                }
            />
        </Container>
    )
}

export default Withdraw;