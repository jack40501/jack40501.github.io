 function showalert1() {
   const form = document.forms['form1'];
     const m1 = form.elements.m1.value;
       s1 = m1*1

     alert('品項：冰淇淋蛋糕' + '\n價格：' + s1  + '\n已加入購物車中'); }
 function showalert2() {
const form = document.forms['form2'];
     const m2 = form.elements.m2.value;
       s2 = m2*1

     alert('品項：黑森林' + '\n價格：' + s2 + '\n已加入購物車中'); }

 function showalert3() {
 const form = document.forms['form3'];
     const m3 = form.elements.m3.value;
            s3 = m3*1

     alert('品項：水果安娜' + '\n價格：' + s3 + '\n已加入購物車中'); }

 function showalert4() {
     const form = document.forms['form4'];
     const m4 = form.elements.m4.value;
     s4 = ""
     s4 = m4 * 30
     alert('品項：元寶' + '\n價格：' + s4 + '\n已加入購物車中');
 }

 function showalert5() {
     const form = document.forms['form5'];
     const m5 = form.elements.m5.value;
     s5 = m5 * 30
     alert('品項：丹麥熱狗' + '\n價格：' + s5 + '\n已加入購物車中');
 }

 function showalert6() {
     const form = document.forms['form6'];
     const m6 = form.elements.m6.value;
     s6 = m6 * 30
     alert('品項：小泡芙' + '\n價格：' + s6 + '\n已加入購物車中');
 }

 function showalert7() {
     const form = document.forms['form7'];
     const m7 = form.elements.m7.value;
     s7 = m7 * 40
     alert('品項：綠豆酥' + '\n價格：' + s7 + '\n已加入購物車中');
 }

 function showalert8() {
     const form = document.forms['form8'];
     const m8 = form.elements.m8.value;
     s8 = m8 * 40
     alert('品項：烏豆沙蛋黃酥' + '\n價格：' + s8 + '\n已加入購物車中');
 }

 function showalert9() {
     const form = document.forms['form9'];
     const m9 = form.elements.m9.value;
     s9 = m9 * 40
     alert('品項：土鳳梨酥' + '\n價格：' + s9 + '\n已加入購物車中');
 }

 function b1() {
     const form = document.forms['form10'];
     const name = form.elements.name.value;
     const phone = form.elements.phone.value;
     const email = form.elements.email.value;
    
     
     alert('我們感謝' + name + '參加此活動' + '\n若成功參加可以從' + email + '看見我們的回信' + '\n或者我們會打' + phone + '來與你聯絡');
 }
 function showalert10(){
 	a1='冰淇淋蛋糕'
 	a2='黑森林蛋糕'
 	a3='水果安娜蛋糕'
 	a4='元寶'
 	a5='丹麥熱狗'
 	a6='小泡芙'
 	a7='綠豆酥'
 	a8='烏豆沙蛋黃酥'
 	a9='土鳳梨酥'
 const form = document.forms['mm'];
     const discount = form.elements.discount.value;
       dis = discount/10
       a10=s1+s2+s3+s4+s5+s6+s7+s8+s9
    a12=(s1+s2+s3+s4+s5+s6+s7+s8+s9)*dis
    a11=a10-a12 

            document.getElementById('a0106').innerHTML = 
            '<p class="moneytitle">結算價格</p>' + '<br>' + '<p class="cakename">' + '<span class="mleft">' + a1 + '</span>' + '<span class="mright">' + s1 + '</span>' + '</p>'  + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + a2 + '</span>' + '<span class="mright">' + s2 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + a3 + '</span>' + '<span class="mright">' + s3 + '</span>' + '</p>' + ' <br> ' +
              '<p class="cakename">' + '<span class="mleft">' + a4 + '</span>' + '<span class="mright">' + s4 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + a5 + '</span>' + '<span class="mright">' + s5 + '</span>' + '</p>' + ' <br> ' +
              '<p class="cakename">' + '<span class="mleft">' + a6 + '</span>' + '<span class="mright">' + s6 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + a7 + '</span>' + '<span class="mright">' + s7 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + a8 + '</span>' + '<span class="mright">' + s9 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + a9 + '</span>' + '<span class="mright">' + s9 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft"> ' + '折價前' + '</span>' + '<span class="mright">' + a10 + '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + '使用' + '</span>' + '<span class="mright">' + discount + '折價券'+ '</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + '折價金額' + '</span>' + '<span class="mright">' + a11 +'</span>' + '</p>' + ' <br> ' +
            '<p class="cakename">' + '<span class="mleft">' + '最終價格' + '</span>' + '<span class="mright">' + a12 + '</span>' + '</p>'  


        }
       
       function showalert11(){

　　window.open ('money.html', 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no') 
            document.getElementById('a0107').innerHTML = a1 }
