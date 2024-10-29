import React, { useEffect, useState } from 'react';
import DashboardCard from '../../components/shared/DashboardCard';
import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';

const Trading = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [economicNews, setEconomicNews] = useState([]);
  const [loadingCrypto, setLoadingCrypto] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptocurrencies(response.data);
        setLoadingCrypto(false);
      } catch (error) {
        console.error('Error al obtener las criptomonedas:', error);
        setLoadingCrypto(false);
      }
    };

    const fetchEconomicNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'economy OR cryptocurrency',
            apiKey: '3645d14d414d48389c16b01bdce4b692', // Reemplaza con tu clave de API de News API
            sortBy: 'publishedAt',
            pageSize: 5,
          },
        });
        setEconomicNews(response.data.articles);
        setLoadingNews(false);
      } catch (error) {
        console.error('Error al obtener noticias económicas:', error);
        setLoadingNews(false);
      }
    };

    fetchCryptocurrencies();
    fetchEconomicNews();
  }, []);

  return (
    <DashboardCard title="Registros de Trading">
      <Box sx={{ marginTop: '24px' }}>
        <Typography variant="h6">Criptomonedas Actuales</Typography>
        {loadingCrypto ? (
          <CircularProgress />
        ) : cryptocurrencies.length > 0 ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
            {cryptocurrencies.map((crypto) => (
              <Box
                key={crypto.id}
                sx={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={crypto.image} alt={crypto.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                  <Typography variant="body1">
                    {crypto.name} ({crypto.symbol.toUpperCase()})
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Precio: ${crypto.current_price.toFixed(2)} ({crypto.price_change_percentage_24h.toFixed(2)}%)
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body1">No se encontraron criptomonedas.</Typography>
        )}
      </Box>

      <Box sx={{ marginTop: '24px' }}>
        <Typography variant="h6">Noticias Económicas Recientes</Typography>
        {loadingNews ? (
          <CircularProgress />
        ) : economicNews.length > 0 ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
            {economicNews.map((news) => (
              <Box
                key={news.url}
                sx={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {news.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '5px' }}>
                  {news.description}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {new Date(news.publishedAt).toLocaleDateString()}
                </Typography>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  Leer más
                </a>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body1">No se encontraron noticias económicas.</Typography>
        )}
      </Box>
    </DashboardCard>
  );
};

export default Trading;
