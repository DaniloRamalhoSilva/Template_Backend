const express = require('express');
const routers = require('./routers');

const app = express();

app.use(express.json());
app.use('/test', routers.templateRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
