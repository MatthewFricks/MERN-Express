const express = require("express");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const quotesTable=[
    {content: "hi", author:"bye"},
    {content: "hi2", author:"bye3"},
    {content: "hi3", author:"bye3"},
    {content: "hi4", author:"bye4"},
    {content: "hi5", author:"bye5"}
]

app.get("/api", (req, res) => {
    res.json({ status: "ok", message: "Hello World" });
});

app.get("/api/quotes", (req,res)=>{
    res.json({
        status: "OK", 
        count: quotesTable.length, 
        data: quotesTable
    })
})

app.post("/api/quotes", (req,res)=>{
    console.log("INFO FROM REQ--->", req.body)
    quotesTable.push(req.body)
    res.json({
        status: "OK",
        count: quotesTable.length,
        data: quotesTable
    })
})


app.get("/api/quotes/:index",(req,res)=>{
    console.log("REQ PARAMS IS THIS -->", req.params)
    res.json({
        data: quotesTable[req.params.idx],
        msg:"ok"
    })
})

app.put("/api/quotes/:index",(req,res)=>{
    quotesTable[req.params.index] = request.body
    res.json({
        status: "OK", 
        count: quotesTable.length, 
        data: quotesTable
    })
})

app.delete("/api/quotes/:index",(req,res)=>{
    quotesTable.splice(req.params.index, 1)
    res.json({
        status: "OK", 
        count: quotesTable.length, 
        data: quotesTable
    })
})

app.listen( port, ()=> console.log('listening on port: ${port}'));