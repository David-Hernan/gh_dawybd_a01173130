const express = require('express');
const app = express(); 

const bodyParser = require('body-parser');
//Agregar el cookieParser
const cookieParser = require('cookie-parser');
//Agrega express-session para manejo de variables de sesión con express
const session = require('express-session');

//csrf para proteger de usuarios de poca confianza
const csrf = require('csurf');
const csrfProtection = csrf(); 

//multer para archivos
const multer = require('multer');

const phishing = require('./routes/phishing');
const labs = require('./routes/labs');
const menu = require('./routes/menu');
const muestras = require('./routes/muestras');
const rutasUsers = require('./routes/login');

//Devolver como respuesta un HTML, es un módulo
const path = require('path');

//Configuración sw multer
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
//en diskStorage indico dónde quiero que server guarde archivos
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, 
            new Date().getMilliseconds() + 
            '-' + file.originalname);
    },
});

//Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

//Configura como carpeta estática la carpeta llamada "public"
//Para incluir los css y javascripts
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({extended: false}));
//Para usar JSON
app.use(bodyParser.json());

//poner después de bodyParser
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'imagen' es el nombre del input tipo file de la forma (lo k esté en html)
//para tener varias, mover esto al controller correspondiente
//o poner todos acá
app.use(multer({ storage: fileStorage }).single('imagen')); 

//Agregar el cookieParser
app.use(cookieParser());
//Agregar el express-session
app.use(session({
    //String secreto es aleatorio y no muy largo, valor que usa sesión para que otros no puedan romperla, tipo password interno
    secret: 'vjabfiubaviabviubfviub84y38r7y18rbfqfu87fb82fub193487fb28fb8rubf', 
    //Guarda a cada ratos los valores de sesión. En falso los cambia sólo cuando algo cambia
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    //En falso asegura que no se guarda petición cuando no se necesita
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Para csrf, usar el middleware csrfProtection
//...Y después del código para inicializar la sesión... 
//app.use(csrfProtection);
//Objeto response tiene atributo llamado locals donde se puede poner el token
//incluye variable csrfToken en todas las respuestas
app.use((request, response, next) => {
    //response.locals.csrfToken = request.csrfToken();
    response.locals.csrfToken = "dummy";
    next();
});

//Ruta de login
app.use('/login', rutasUsers)

//Ruta de phishing
app.use('/phishing', phishing)

//Ruta de página de labs (Lab7 y preguntas del 12)
app.use('/labs', labs)

//Ruta de página muestra (Lab15)
app.use('/muestras', muestras)

//Página de inicio (Menú principal)
app.use('', menu)

//Página no encontrada
app.use('/error', (request, response, next) => {
    response.status(500); 
    let noen = '<head><meta charset="UTF-8"></head>';
    noen += '<h1>Internal Server Error</h1>';
    noen += '<img src="https://www.gsoft.es/wp-content/uploads/2020/02/blog-gsoft-500-968x423.jpg">';
    response.send(noen);
});

//Página no encontrada
app.use((request, response, next) => {
    response.status(404); 
    let noen = '<head><meta charset="UTF-8"></head>';
    noen += '<h1>Esta página no existe...</h1>';
    noen += '<img src="https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1">';
    response.send(noen);
});

app.listen(3000);