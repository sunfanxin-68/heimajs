let obj = {
    uname:'phayu',
    age: 24,
    gender:'male'
}
//2.反復オブジェクト
for (let key in obj){
    console.log(key);
    console.log(obj[key]);
}