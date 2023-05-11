"use strict";
//Array
let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
   ];


  function selectTeam(){

        const select = document.getElementById("team-select");
        
        for (let i = 0; i < teams.length; i++) {

          const option = document.createElement("option");
          option.value = teams[i].code.toLowerCase();
          option.textContent = teams[i].name;
          select.appendChild(option);

        }

      }


//THE OUTPUT
function showTeam() {

  const select = document.getElementById("team-select");
  const selectedTeamCode = select.value;
  const selectedTeam = teams.find(team => team.code.toLowerCase() === selectedTeamCode);
  document.getElementById("selected-team").textContent = `You selected: ${selectedTeam.name}`;

}

  
  //Evoke function
selectTeam();
