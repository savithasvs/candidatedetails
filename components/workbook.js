//required packages
const express = require('express');
const excel = require('exceljs');

const mongooses = require('mongoose');
//express path
const route = express.Router();
//Linked local modules
const User = require('./models/User');
const { response } = require('express');
const { collection } = require('./models/User');
const { requireAuth} = require('./authMiddleware');

//to export all data to excel
route.get('/exportuser',requireAuth,(req,res)=>{
    // User.find({}).toArray(function(err, result) {
    User.find({},(err,result)=>{
            if (err) throw err;
            if( result==""){
              return res.status(404).render('noresult',{ err: `results ` });
            }
            else{
              // console.log(result);
              return sheet(result,res);
            }
    });
  
  
    })


  //Send file by start and end date
route.post('/view',requireAuth,(req,res)=>{
    
    var mytext =req.body.names;
    var endate= req.body.enddate;
    var end = new Date(endate);
    var ends = end.getTime() + 86400000;
    console.log(ends);
    
         
  
    User.find({createdAt: {$gte:mytext, $lt:ends}},(error,datas)=>{
        if(error)throw error
        result= datas;
        if( result==""){
          return res.status(404).render('noresult',{ err: `results ` });
        }
        else{
          // console.log(datas);
          
          return sheet(result,res);

        }
        
    }); 
})

//search field form
route.post('/admin',requireAuth,(req,res)=>{
  var fields = req.body.field;
  var search= req.body.search;
  User.find({[fields]:{"$regex": RegExp(".*" + search + ".*","ig")}},(error,datas)=>{
    if (error) throw err;
      // console.log(datas);

      result= datas;
      if(result==''){
        return res.status(404).render('noresult',{ err: `results ` });

      }
      else{
        return sheet(result,res);
      }
      
      
      });

})
  
// route.post('/retii',(req,res)=>{
      
//     var find =req.body.select;
//     var search =req.body.textfor;
//      var finds=req.body.selects;
//      var searchs =req.body.textfors;
//      if(search == ""){
//        res.send('no result found');}
//        else{

       
//       User.find({department:search},(error,datas)=>{

//         if (error) throw err;
//         console.log(datas);
  
//         result= datas;
//         if(result==''){
//           res.send('No result found');
  
//         }
//         else{
//           return sheet(result,res);
//         }
    

//       });
     
//     }
//     // var query ={};
//     // query[find] = search;
//     // // var querys ={};
//     // // querys[finds] = searchs;
//     // console.log(find);
//     // // db.people.aggregate([{$match:{$text:{$search:"Dog"}}},
//     // // {$sort:{score:{$meta:"textScore"}}},
//     // // {$project:{_id:0,name:1}}])
  
//      //User.find(query ,(error,datas)=>{
//       // User.find([{$and:{skills:search},{years:searchs}}],(error,datas)=>{
//       //User.find({[find]:{"$regex": RegExp(".*" + search + ".*","i")}},(error,datas)=>{
//         User.find({department:search ,skills:searchs},(error,datas)=>{

//       if (error) throw err;
//       console.log(datas);

//       result= datas;
//       if(result==''){
//         res.send('No result found');

//       }
//       else{
//         return sheet(result,res);
//       }
      
      
//       });
// })
//const mongoURI = "mongodb+srv://admin:vmstest123@career.ob8fc.mongodb.net/CareerData?retryWrites=true&w=majority";
// autocomplete
route.get("/searchskills",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      "autocomplete":{
        "query":`${req.query.term}`,
        "path":"skills",
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})
route.get("/searchname",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        

        "query":`${req.query.term}`,
        "path":"name",
        
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  console.log(result)
  res.send(result);
})
route.get("/searchskills",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        

        "query":`${req.query.term}`,
        "path":"skills",
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})
route.get("/searchcollege",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        

        "query":`${req.query.term}`,
        "path":"college",
        
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})
route.get("/searchdepartment",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        

        "query":`${req.query.term}`,
        "path":"department",
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})
route.get("/searchdegree",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        

        "query":`${req.query.term}`,
        "path":"degree",
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})
route.get("/searchlocation",requireAuth,async(req,res)=>{
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        

        "query":`${req.query.term}`,
        "path":"location",
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})

route.get("/searchyears",requireAuth,async(req,res)=>{
  const field =req.body.field;
  console.log(field);
  
  
  let result= await User.aggregate([{
    "$search":{
      
      
      "autocomplete":{
        
        
        "query":`${req.query.term}`,
        "path":"name",
        "fuzzy":{
          "maxEdits":2
        }

      }
    }
  }])
  res.send(result);
})
//autocomplete
let sheet = (result,res)=>{
    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Career VMS'); //creating worksheet
    
    //  WorkSheet Header
    worksheet.columns = [
      
      { header: 'Name', key: 'name', width: 35 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Mobile', key: 'mobile', width: 15 },
      { header: 'City', key: 'location', width: 10 },
      { header: 'Degree', key: 'degree', width: 10 },
      { header: 'Department', key: 'department', width: 30 },
      { header: 'SSLC', key: 'sslc', width: 8 },
      { header: 'HSC', key: 'hsc', width: 8 },
      { header: 'UG', key: 'ug', width: 8 },
      { header: 'PG', key: 'pg', width: 8 },
      { header: 'Passed Out On', key: 'years', width: 10 },
      { header: 'Experience', key: 'exp', width: 10 },
      { header: 'Skills', key: 'skills', width: 40 },
      { header: 'Job Preferred', key: 'jobprofile', width: 30 },
      { header: 'College', key: 'college', width: 30 },
      { header: 'Registered On', key: 'createdAt', width: 15 },
      { header: 'Portfolio/Social Link', key: 'portfolio', width: 60 },
      { header: 'Resume', key: 'resume', width: 200 },
      
    ];
    
    // Add Array Rows
    worksheet.addRows(result);
        
    // Write to File
    workbook.xlsx.writeFile(__dirname+"/Studentss.xlsx")
      .then(function() {
        console.log("file saved!");
      res.sendFile(__dirname + '/Studentss.xlsx');
        
    })
}
    
module.exports = route;