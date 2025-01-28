import F from 'fastify'
import fs from '@fastify/static'
import path from 'node:path'
import emiter from 'node:events'

const __dirname=import.meta.dirname
emiter.setMaxListeners(12); // боремся предупреждением об утечке памяти

let srv=F({ logger: true });

srv.register(fs,{
    root: path.join(__dirname,'courses'),
    prefix: '/',
    names: ['index', 'index.html', 'index.htm', '/'],
});

// srv.register(fs,{
//     root: path.join(__dirname,'node_modules'),
//     prefix: '/node_modules/',
//     decorateReply: false
// });

srv.get('/:name', async (q,a)=>{
    let name=q.params.name;
    console.log(`Get: ${name}`);
    return a.sendFile(name);
})

srv.setNotFoundHandler(async (q,a)=>{
    console.log(`GET: ${q.params.name} ${q.url} not found`);
    return a.sendFile("404.html")
   // let p = path.join(__dirname, 'curses', q.url, 'index.html');
   // return a.sendFile(p);
})

const start=async ()=>{  
try {
      srv.listen({port:3000, host: '0.0.0.0'}, async (err, addr)=>{
        if (err)
            console.log(err);
        else
            console.log(`listern ${addr}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();