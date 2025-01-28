import React, { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, TextField, Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { editInvoice, deleteInvoice } from '../../store/slices/invoiceslice'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DashBoardTable() {
  const invoices = useSelector((state) => state.invoice.invoices);
  const dispatch = useDispatch();

  const [editableInvoice, setEditableInvoice] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const handleEditClick = (invoice) => {
    setEditableInvoice(invoice);
    setUpdatedData({ ...invoice });
  };

  const handleCancelEdit = () => {
    setEditableInvoice(null);
    setUpdatedData({});
  };

  const handleSaveEdit = () => {
    dispatch(editInvoice({ invoiceId: editableInvoice.invoiceId, updatedInvoice: updatedData }));
    setEditableInvoice(null);
    setUpdatedData({});
  };

  const handleDelete = (invoiceId) => {
    dispatch(deleteInvoice(invoiceId));
  };

  const handleInputChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ maxWidth: "100%", padding: 2,  }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Invoice Summary
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="invoice table">
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell><strong>Select</strong></TableCell> {/* Added column header for Select */}
              <TableCell><strong>Invoice ID</strong></TableCell>
              <TableCell align="right"><strong>Date</strong></TableCell>
              <TableCell align="right"><strong>Customer</strong></TableCell>
              <TableCell align="right"><strong>Payable Amount</strong></TableCell>
              <TableCell align="right"><strong>Amount Paid</strong></TableCell>
              <TableCell align="right"><strong>Amount Due</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoiceId}>
                <TableCell component="th" scope="row">
                  <Checkbox /> {/* Added Checkbox */}
                </TableCell>
                <TableCell component="th" scope="row">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <TextField
                      name="invoiceId"
                      value={updatedData.invoiceId}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  ) : (
                    invoice.invoiceId
                  )}
                </TableCell>
                <TableCell align="right">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <TextField
                      name="date"
                      value={updatedData.date}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  ) : (
                    invoice.date
                  )}
                </TableCell>
                <TableCell align="right">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <TextField
                      name="customer"
                      value={updatedData.customer}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  ) : (
                    invoice.customer
                  )}
                </TableCell>
                <TableCell align="right">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <TextField
                      name="payableAmount"
                      value={updatedData.payableAmount}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  ) : (
                    invoice.payableAmount
                  )}
                </TableCell>
                <TableCell align="right">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <TextField
                      name="amountPaid"
                      value={updatedData.amountPaid}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  ) : (
                    invoice.amountPaid
                  )}
                </TableCell>
                <TableCell align="right">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <TextField
                      name="Due"
                      value={updatedData.Due}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  ) : (
                    invoice.Due
                  )}
                </TableCell>
                <TableCell align="right">
                  {editableInvoice?.invoiceId === invoice.invoiceId ? (
                    <div>
                      <IconButton onClick={handleSaveEdit}>Save</IconButton>
                      <IconButton onClick={handleCancelEdit}>Cancel</IconButton>
                    </div>
                  ) : (
                    <div>
                      <IconButton onClick={() => handleEditClick(invoice)}><EditIcon /></IconButton>
                      <IconButton onClick={() => handleDelete(invoice.invoiceId)}><DeleteIcon /></IconButton>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
