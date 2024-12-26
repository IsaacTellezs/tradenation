import React from 'react';
import { useState } from 'react';
import PageContainer from '../../../components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';


const initialTransactions = [
  { id: '9A4D52A5', type: 'Deposit', paymentMethod: 'SCOTIABANK', date: '10/12/2024', amount: '$100', status: 'Revisión' },
  { id: '426F87F3', type: 'Deposit', paymentMethod: 'SCOTIABANK', date: '10/12/2024', amount: '$100', status: 'Revisión' },
  { id: 'F5DB309B', type: 'Deposit', paymentMethod: 'BBVA', date: '10/12/2024', amount: '$100', status: 'Revisión' },
  { id: '57FEBD73', type: 'Deposit', paymentMethod: 'BBVA', date: '10/12/2024', amount: '$100', status: 'Revisión' },
  { id: '12A402C6', type: 'Deposit', paymentMethod: 'Credomatic', date: '03/12/2024', amount: '$1000', status: 'Revisión' },
  
];

const TransaccionsPage = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleStatusToggle = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id
          ? {
              ...transaction,
              status: transaction.status === 'Revisión' ? 'Aceptada' : 'Revisión',
            }
          : transaction
      )
    );
  };

  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Transacciones">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.paymentMethod}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={transaction.status === 'Revisión' ? 'warning' : 'success'}
                      onClick={() => handleStatusToggle(transaction.id)}
                    >
                      {transaction.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default TransaccionsPage;