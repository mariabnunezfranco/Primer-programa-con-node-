import express from 'express' //llamamos al framework 
import ejs from 'ejs'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from './routes/index.js'

const app = express() // iniciamos 

const __dirname = dirname(fileURLToPath(import.meta.url))// la dirección absoluta

app.set('views', join(__dirname, 'views'))//concatenar carpetas a la ruta absoluta
app.set('view engine', 'ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))
const dircss = join(__dirname, 'public')
console.log('La direccion del css es:',dircss )

//app.get('/',(req,res)=> res.render('index'))


app.listen(3000) // el puerto en el que escucha el servidor 
console.log('Iniciado') 
console.log(__dirname) 
