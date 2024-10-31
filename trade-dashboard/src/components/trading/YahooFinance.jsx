import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Select, MenuItem, Box } from '@mui/material';
import Chart from 'react-apexcharts';

const YahooFinanceData = () => {
    const [ticker, setTicker] = useState('AMRN');
    const [year, setYear] = useState(new Date().getFullYear()); // Año actual por defecto
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
                    {
                        params: { symbol: ticker, region: 'US' },
                        headers: {
                            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
                            'x-rapidapi-key': '7075c678d8mshf97ee8c5f43d4cdp1082b0jsnb6d2ae860bf5',
                        },
                    }
                );

                // Filtrar datos por el año seleccionado
                const filteredData = response.data.prices
                    .filter(item => new Date(item.date * 1000).getFullYear() === year)
                    .map(item => ({
                        date: new Date(item.date * 1000).toLocaleDateString('en-US'),
                        close: item.close
                    }));

                setData(filteredData.map(item => item.close));
                setDates(filteredData.map(item => item.date));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [ticker, year]);

    const handleTickerChange = (event) => setTicker(event.target.value);
    const handleYearChange = (event) => setYear(event.target.value);

    const chartOptions = {
        chart: {
            type: 'line',
            height: 350,
            zoom: { enabled: false },
            animations: { easing: 'easeinout', speed: 500 },
            toolbar: { show: true },
        },
        colors: ['#3f51b5', '#ff5722'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        xaxis: { categories: dates, title: { text: 'Fecha' } },
        yaxis: { title: { text: 'Precio de Cierre (USD)' } },
        tooltip: {
            theme: 'light',
            x: { format: 'dd/MM/yyyy' }
        },
        title: {
            text: `Historial de Precios de ${ticker} (${year})`,
            align: 'left',
            style: { fontSize: '18px', fontWeight: 'bold' },
        },
    };

    const yearOptions = Array.from({ length: 5 }, (_, index) => new Date().getFullYear() - index);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Card style={{ maxWidth: 700, width: '100%', marginTop: '20px' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Historial de Precios</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Select value={ticker} onChange={handleTickerChange}>
                            <MenuItem value="AMRN">Amarin Corporation (AMRN)</MenuItem>
                            <MenuItem value="AAPL">Apple (AAPL)</MenuItem>
                            <MenuItem value="GOOGL">Alphabet (GOOGL)</MenuItem>
                            <MenuItem value="AMZN">Amazon (AMZN)</MenuItem>
                        </Select>
                        <Select value={year} onChange={handleYearChange}>
                            {yearOptions.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                    {data.length ? (
                        <Chart
                            options={chartOptions}
                            series={[{ name: 'Precio de Cierre', data }]}
                            type="line"
                            height={350}
                        />
                    ) : (
                        <Typography align="center" color="textSecondary">Cargando datos...</Typography>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default YahooFinanceData;
