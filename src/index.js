const express = require("express");

const app = express();

app.get("/", (req, res) => { res.send("Express on Vercel"); });
app.get('/abc',(req,res)=>{
    res.send('Hello from /abc endpoint')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;