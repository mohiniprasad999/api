import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import bodyParser from "body-parser";

const app :Application = express();

// import userRouter from './routes/user.router.ts';
app.use(bodyParser.json());

app.get("/", (req:Request, res:Response) => {
    res.status(200).json({success:true, message:"Blank"})
})

app.get("/ping", (req:Request, res:Response) => {
    res.status(200).json({success:true, message:"pong"})
})

app.post("/post", (req:Request, res:Response) => {
    res.status(200).json({success:true, message:"home"})
})

app.delete('/ds/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile('src/ds.json', "utf8",  (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error');
      return;
    }
  console.log(JSON.parse(data));
  
   let jsonData = JSON.parse(data);

   const newData = jsonData.filter((item: any) => item.id !== id);

    fs.writeFile('src/ds.json', JSON.stringify(newData), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Server Error');
        return;
      }
      res.send('Data Deleted Successfully');
    });
  });
});




app.put("/update", (req, res) => {
  const newData = req.body;
  const jsonFilePath = "src/ds.json";

    const existingData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
    
    const updatedData = { ...existingData, ...newData };

  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedData, null, 2));

  res.send("Data updated successfully");
});

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });



app.listen(6006, () => {
    console.log(`sever is runnig at : http://localhost:6006`);
    
});