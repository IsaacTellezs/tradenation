import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import TransactionsTable from './Tables/TransaccionsTable';


const TransaccionsPage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <TransactionsTable></TransactionsTable>
    </PageContainer>
  );
};

export default TransaccionsPage;