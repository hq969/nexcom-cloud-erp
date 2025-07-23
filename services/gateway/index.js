const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://auth-service:4000', changeOrigin: true }));
app.use('/inventory', createProxyMiddleware({ target: 'http://inventory-service:4001', changeOrigin: true }));
app.use('/finance', createProxyMiddleware({ target: 'http://finance-service:4002', changeOrigin: true }));
app.use('/hr', createProxyMiddleware({ target: 'http://hr-service:4003', changeOrigin: true }));

app.listen(8000, () => console.log('API Gateway running on 8000'));
