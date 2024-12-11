import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  TextField,
  Typography,
  Box
} from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useAuth } from "../../../context/AuthContext";

const Wallet = () => {
  const [open, setOpen] = useState(false); 
  const [paymentType, setPaymentType] = useState(""); 
  const [bank, setBank] = useState(""); 
  const [cashOption, setCashOption] = useState("");
  const {user} = useAuth();
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    currency: "MXN",
    amount: "",
    firstName: "",
    lastName: "",
    documentId: "",
  });
  const [pdfBlob, setPdfBlob] = useState(null); 
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPaymentType("");
    setBank("");
    setFormData({
      currency: "MXN",
      amount: "",
      firstName: "",
      lastName: "",
      documentId: "",
    });
  };

  const handlePaymentChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const handleCashOptionChange = (event) => {
    setCashOption(event.target.value);
  };

  const generatePDFPreview = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Ficha de Pago", 105, 15, { align: "center" });
  
    // Información como tabla
    autoTable(doc, {
      startY: 25,
      head: [["Campo", "Información"]],
      body: [
        ["Banco", bank],
        ["Dirección del banco", "AV. PASEO DE LA REFORMA 505 COLONIA JUAREZ ALCALDIA CUAUHTEMOC CP 06600 CDMX."],
        ["Beneficiario", "PROCESADORA DE SERVICIOS ELECTRONICOS U SOLUTIONS SA DE CV"],
        ["CLAVE USD", "012180001173606141"],
        ["SWIFT", "BCRMMXMMXXX"],
        ["Generado por", "Maria Aldana"],
        ["Concepto", "PAGO DE SERVICIOS 12210000484"],
        ["Nombre", `${formData.firstName} ${formData.lastName}`],
        ["Monto", `${formData.amount} ${formData.currency}`],
      ],
      styles: {
        fontSize: 12,
        cellPadding: 5,
        valign: "middle",
        halign: "left",
      },
      headStyles: { fillColor: [0, 119, 182] }, // Encabezado azul
      alternateRowStyles: { fillColor: [240, 240, 240] }, // Filas alternas
    });
  
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfPreviewUrl(pdfUrl);
    setPdfBlob(pdfBlob);
  };

  const downloadPDF = () => {
    if (pdfBlob) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfBlob);
      link.download = "ficha-pago.pdf";
      link.click();
    }
  };

  return (
    <div>
      <Box  sx={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",      
      }}
      >
        <Button onClick={handleOpen} variant="contained" color="primary">
          Depositar fondos
        </Button>
      </Box>


      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Selecciona el tipo de pago</DialogTitle>
        <DialogContent>
          <TextField
            label="Tipo de Pago"
            select
            fullWidth
            value={paymentType}
            onChange={handlePaymentChange}
            margin="normal"
          >
            <MenuItem value="efectivo">Efectivo</MenuItem>
            <MenuItem value="debitoCredito">Débito / Crédito</MenuItem>
          </TextField>

          {paymentType === "efectivo" && (

            <>
             <TextField
                label="Banco"
                select
                fullWidth
                value={bank}
                onChange={handleBankChange}
                margin="normal"
              >
                <MenuItem value="BBVA">BBVA</MenuItem>
                <MenuItem value="Santander">Santander</MenuItem>
                <MenuItem value="Banorte">Banorte</MenuItem>
                <MenuItem value="HSBC">HSBC</MenuItem>
              </TextField>
              <TextField
                label="Nombre"
                fullWidth
                margin="normal"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <TextField
                label="Apellidos"
                fullWidth
                margin="normal"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <TextField
                label="Correo Electrónico"
                fullWidth
                margin="normal"
                name="email"
                value={user.email}
              />
              <TextField
                label="Documento de Identidad"
                fullWidth
                margin="normal"
                name="documentId"
                value={formData.documentId}
                onChange={handleInputChange}
              />
              <TextField
                label="Moneda"
                select
                fullWidth
                margin="normal"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
              >
                <MenuItem value="MXN">MXN</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </TextField>
              <TextField
                label="Monto"
                fullWidth
                margin="normal"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleInputChange}
              />
              <Button
                onClick={generatePDFPreview}
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "16px" }}
                disabled={!bank || !formData.amount || !formData.firstName || !formData.lastName || !formData.documentId}
              >
                Generar Ficha de Pago
              </Button>

              {pdfPreviewUrl && (
                <>
                  <iframe
                    src={pdfPreviewUrl}
                    title="Vista Previa del PDF"
                    width="100%"
                    height="500px"
                    style={{ marginTop: "16px" }}
                  ></iframe>
                  <Button
                    onClick={downloadPDF}
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: "16px" }}
                  >
                    Descargar PDF
                  </Button>
                </>
              )}
            </>
          )}

          {paymentType === "debitoCredito" && (

            <>
            <TextField
              label="Opción de Depósito"
              select
              fullWidth
              margin="normal"
              value={cashOption}
              onChange={handleCashOptionChange}
            >
              <MenuItem value="opcion1">Antares 1</MenuItem>
              <MenuItem value="opcion2">Antares 2</MenuItem>
              <MenuItem value="opcion3">BAC Credomatic</MenuItem>
            </TextField>



           <Box
             sx={{
               backgroundColor: "#e3f2fd",
               padding: 2,
               borderRadius: 2,
               marginTop: 1,
               boxShadow: 1,
             }}
           >
              <Typography
                  variant="body2"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      marginBottom: 0.8,
                      color: "rgba(0, 0, 0, 0.75)",
                    }}
                >
                  Al dar clic en pagar se abrirá una pestaña nueva. Es importante indicar
                  los siguientes datos en el formulario de pago:
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    marginTop: 1.5,
                    marginBottom: 0.5,
                    color: "rgba(0, 0, 0, 0.75)",
                  }}
                >
                  Full Name: {user.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    color: "rgba(0, 0, 0, 0.75)",
                  }}
                >
                  Email: {user.email}
                </Typography>
            </Box>

            <Button
              onClick={() => {
                const urls = {
                  opcion1: "https://clickpago.merchantprocess.net/clientv2/client/antares",
                  opcion2: "https://pagos.antares.com.pa/psp/bso/pay",
                  opcion3: "https://checkout.baccredomatic.com/NzQ5MWY2ZWQ4N2YuNDg5NjY1ODIwOTExNjU4MjU0MzY2",
                };
                handleRedirect(urls[cashOption] || "/efectivo"); // Redirige según la opción seleccionada
              }}
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
              disabled={!cashOption} // Desactiva si no se selecciona una opción
            >
              Continuar
            </Button>
            </>
          )}  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Wallet;
