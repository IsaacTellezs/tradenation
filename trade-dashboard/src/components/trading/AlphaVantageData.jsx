import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Select, MenuItem, Box, CircularProgress } from '@mui/material';
import Chart from 'react-apexcharts';

const AlphaVantageData = () => {
    const [symbol, setSymbol] = useState('EUR/USD'); // Default pair for Forex
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [assetType, setAssetType] = useState('forex'); // Default to Forex

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let response;
                if (assetType === 'forex') {
                    // Fetch Forex data
                    const fromCurrency = symbol.split('/')[0];
                    const toCurrency = symbol.split('/')[1];

                    response = await axios.get('https://www.alphavantage.co/query', {
                        params: {
                            function: 'CURRENCY_EXCHANGE_RATE',
                            from_currency: fromCurrency,
                            to_currency: toCurrency,
                            apikey: 'YP1RQJJ68D5QIQAY', // Your API key
                        },
                    });

                    console.log('Forex Response:', response.data); // Check the response structure

                    const exchangeRate = response.data['Realtime Currency Exchange Rate'];
                    if (exchangeRate) {
                        setData([parseFloat(exchangeRate['5. Exchange Rate'])]);
                        setDates([new Date().toISOString().split('T')[0]]);
                    } else {
                        console.error("No exchange rate data found.");
                        setData([]);
                        setDates([]);
                    }
                } else if (assetType === 'crypto') {
                    // Fetch Cryptocurrency data
                    response = await axios.get('https://www.alphavantage.co/query', {
                        params: {
                            function: 'CRYPTO_INTRADAY',
                            symbol: symbol,
                            market: 'USD',
                            interval: '5min',
                            apikey: 'YP1RQJJ68D5QIQAY', // Your API key
                        },
                    });

                    console.log('Crypto Response:', response.data); // Check the response structure

                    const timeSeries = response.data['Time Series (Digital Currency Intraday)'];
                    const filteredData = Object.entries(timeSeries)
                        .map(([date, values]) => ({
                            date,
                            close: parseFloat(values['1a. price (USD)']),
                        }));

                    setData(filteredData.map(item => item.close));
                    setDates(filteredData.map(item => item.date));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [symbol, assetType]);

    const handleSymbolChange = (event) => setSymbol(event.target.value);
    const handleAssetTypeChange = (event) => setAssetType(event.target.value);

    const chartOptions = {
        chart: {
            type: 'line',
            height: 350,
            zoom: { enabled: false },
        },
        colors: ['#3f51b5'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        xaxis: { categories: dates, title: { text: 'Fecha' } },
        yaxis: { title: { text: assetType === 'forex' ? 'Tipo de Cambio (USD)' : 'Precio (USD)' } },
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Card style={{ maxWidth: 700, width: '100%', marginTop: '20px' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Datos de Alpha Vantage</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Select value={assetType} onChange={handleAssetTypeChange}>
                            <MenuItem value="forex">Forex</MenuItem>
                            <MenuItem value="crypto">Criptomonedas</MenuItem>
                        </Select>
                        {assetType === 'forex' && (
                            <Select value={symbol} onChange={handleSymbolChange}>
                                <MenuItem value="EUR/USD">EUR/USD</MenuItem>
                                <MenuItem value="GBP/USD">GBP/USD</MenuItem>
                                <MenuItem value="USD/JPY">USD/JPY</MenuItem>
                            </Select>
                        )}
                        {assetType === 'crypto' && (
                            <Select value={symbol} onChange={handleSymbolChange}>
                                <MenuItem value="BTC/USD">Bitcoin (BTC/USD)</MenuItem>
                                <MenuItem value="ETH/USD">Ethereum (ETH/USD)</MenuItem>
                                <MenuItem value="LTC/USD">Litecoin (LTC/USD)</MenuItem>
                            </Select>
                        )}
                    </Box>
                    {loading ? (
                        <Box display="flex" justifyContent="center">
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            {data.length ? (
                                <Chart
                                    options={chartOptions}
                                    series={[{ name: 'Precio', data }]}
                                    type="line"
                                    height={350}
                                />
                            ) : (
                                <Typography align="center" color="textSecondary">No hay datos disponibles.</Typography>
                            )}
                        </>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default AlphaVantageData;
