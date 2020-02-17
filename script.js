

// Clock function 
const clock = document.getElementById("clock");

const m1 = moment().format('MMMM Do YYYY, hh:mm:ss A');

function update() {
  const now = moment();
  const readable = now.format('MMMM Do YYYY, hh:mm:ss A');
  clock.textContent = readable;
}
setInterval(update, 1000);
update();
// end clock function

//moment variables
const nine = moment({ hour: 09, minute: 00 });
const ten = moment({ hour: 10, minute: 00 });
const eleven = moment({ hour: 11, minute: 00 });
const twelve = moment({ hour: 12, minute: 00 });
const thirteen = moment({ hour: 13, minute: 00 });
const fourteen = moment({ hour: 14, minute: 00 });
const fifteen = moment({ hour: 15, minute: 00 });
const sixteen = moment({ hour: 16, minute: 00 });
const seventeen = moment({ hour: 17, minute: 00 });


//change color functions
function changeColor9() {
  if (moment().isSame(nine)) {
    document.getElementById("nine0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(nine)) {
    document.getElementById("nine0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(nine)) {
    document.getElementById("nine0").style.backgroundColor = "#d3d3d3";
  }
}

changeColor9();

function changeColor10() {
  if (moment().isSame(ten)) {
    document.getElementById("ten0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(ten)) {
    document.getElementById("ten0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(ten)) {
    document.getElementById("ten0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor10();

function changeColor11() {
  if (moment().isSame(eleven)) {
    document.getElementById("eleven0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(eleven)) {
    document.getElementById("eleven0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(eleven)) {
    document.getElementById("eleven0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor11();

function changeColor12() {
  if (moment().isSame(twelve)) {
    document.getElementById("twelve0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(twelve)) {
    document.getElementById("twelve0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(twelve)) {
    document.getElementById("twelve0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor12();

function changeColor13() {
  if (moment().isSame(thirteen)) {
    document.getElementById("thirteen0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(thirteen)) {
    document.getElementById("thirteen0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(thirteen)) {
    document.getElementById("thirteen0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor13();

function changeColor14() {
  if (moment().isSame(fourteen)) {
    document.getElementById("fourteen0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(fourteen)) {
    document.getElementById("fourteen0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(fourteen)) {
    document.getElementById("fourteen0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor14();

function changeColor15() {
  if (moment().isSame(fifteen)) {
    document.getElementById("fifteen0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(fifteen)) {
    document.getElementById("fifteen0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(fifteen)) {
    document.getElementById("fifteen0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor15();

function changeColor16() {
  if (moment().isSame(sixteen)) {
    document.getElementById("sixteen0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(sixteen)) {
    document.getElementById("sixteen0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(sixteen)) {
    document.getElementById("sixteen0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor16();

function changeColor17() {
  if (moment().isSame(seventeen)) {
    document.getElementById("seventeen0").style.backgroundColor = "#ff6961";
  } else if (moment().isAfter(seventeen)) {
    document.getElementById("seventeen0").style.backgroundColor = "#77dd77";
  } else if (moment().isBefore(seventeen)) {
    document.getElementById("seventeen0").style.backgroundColor = "#d3d3d3";
  }
}
changeColor17();
//end changeColor functions

//localStorage

function save9() {
  let saveData = document.getElementById("nine0").value;
  localStorage.setItem("datanine", saveData);
}

function show9() {
  let showData = localStorage.getItem("datanine");
  $("#nine0").append(showData)
}
show9();

function save10() {
  let saveData = document.getElementById("ten0").value;
  localStorage.setItem("dataTen", saveData);
}

function show10() {
  let showData = localStorage.getItem("dataTen");
  $("#ten0").append(showData)
}
show10();

function save11() {
  let saveData = document.getElementById("eleven0").value;
  localStorage.setItem("dataEleven", saveData);
}

function show11() {
  let showData = localStorage.getItem("dataEleven");
  $("#eleven0").append(showData)
}
show11();

function save12() {
  let saveData = document.getElementById("twelve0").value;
  localStorage.setItem("dataTwelve", saveData);
}

function show12() {
  let showData = localStorage.getItem("dataTwelve");
  $("#twelve0").append(showData)
}
show12();

function save13() {
  let saveData = document.getElementById("thirteen0").value;
  localStorage.setItem("dataThirteen", saveData);
}

function show13() {
  let showData = localStorage.getItem("dataThirteen");
  $("#thirteen0").append(showData)
}
show13();

function save14() {
  let saveData = document.getElementById("fourteen0").value;
  localStorage.setItem("dataFourteen", saveData);
}

function show14() {
  let showData = localStorage.getItem("dataFourteen");
  $("#fourteen0").append(showData)
}
show14();

function save15() {
  let saveData = document.getElementById("fifteen0").value;
  localStorage.setItem("dataFifteen", saveData);
}

function show15() {
  let showData = localStorage.getItem("dataFifteen");
  $("#fifteen0").append(showData)
}
show15();

function save16() {
  let saveData = document.getElementById("sixteen0").value;
  localStorage.setItem("dataSixteen", saveData);
}

function show16() {
  let showData = localStorage.getItem("dataSixteen");
  $("#sixteen0").append(showData)
}
show16();

function save17() {
  let saveData = document.getElementById("seventeen0").value;
  localStorage.setItem("dataSeventeen", saveData);
}

function show17() {
  let showData = localStorage.getItem("dataSeventeen");
  $("#seventeen0").append(showData)
}
show17();

