import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import YahooFinanceData from '../../components/trading/YahooFinance';
import AlphaVantageData from '../../components/trading/AlphaVantageData';
import PolygonData from '../../components/trading/PolygonData';


const SamplePage = () => {
  return (
    <PageContainer title="Trade Page" description="this is a trade page">

        <DashboardCard title="Yahoo">
            <YahooFinanceData/>
      </DashboardCard>

      <DashboardCard title="Alpha Vantage">
            <AlphaVantageData/>
      </DashboardCard> 

      <DashboardCard title="Polygon">
            <PolygonData/>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
