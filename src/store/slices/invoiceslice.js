// src/slices/invoiceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000"},
      { invoiceId: "AHG868", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },

    ]
  },
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },
    editInvoice: (state, action) => {
      const { invoiceId, updatedInvoice } = action.payload;
      const invoiceIndex = state.invoices.findIndex(invoice => invoice.invoiceId === invoiceId);
      if (invoiceIndex !== -1) {
        state.invoices[invoiceIndex] = { ...state.invoices[invoiceIndex], ...updatedInvoice };
      }
    },
    deleteInvoice: (state, action) => {
      state.invoices = state.invoices.filter(invoice => invoice.invoiceId !== action.payload);
    }
  }
});

export const { setInvoices, editInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
