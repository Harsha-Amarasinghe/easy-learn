const express=require('express');

const app=express();
app.listen(9999,(err)=>
    {
        if(err)
            console.log(err);
        else
            console.log("server working on port 9999");
    }
)