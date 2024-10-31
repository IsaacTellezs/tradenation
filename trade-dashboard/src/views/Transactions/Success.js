import React, { useEffect, useState } from 'react';

const Success = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await fetch('http://localhost:5000/get-balance', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Asegúrate de incluir el token de autorización si es necesario
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBalance(data.balance); // Actualiza el estado con el nuevo saldo
      } else {
        console.error('Error al obtener el saldo');
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h1>¡Pago exitoso!</h1>
      <p>Tu nuevo saldo es: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default Success;
