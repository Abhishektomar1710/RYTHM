const express = require('express') ; 
const cors = require('cors') ; 
const dotenv = require('dotenv');
dotenv.config ; 

const app = express() ; 
app.use(cors()) ; 
app.use(express.json()) ; 
app.use('/' , require('./routes/user')) ; 
app.use('/' , require('./routes/music')) ; 


const server = app.listen(1234, (err)=>{
    if(err){
        console.log('Error is ',err);
    }
    else{
        console.log('Server Started.... ', server.address().port);
    }
});
