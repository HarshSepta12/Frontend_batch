const Movie = [
    {Title: 'Ra-One',Actor:'SRK',Release:'2012',Hit:'False',Flop: 'True'},
    {Title: 'Infinity War',Actor:'Rdj',Release:'2018',Hit:'true',Flop: 'True'},
    {Title: 'Dhoom-3',Actor:'Amir_Khan',Release:'2013',Hit:'true',Flop: 'false'},
    {Title: 'End Game',Actor:'Thanos',Release:'2019',Hit:'true',Flop: 'false'},
]
// for(let i=0;i<Movie.length;i++){
//     console.log(Movie[i].Actor);
    
// }
// for(let i in Movie){
//     console.log(i,Movie[i]);
// }
// let i =0;
// while(i<Movie.length){
//     console.log(Movie[i].Actor);
//     i++;
// }
    
// Movie.forEach((value,index)=>console.log(value,index));


const products = [
    {Title: 'Iphone15',price:90000, Color:"Black"},
    {Title: 'X100',price:80000, Color:"White"},
    {Title: 'Redmi note 11',price:90000, Color:"Golden"},
    {Title: 'Nokia',price:1200, Color:"Grey"}
]

// for each
// products.forEach((value,index)=>console.log(value,index));

// forin 
// for(Specification in products){
//     console.log(Specification, products[Specification]);
// }

// while loop
// let i =0;
// while(i<products.length){
//     console.log(i,products[i]);
//     i++;
// }

// for of
for(let i=0;i< products.length;i++){
    console.log(i,products[i]);
}