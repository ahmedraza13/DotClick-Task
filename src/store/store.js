// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './slices/invoiceslice';

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer
  }
});
