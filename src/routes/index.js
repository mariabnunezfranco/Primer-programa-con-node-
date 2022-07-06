import {Router} from 'express' //traemos el modulo de express que nos permite separar el codigo
const router = Router()

router.get('/', (rec,res) => res.render('index'))
router.get('/index', (rec,res) => res.render('index')) //cuando accedemos a la pagina lo que el servidor nos envia es un hello world 
router.get('/about', (rec,res) => res.render('about'))
router.get('/contact', (rec,res) => res.render('contact'))

export default router