const mongoose = require('mongoose') ; 

mongoose.connect('mongodb+srv://Raghav:Raghav@1913@musiccluster.edy4w.mongodb.net/musicdb?retryWrites=true&w=majority', {useNewUrlParser: true} ,{poolSize:5},(err =>{
    if(err){
        console.log("error in db connection") ; 
    }
    else{
        console.log('DB COnnected ...') ; 
    }
}) );

module.exports = mongoose ; 