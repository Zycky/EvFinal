const utils = require('../resources/utils')
const moment = require('moment')
const connection = require('../config/db')
const { response } = require('express')

const userPost = (request,response) => {
 
  const user_id = request.body.user_id

  connection.query(
    `SELECT *,date_format(date,'%d/%m/%Y %h:%i:%s') as fixed_date FROM users 
     join posts on (users.id = posts.user_id)
    where users.id = ${user_id}`,
    function(err, result, fields) {
      if (err) {console.log(err)}
        response.json(result)
    }
  );
}
//Posteo de los documentos
const documentosPost = (request,response) => {
  const user_id = request.body.user_id
  const tipo_doc = request.body.tipo_doc
  const link_doc = request.body.link_doc
  connection.query(
    `INSERT INTO documentos (user_id,id_doc,tipo_doc,link_doc)
    VALUES(${user_id}, "${tipo_doc}", "${link_doc}",current_timestamp());`,
    function(err) {
      if (err) {
        message = err
        response.json({state:false,message})
      }else{
        response.json({state:true,message:"Se insertó el Documento"})
      }
        
    }
  );
}


module.exports = {
  userPost,
  documentosPost
}