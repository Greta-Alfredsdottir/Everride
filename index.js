//Server
import express from 'express';
import { carRouter } from './routes/carRoutes.js';
import { departmentRouter } from './routes/departmentRoutes.js';

const port = 4000;
const app = express();

//Kalder root med requst og response objekt
app.get("/", (req, res) => {
  res.send('Hej verden!');
  console.log(reg);
}); 


app.use("/cars",carRouter)
app.use("/afdeling",departmentRouter)

app.get("/biler-til-salg", (req, res) => {
  res.send('Dette er biler til salg siden!');
}); 

app.get('/about', (req, res) => {
  res.send('Dette er about siden...');
});

app.get('/contact', (req, res) => {
  res.send('Dette er kontakt siden...');
});


app.use((req,res) =>{
  res.send(`Kunne ikke finde siden`)
})

app.listen(port, () => {
   console.log(`Express server kører på http://localhost:${port}`);
});

 