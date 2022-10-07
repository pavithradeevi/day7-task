var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res);
    console.log(res[0].name);
    var result=res.filter((ele)=>ele.region==="Asia");
    console.log(result)
    

var population=res.filter((ele)=>ele.population<200000);
console.log(population)





var final=population.map((ele)=>ele.name);
console.log(final)

var final=population.map((ele)=>ele.capital);
console.log(final)

var final=population.map((ele)=>ele.flag);
console.log(final)



}
