var multiplier = 1;
var smartiecount = 0;
var autoClick = 0;
var factories = 0;

function update() {
  document.getElementById('text').value = smartiecount;
  document.title = smartiecount + " Smarties";
  document.getElementById('amountAutoClick').innerHTML = "You own " + autoClick + " Auto Clickers";
  document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Smarties";
  document.getElementById('amountFactory').innerHTML = "You own " +factories + " Factories";
  document.getElementById('costFactory').innerHTML = ((factories+1) * 15) + " Smarties";
  document.getElementById('cookiespersecond').innerHTML = "You are gaining " + (((autoClick) + (factories*2))*multiplier) + " Smarties per/s";
  document.getElementById('amountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
  document.getElementById('amountMultiplier2').innerHTML = "x" + (multiplier+1);
  document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Smarties";
  document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);
}

function timer() {
  smartiecount = smartiecount + autoClick*multiplier;
  smartiecount = smartiecount + factories*2*multiplier;
  update();
}
setInterval(timer, 1000)

function add() {
  smartiecount = smartiecount + 1;
  document.getElementById('text').value = smartiecount;
  document.title = smartiecount + " Smarties";
  update()
}

function save() {
  localStorage.setItem("smartiecount", smartiecount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("factories", factories);
  localStorage.setItem("multiplier", multiplier);
}

function load() {
  if (localStorage.getItem("smartiecount") === null) {
    alert("Nothing to load!");
  } else {
    smartiecount = localStorage.getItem("smartiecount");
    smartiecount = parseInt(smartiecount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    factories = localStorage.getItem("factories");
    factories = parseInt(factories);
    multiplier = localStorage.getItem("multiplier");
    multiplier = parseInt(multiplier);
    update();
  }
}

function buyAutoClick() {
  if (smartiecount >= ((autoClick + 1) * 12)) {
    smartiecount = smartiecount - ((autoClick + 1) * 12);
    autoClick = autoClick + 1;
    update();
  }
}
function buyFactory() {
  if (smartiecount >= ((factories+1) * 15)) {
    smartiecount = smartiecount - ((factories + 1) * 15);
    factories = factories + 1;
    update();
  }
}
function buyMultiplier() {
  if (smartiecount >= ((multiplier+1) * 100)) {
    smartiecount = smartiecount - ((multiplier + 1) * 100);
    multiplier = multiplier + 1;
    update();
  }
}
function reset(){
  if (window.confirm('Are you sure you want to reset?'))
{
  localStorage.clear();
  multiplier = 1;
  smartiecount = 0;
  autoClick = 0;
  factories = 0;
  update();
}
else
{
    // Nothing happens
}
}

window.onbeforeunload = function () {
    save();
};
