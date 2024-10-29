import React from 'react';
import { Paper, Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Wallet from '../dashboard/components/wallet';
import RecentTransactions from '../dashboard/components/RecentTransactions';
import QRCodeDisplay from '../dashboard/components/QrCodeDisplay';
import Withdraw from '../dashboard/components/Withdraw';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Shadow = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
           <Grid item xs={12} lg={8}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Wallet />
              </Grid>
              <Grid item xs={12}>
                <Withdraw />
              </Grid>
              <Grid item xs={12}>
              <QRCodeDisplay />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Shadow;
