 function showalert1() {
     alert('品項：冰淇淋蛋糕\n價格：350元\n已加入購物車中');
 }

 function showalert2() {
     alert('品項：黑森林\n價格：350元\n已加入購物車中');
 }

 function showalert3() {
     alert('品項：水果安娜\n價格：350元\n已加入購物車中');
 }

 function showalert4() {
     const form = document.forms['form1'];
     const m1 = form1.elements.m1.value;
     s1 = m1 * 30
     alert('品項：元寶' + '\n價格：' + s1 + '\n已加入購物車中');
 }

 function showalert5() {
     const form = document.forms['form2'];
     const m2 = form2.elements.m2.value;
     s2 = m2 * 30
     alert('品項：丹麥熱狗' + '\n價格：' + s2 + '\n已加入購物車中');
 }

 function showalert6() {
     const form = document.forms['form3'];
     const m3 = form.elements.m3.value;
     s3 = m3 * 30
     alert('品項：小泡芙' + '\n價格：' + s3 + '\n已加入購物車中');
 }

 function showalert7() {
     const form = document.forms['form4'];
     const m4 = form.elements.m4.value;
     s4 = m4 * 40
     alert('品項：綠豆酥' + '\n價格：' + s4 + '\n已加入購物車中');
 }

 function showalert8() {
     const form = document.forms['form5'];
     const m5 = form.elements.m5.value;
     s5 = m5 * 40
     alert('品項：烏豆沙蛋黃酥' + '\n價格：' + s5 + '\n已加入購物車中');
 }

 function showalert9() {
     const form = document.forms['form6'];
     const m6 = form.elements.m6.value;
     s6 = m6 * 40
     alert('品項：土鳳梨酥' + '\n價格：' + s6 + '\n已加入購物車中');
 }

 function b1() {
     const form = document.forms['form7'];
     const name = form.elements.name.value;
     const phone = form.elements.phone.value;
     const email = form.elements.email.value;
    
     
     alert('我們感謝' + name + '參加此活動' + '\n若成功參加可以從' + email + '看見我們的回信' + '\n或者我們會打' + phone + '來與你聯絡');
 }