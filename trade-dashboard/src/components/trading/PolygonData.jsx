import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    Typography,
    Select,
    MenuItem,
    Box,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Divider,
    AppBar,
    Toolbar,
    CssBaseline
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ForexData = () => {
    const [currencyPair, setCurrencyPair] = useState('C:EURUSD');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const historicalResponse = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${currencyPair}/range/1/day/2023-01-09/2023-01-09`, {
                    params: {
                        apiKey: 'fPBaYurdQq0LFGStezpEXl5goEQyZARW',
                    },
                });

                const priceData = historicalResponse.data.results.map(item => ({
                    date: new Date(item.t).toLocaleDateString(),
                    close: item.c,
                }));

                setData(priceData);

                const currentResponse = await axios.get(`https://api.polygon.io/v2/last/forex/${currencyPair}`, {
                    params: {
                        apiKey: 'fPBaYurdQq0LFGStezpEXl5goEQyZARW',
                    },
                });

                const currentData = currentResponse.data;
                if (currentData && currentData.price) {
                    setCurrentPrice(currentData.price);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currencyPair]);

    const handleCurrencyChange = (event) => setCurrencyPair(event.target.value);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#ff4081',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Datos de Forex
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
                <Card style={{ maxWidth: 700, width: '100%', marginBottom: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom align="center">Datos de Forex</Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                            <Select value={currencyPair} onChange={handleCurrencyChange} variant="outlined" style={{ minWidth: 120 }}>
                            <MenuItem value="C:AUDUSD">Dólar Australiano / Dólar (AUD/USD)</MenuItem>
                            <MenuItem value="C:USDCAD">Dólar / Dólar Canadiense (USD/CAD)</MenuItem>
                            <MenuItem value="C:EURJPY">Euro / Yen (EUR/JPY)</MenuItem>  
                            <MenuItem value="C:NZDUSD">Dólar Neozelandés / Dólar (NZD/USD)</MenuItem>
                            <MenuItem value="C:EURGBP">Euro / Libra (EUR/GBP)</MenuItem>
                            <MenuItem value="C:EURCAD">Euro / Dólar Canadiense (EUR/CAD)</MenuItem>
                            <MenuItem value="C:GBPJPY">Libra / Yen (GBP/JPY)</MenuItem>
                            <MenuItem value="C:GBPCAD">Libra / Dólar Canadiense (GBP/CAD)</MenuItem>

                            </Select>
                        </Box>
                        {loading ? (
                            <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                                <CircularProgress />
                            </Box>
                        ) : (
                            <>
                                {data.length ? (
                                    <>
                                        <Divider style={{ margin: '20px 0' }} />
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Fecha</TableCell>
                                                        <TableCell style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>Precio de Cierre</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data.map((item, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{item.date}</TableCell>
                                                            <TableCell>{item.close.toFixed(4)}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <Typography variant="h6" align="center" mt={2}>
                                            Precio Actual: <span style={{ color: theme.palette.secondary.main }}>{currentPrice ? currentPrice.toFixed(4) : 'Cargando...'}</span> {currencyPair.split(':')[1]}
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography align="center" color="textSecondary">No hay datos disponibles.</Typography>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    );
};

export default ForexData;
