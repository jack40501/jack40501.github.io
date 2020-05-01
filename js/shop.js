/*var x = -1;


function showalert1() {
  const nameElement = document.getElementsByClassName("shoppp");
  const nae = nameElement.name;


  document.getElementById('a0420').innerHTML = nae;

}*/

document.getElementById('shop1').innerHTML = ''

var cakename = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
var cakemoney = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]

var m = 0;//價格
var y = 0;//div第幾個

var x = -1;//圖片
var g = 0;//數量

function off() {

  document.getElementById('shop' + y).innerHTML = ''


  /* var v = document.getElementById("money")
   alert(v.innerHTML);
   var moneynumber = document.getElementById("moneynumber" + y)
   document.getElementById('shop' + y).innerHTML = ''
 
   var mon = v.innerHTML - moneynumber.innerHTML
   alert(mon)
   document.getElementById('money').innerHTML = mon*/


}

function showalert1() {

  x = 1;
  y += 1
  m += cakemoney[x - 1]

  name = cakename[x - 1]
  money = cakemoney[x - 1]


  if (y < 6) {
    alert('已成功將你商品加入購物車')
  }
  else {
    alert('購物車超過上限')
  }


  document.getElementById('shop' + y).innerHTML = '<div class="row"><div class="col-md-6"><img src=img/' + x + '.png></div><div class="col-md-6"><p><span id="cakename">' + name + '</span><br>價格：$<span id="moneynumber' + y + '">' + money + '</span><br></p></div></div>';
  document.getElementById('money').innerHTML = m;

}
function showalert2() {

  y += 1
  x = 2;
  m += cakemoney[x - 1]

  name = cakename[x - 1]
  money = cakemoney[x - 1]

  if (y < 6) {
    alert('已成功將你商品加入購物車')
  }
  else {
    alert('購物車超過上限')
  }




  document.getElementById('shop' + y).innerHTML = '<div class="row"><div class="col-md-6"><img src=img/' + x + '.png></div><div class="col-md-6"><p><span id="cakename">' + name + '</span><br>價格：$<span id="moneynumber' + y + '">' + money + '</span><br></p></div></div>';

  document.getElementById('money').innerHTML = m;

}
function showalert3() {

  y += 1
  x = 3;
  m += cakemoney[x - 1]

  name = cakename[x - 1]
  money = cakemoney[x - 1]


  if (y < 6) {
    alert('已成功將你商品加入購物車')
  }
  else {
    alert('購物車超過上限')
  }




  document.getElementById('shop' + y).innerHTML = '<div class="row"><div class="col-md-6"><img src=img/' + x + '.png></div><div class="col-md-6"><p><span id="cakename">' + name + '</span><br>價格：$<span id="moneynumber' + y + '">' + money + '</span><br></p></div></div>';

  document.getElementById('money').innerHTML = m;

}
function showalert4() {

  y += 1
  x = 4;
  m += cakemoney[x - 1]

  name = cakename[x - 1]
  money = cakemoney[x - 1]


  if (y < 6) {
    alert('已成功將你商品加入購物車')
  }
  else {
    alert('購物車超過上限')
  }




  document.getElementById('shop' + y).innerHTML = '<div class="row"><div class="col-md-6"><img src=img/' + x + '.png></div><div class="col-md-6"><p><span id="cakename">' + name + '</span><br>價格：$<span id="moneynumber' + y + '">' + money + '</span><br></p></div></div>';

  document.getElementById('money').innerHTML = m;

}
function showalert5() {

  y += 1
  x = 5;
  m += cakemoney[x - 1]

  name = cakename[x - 1]
  money = cakemoney[x - 1]


  if (y < 6) {
    alert('已成功將你商品加入購物車')
  }
  else {
    alert('購物車超過上限')
  }




  document.getElementById('shop' + y).innerHTML = '<div class="row"><div class="col-md-6"><img src=img/' + x + '.png></div><div class="col-md-6"><p><span id="cakename">' + name + '</span><br>價格：$<span id="moneynumber' + y + '">' + money + '</span><br></p></div></div>';

  document.getElementById('money').innerHTML = m;

}
function showalert6() {


  y += 1
  x = 6;
  m += cakemoney[x - 1]

  name = cakename[x - 1]
  money = cakemoney[x - 1]


  if (y < 6) {
    alert('已成功將你商品加入購物車')
  }
  else {
    alert('購物車超過上限')
  }




  document.getElementById('shop' + y).innerHTML = '<div class="row"><div class="col-md-6"><img src=img/' + x + '.png></div><div class="col-md-6"><p><span id="cakename">' + name + '</span><br>價格：$<span id="moneynumber' + y + '">' + money + '</span><br></p></div></div>';

  document.getElementById('money').innerHTML = m;

}


/* a0420 += 1
 a0421 += 1
 if (a0420 > 2) {
   a0420 += 2
   document.getElementById('a0420').innerHTML = '<img src="images/logo.png">' + 5 * 4 + a0420;


 } else if (a0420 > 3) {


   document.getElementById('a0421').innerHTML = '<img src="images/logo.png">' + 6 * 3 + a0420;
   a0420 += 2
 } else if (a0420 > 4) {


   document.getElementById('a0422').innerHTML = '<img src="images/logo.png">' + 7 * 3 + a0420;
   a0420 += 2
 } else {
   document.getElementById('a0423').innerHTML = '<img src="images/logo.png">' + a0420;

 }


}

*/

/*	const form = document.forms['mm'];
    const discount = form.elements.discount.value;
      dis = discount/10
      a10=s1+s2+s3+s4+s5+s6+s7+s8+s9
 a12=(s1+s2+s3+s4+s5+s6+s7+s8+s9)*dis
 a11=a10-a12
Label.setForeground(Color.red);
           document.getElementById('a0106').innerHTML = a1 + s1 + '<br>' + a2 + s2  + '<br>' + a3 + s3 + '<br>' + a4 + s4 +'<br>' + a5 + s5 + '<br>' + a6 + s6 + '<br>' + a7 + s7 + '<br>' + a8 + s8 + '<br>' + a9 + s9 + '<br>折價前' + a10 +'<br>使用'+ discount +'折折價券後' +'<br>折價金額'+ a11 +'<br>最終價格' + a12 }
      function showalert11(){

 window.open ('money.html', 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
           document.getElementById('a0107').innerHTML = a1 }*/
