import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthProvider>

    </QueryClientProvider>


  </React.StrictMode>,
)
