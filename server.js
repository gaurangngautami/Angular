const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'src')));
const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'rootpassword',
  database:'Test',
  multipleStatements: true
})


con.connect();
function Operation(vno,Response){

  (function (exports) {
  'use strict';

  var Sequence = exports.Sequence || require('sequence').Sequence
    ,sequence = Sequence.create(),err;

  sequence
    .then(function (next) {
      con.query("select * from parked_vehicle where v_reg_no = "+vno+";",function(err,row){
        if(err) console.log(err);
        if(row.length >= 2){
          next(vno);
        }
        else{
          con.query("update parked_vehicle set Parking_slot='none' where v_reg_no="+vno+";select * from parked_vehicle where v_reg_no="+vno+";",function(err,rowss){
            if (err) {
              console.log(err)
            }else{
              console.log(rowss[1],"rowssss")
            }
          });
          con.query("delete from parked_vehicle where v_reg_no ="+vno+";",function(err,row2){
            if(err) {
              console.log(err)
            }
            else{
              // Response.json(rows);
              console.log("deleted successfully")
              Response.json(200);
            }

          })
        }
      })
    })//First Function ends here
    .then(function (next,vno) {
      console.log("in second>>",vno);

    });//second ends here
// so that this example works in browser and node.js
}('undefined' !== typeof exports && exports || new Function('return this')()));
console.log("ENd of Operation");
}

app.get('/api/parked', (req,res)=>{
con.query('select * from parked_vehicle',function(err,row){
  if(err){ console.log(err)}
  res.json(row);
})
});

app.post('/api/findparked', (req,res)=>{
  let reg = req.body.rno;
  console.log("hello>>>>>",req.body);
  con.query("select * from parked_vehicle where v_reg_no = "+reg+";",function(err,row){
    if(err) console.log(err);
    res.json(row);
  })
});

app.post('/api/unpark',(req,res)=>{
  let v_no = parseInt(req.body.rno);
  Operation(v_no,res);
});

app.post('/api/parkit',(req,res)=>{
  let v_no = parseInt(req.body.vno);
  let s_no = req.body.slot;
  let query = "INSERT INTO parked_vehicle (v_reg_no,Parking_slot) VALUES("+v_no+",'"+s_no+"');"
  con.query(query,(err,row)=>{
    if(err){
      console.log(err);
    }else{
    console.log('inserted');
  }
  })
})

app.listen(3000, function(){
  console.log('server runnig');
});
