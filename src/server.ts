import app, { startServer } from './app';

const PORT: number = 3000;

const main = async () => {
    await startServer();
    app.listen(PORT, () => {console.log(`la aplicacion esta ejecutandose en el puerto ${PORT}`)});
}

main();













