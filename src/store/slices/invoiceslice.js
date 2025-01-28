import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [
      { invoiceId: "INV-001", date: "23-09-2022", customer: "Jacub Marcus", payableAmount: "$100", amountPaid: "$000", Due: "$000" },
      { invoiceId: "INV-002", date: "24-09-2022", customer: "Sam White", payableAmount: "$200", amountPaid: "$150", Due: "$50" },
      { invoiceId: "INV-003", date: "25-09-2022", customer: "Mia Brown", payableAmount: "$300", amountPaid: "$300", Due: "$0" },
      { invoiceId: "INV-004", date: "26-09-2022", customer: "Tom Jerry", payableAmount: "$500", amountPaid: "$200", Due: "$300" },
      { invoiceId: "INV-005", date: "27-09-2022", customer: "Emma Stone", payableAmount: "$150", amountPaid: "$100", Due: "$50" },
      { invoiceId: "INV-006", date: "28-09-2022", customer: "Will Smith", payableAmount: "$250", amountPaid: "$250", Due: "$0" }
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
      // Filter invoices based on invoiceId
      state.invoices = state.invoices.filter(invoice => invoice.invoiceId !== action.payload);
    }
  }
});

export const { setInvoices, editInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
