import express, {application} from 'express';
import {serverPort} from './config'
import {dataSource} from './data-source';
import routes from './routes/index'
import "reflect-metadata"


const start = async () => {

    const app = express();

    app.use(routes)
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        return next();
    })

    await dataSource.initialize();
    console.log('Data source has been initialized')

    app.listen(serverPort, () => {
        console.log(`Server is running at http://localhost:${serverPort}`)
    })

}

start().catch(console.error)