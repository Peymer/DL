import f from 'fs';

var t=[];
for (let st=1; st <30;st++){
    t=[];
    var y;

    for (let x=-20;x<20;x+=1){
        switch (st%10){
            case 0: y=x**3/9598;
            break;
            case 1: y=(2*x**3-1020*x**2+160*x+25)/(x**2-200*x+235);
            break;
            case 2: y=x**4/29567;
            break;
            case 3: y=Math.log10(x**2)/x;
            break;
            case 4: y=Math.exp(x**2);
            break;
            case 5: y=Math.log(x**2)/x;
            break;
            case 6: y=Math.sqrt(x**4);
            break;
            case 7: y=(x**4+4409*x**3-100*x**2-1255)/(x**4);
            break;
            case 8: y=x**2;
            break;
            case 9: y=16*x**5/x**4;
            break;
        }
        t.push(y);
    }
    var sdata=`${st} `;
    t.forEach(e=>{
        sdata+=`${e} `;
    });
    sdata+='\n';
    f.writeFile('data.txt', sdata, {flag: "a"}, (err) => {
        if (err)
            console.log(err.message);
        else    
            console.log("ok");
    });
}
