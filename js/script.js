//change the greeting message dynamically
var greeting = "እንኳን በደና መጡ";
var custamerName = "ሱመያ";
var messageBord = "እባክዎትን የሚገዙትን እቃ ትክክለኝነት ያረጋግጡ";
//concatination
var welcameMessage = greeting
  .concat(" ", custamerName)
  .concat(" ", messageBord);
//to update the greeting
var elGreeting = document.getElementById("greeting");
elGreeting.textContent = welcameMessage;
//shopping list
var item = "እንጀራ";
var count = 5;
var pricePerItem = 35;
var totalPrice = count * pricePerItem;
//update shooping list
var elItem = document.getElementById("item");
elItem.textContent = item;
var elCount = document.getElementById("count");
elCount.textContent = count;
var elPrice = document.getElementById("price");
elPrice.textContent = pricePerItem;
var elTotal = document.getElementById("totalPrice");
elTotal.textContent = totalPrice;
var btn = '<button onclick="window.print()">ሪሲት ይዉሰዱ</button>';
//pament function
function makePayment() {
  var text, finalMassage;
  //on click ther open conform box
  var confirmBox = confirm("ክፍያ ይፈጽሙ");
  if (confirmBox == true) {
    text = "<br>ክፍያዉ ተጠናቋል። እናመሰግናለን!";
    finalMassage=text.concat(" ", btn);

    //
  } else {
    text = "<br>ክፍያዉ ተሰርዧል";
    finalMassage=text;
    //
  }
  finalMassage=document.getElementById("output").innerHTML = finalMassage;
}
