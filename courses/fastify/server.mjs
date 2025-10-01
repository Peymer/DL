import  Fastify  from  'fastify'

const fastify = Fastify({  logger  :   true   }) 

fastify.listen    (  {port: 5000}  ,   (err, address)   =>   { 
   if   (err) {
    console.log(err)
    process.exit(1)
   }    
   else { 
        console.log  (`Cервер работает, перейдите по адресу ${address}`)
    }
}) 