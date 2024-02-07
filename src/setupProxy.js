

// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://apis.data.go.kr/B551011/KorService1/',
            changeOrigin: true,
        })
    );
<<<<<<< HEAD
};
=======


      
};
>>>>>>> c23cd67c57648ecf59ffe3784db86c7eea8f588f
