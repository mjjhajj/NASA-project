const http = require('http');
const app = require('./app'); // passing express as app functiona

const { loadPlanetsData } = require('./models/planets.model')
// check if env variable PORT is set
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer(){
    await loadPlanetsData();
    
    // console.log(loadPlanetsData)

    server.listen(PORT,()=>{
        console.log('listening on port ' + PORT);
    });
}
startServer();