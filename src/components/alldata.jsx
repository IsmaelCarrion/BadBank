import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/mycontext.jsx';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Carda from './carta.jsx';
import Table from 'react-bootstrap/Table';



const Alldata = () => {

    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);
    const data = ctx.users

    return (

        <Container className ='d-flex justify-content-center align-items-center'>
            <Carda
                bgcolor="primary"
                header="All Data"
                status={status}
                body={
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email </th>
                                <th scope="col">Password</th>
                                <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row,index) => (
                                <tr id={index}>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.password}</td>
                                    <td>{row.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            />
        </Container>
    );
}


export default Alldata;