var arr = [
  {
    "logo" : "./Img/CSK.avif",
    "teamname": "CSK",
    "fullname": "Chennai Super Kings",
    "trophies": 5,
    "winningYears": "2010 | 2011 | 2018 | 2021 | 2023",
    "captainimg": "./Img/Ruturaj.avif" ,
    "captain": "Ruturaj Gaikwad",
    "color1": "#ffcc00ff",
    "color2": "#2e374cff"
  },
  {
    "logo" : "./Img/DC.avif",
    "teamname": "DC",
    "fullname": "Delhi Capitals",
    "trophies": 0,
    "winningYears": "-",
    "captain": "Axar Patel",
    "captainimg": "./Img/Axar.avif",
    "color1": "#b9251c",
    "color2": "#01184D"
  },
  {
    "logo" : "./Img/GT.avif",
    "teamname": "GT",
    "fullname": "Gujarat Titans",
    "trophies": 1,
    "winningYears": "2022",
    "captain": "Shubman Gill",
    "captainimg": "./Img/Shubman.avif",
    "color1": "#77C7F2",
    "color2": "#0D1A31"
  },
  {
    "logo" : "./Img/KKR.avif",
    "teamname": "KKR",
    "fullname": "Kolkata Knight Riders",
    "trophies": 3,
    "winningYears": "2012 | 2014 | 2024",
    "captain": "Ajinkya Rahane",
    "captainimg": "./Img/Ajinkya.avif",
    "color1": "#ddb637ff",
    "color2": "#17132aff"
  },
  {
    "logo" : "./Img/LSG.avif",
    "teamname": "LSG",
    "fullname": "Lucknow Super Giants",
    "trophies": 0,
    "winningYears": "-",
    "captain": "Rishabh Pant",
    "captainimg": "./Img/Rishabh.avif",
    "color1": "#dcd5d5ff",
    "color2": "#0248BC"
  },
  {
    "logo" : "./Img/MI.avif",
    "teamname": "MI",
    "fullname": "Mumbai Indians",
    "trophies": 5,
    "winningYears": "2013 | 2015 | 2017 | 2019 | 2020",
    "captain": "Hardik Pandya",
    "captainimg": "./Img/Hardik.avif",
    "color1": "#2D6AB1",
    "color2": "#051023ff"
  },
  {
    "logo" : "./Img/PBKS.avif",
    "teamname": "PBKS",
    "fullname": "Punjab Kings",
    "trophies": 0,
    "winningYears": "-",
    "captain": "Shreyas Iyer",
    "captainimg": "./Img/Shreyas.avif",
    "color1": "#D71920",
    "color2": "#273665"
  },
  {
    "logo" : "./Img/RR.avif",
    "teamname": "RR",
    "fullname": "Rajasthan Royals",
    "trophies": 1,
    "winningYears": "2008",
    "captain": "Riyan Parag",
    "captainimg": "./Img/Riyan.avif",
    "color1": "#EB83B5",
    "color2": "#042958"
  },
  {
    "logo" : "./Img/RCB.avif",
    "teamname": "RCB",
    "fullname": "Royal Challengers Bengaluru",
    "trophies": 1,
    "winningYears": "2025",
    "captain": "Rajat Patidar",
    "captainimg": "./Img/Rajat.avif",
    "color1": "#2B2A29",
    "color2": "#a11824ff"
  },
  {
    "logo" : "./Img/SRH.avif",
    "teamname": "SRH",
    "fullname": "Sunrisers Hyderabad",
    "trophies": 1,
    "winningYears": "2016",
    "captain": "Pat Cummins",
    "captainimg": "./Img/Pat.avif",
    "color1": "#F26522",
    "color2": "#4d1517ff"
  }
]

var box = document.querySelector('#box');
var btn = document.querySelector('button');

btn.addEventListener('click',function(){
    var team = Math.floor(Math.random()*arr.length);
    
    box.innerHTML = `
    <img src="${arr[team].logo}" alt="logo"></img>
    <h1>${arr[team].teamname}</h1>
    <h2>${arr[team].fullname}</h2>
    <h4>Trophies : ${arr[team].trophies}</h4>
    <p>${arr[team].winningYears}</p>
    <img src="${arr[team].captainimg}" alt="logo"></img>
    <h3>Captain : ${arr[team].captain}</h3>`; 

    box.style.background = `linear-gradient(${arr[team].color1},${arr[team].color2})`;
})