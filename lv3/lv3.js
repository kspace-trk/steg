function cal(){
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let res = null;                       //計算結果値代入用

  res = Number(number1) + Number(number2);

  if (!isNaN(res)) {

    document.getElementById("result").innerHTML = res;

  }else {

    alert("半角数字を入力してください")

  }

}

function enter(){
  if( window.event.keyCode == 13 ){

    cal();

  }


}
