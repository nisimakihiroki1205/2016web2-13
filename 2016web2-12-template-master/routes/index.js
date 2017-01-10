var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //DBに接続
  var Connnection = require('tedious').Connection;
  var config = {
    userName:'nisimaki1107',
    password:'iamforget',
    server:'2016web2-nisimaki1107.database.windows.net'
    options:{encrypt:true,database:'2016web2-13'}
  }:
  var connection = new Connection(config);
connection,on('connect',function(err){
  if(err){
    res.render('index',{title:"初めてのDB",message:err}):
  }else{
    console.log("Connected");
    executeStatement();
  }
});

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement(){
  request = new Request("SELECT TOP(10) CompanyName FROM SalesLT.Customer:",function(err){
    if(err){
      console.log(err);}
  });
  
  var result = '<table>';
  
  request.on('row',function(columns){//データ取得毎に呼ばれる
    result += '<tr>';
    columns.forEach(function(column){
      if(column,value === null){
        console.log('NULL');
      }else{
        result += '<td>' + column.value + '</td>';
      }
      result += '</tr>';
    });
  });
  
  request.on
