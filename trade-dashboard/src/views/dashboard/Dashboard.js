import React from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";

// components
import Wallet from "./components/Wallet";
import Welcome from "./components/Welcome";
import Transactions from "./components/Transations";
import Data from "./components/Data";
import Withdraw from "./components/Withdraw";
import Profile from "./components/Profile";
import WebTrader from "./components/WebTrader";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Welcome />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Data />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <WebTrader />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Transactions />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Wallet />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Withdraw />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Profile />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
