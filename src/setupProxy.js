const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cloud.appwrite.io/v1', // Replace with your Appwrite server URL
      changeOrigin: true,
      pathRewrite: {
        '/api': '', // Remove the /api prefix from the request URL
      },
    })
  );
};