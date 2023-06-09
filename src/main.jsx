import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';

// Routes
import { RouterProvider } from 'react-router-dom';
import { getRoutes } from './routes';
const router = getRoutes();

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
