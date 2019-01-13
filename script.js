var x, y, res1, operator, msave;
x = "";
operator = "";
y = "";
var calcHistory = "<ol>";
//Эта функция выполниться когда браузер полность загрузит страницу
$(function () {
//Навешиваем обработчик клика на кнопку b1
    $("#b1").click(function () {
        if (operator == "") {
            if (x == "0") {
                x = "1";
                $("#result").val(x);
                return;
            }
            x += "1";
            $("#result").val(x);

        } else {
            if (y == "0") {
                y = "1";
                $("#result").val(y);
                return;
            }
            y += "1";
            $("#result").val(y);
        }
    });
    $("#b2").click(function () {
        if (operator == "") {
            x += "2";
            $("#result").val(x);
        } else {
            y += "2";
            $("#result").val(y);
        }
    });
    $("#b3").click(function () {
        if (operator == "") {
            x += "3";
            $("#result").val(x);
        } else {
            y += "3";
            $("#result").val(y);
        }
    });
    $("#b4").click(function () {
        if (operator == "") {
            x += "4";
            $("#result").val(x);
        } else {
            y += "4";
            $("#result").val(y);
        }
    });
    $("#b5").click(function () {
        if (operator == "") {
            x += "5";
            $("#result").val(x);
        } else {
            y += "5";
            $("#result").val(y);
        }
    });
    $("#b6").click(function () {
        if (operator == "") {
            x += "6";
            $("#result").val(x);
        } else {
            y += "6";
            $("#result").val(y);
        }
    });
    $("#b7").click(function () {
        if (operator == "") {
            x += "7";
            $("#result").val(x);
        } else {
            y += "7";
            $("#result").val(y);
        }
    });
    $("#b8").click(function () {
        if (operator == "") {
            x += "8";
            $("#result").val(x);
        } else {
            y += "8";
            $("#result").val(y);
        }
    });
    $("#b9").click(function () {
        if (operator == "") {
            x += "9";
            $("#result").val(x);
        } else {
            y += "9";
            $("#result").val(y);
        }
    });
    $("#b0").click(function () {
        if (operator == "") {
            //Ввести ноль мы можем но последующие уже нельзя
            if (x == "" || x != "0") {
                x += "0";
                $("#result").val(x);
            }
        } else {
            y += "0";
            $("#result").val(y);
        }
    });
    $("#b30").click(function () {
        if (operator == "") {
            x += "000";
            $("#result").val(x);
        } else {
            y += "000";
            $("#result").val(y);
        }
    });
    $("#pi").click(function () {
        // Встроенная функция в jQuery show() показать элемент
        $(".piBlock").show();
        return;
        if (operator == "") {
            x += "3.141592653589793";
            $("#result").val(x);
        } else {
            y += "3.141592653589793";
            $("#result").val(y);
        }
    });
    $("#insertPi").click(function(){
        // Присваем переменной значение поле signNumbers

        var signNumbers = $("#signNumbers").val();
        var Pi = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559";
        var symbol = "3.";
        for(var i = 2; i < parseInt(signNumbers)+2; i++){
           symbol += Pi[i];
        }
        if (operator == "") {
            x += symbol;
            if(x > 10){
                alert("Greater accuracy of Pi");
            }

            $("#result").val(x);
        } else {
            y += symbol;
            if(y > 10){
                alert("Greater accuracy of Pi");
            }
        $("#result").val(y);
        }
        $(".piBlock").hide();
    });
    $("#e").click(function () {
        // Встроенная функция в jQuery show() показать элемент
        $(".eBlock").show();
        return;
        if (operator == "") {
            x += "2,7182818284";
            $("#result").val(x);
        } else {
            y += "2,7182818284";
            $("#result").val(y);
        }
    });
    $("#insert1").click(function(){
        // Присваем переменной значение поле signNumbers

        var signNumbers1 = $("#signNumbers1").val();
        var e = "2,71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746639193200305992181741359662904357290033429526059563073813232862794349076323382988075319525101901";
        var symbol = "2.";
        for(var i = 2; i < parseInt(signNumbers1)+2; i++){
            symbol += e[i];
        }
        if (operator == "") {
            x += symbol;
            $("#result").val(x);
        } else {
            y += symbol;
            $("#result").val(y);
        }
        $(".eBlock").hide();
    });
    $("#point").click(function () {
        if (operator == "") {
            if (x.indexOf(".") == -1) {
                x += ".";
                $("#result").val(x);
            }
        }
        else {
            if (y.indexOf(".") == -1) {
                y += ".";
                $("#result").val(y);
            }
        }
//       if(res1.indexOf(".") == -1) {
//                          alert("1")
//                          res1 += ".";
//
//                  }
//    }
    });

    $("#plus").click(function () {
        //Если последний символ точка тогда останавливаем функцию
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "+";
    });
    $("#minus").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "-";
    });
    $("#multiply").click(function () {
        operator = "*";
    });
    $("#divide").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "/";
    });
    $("#mod").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "%";
    });
    $("#exp").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "^^";
    });
    $("#fact").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "f";
    });
    $("#sqr").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "sqr";
    });
    $("#ms").click(function () {
        msave = parseInt($("#result").val());

    });
    $("#mi").click(function () {
        $("#result").val(msave);
        if(operator == "") {
           x = msave;
       }else {
            y = msave;
        }

    });

    $("#equals").click(function() {
            //Кнопка равно должна не работать, если в конце числа стоит точка и нет дробной части.
            if (y[y.length - 1] == ".") {
                console.log("Ошибка: В конце точка");
                return;
            }

            var q;


            x = parseFloat(x);
            y = parseFloat(y);

            if (operator == "+") {

                q = x + y;
            }
            else if (operator == "-") {
                q = x - y;
            }
            else if (operator == "*") {
                q = x * y;
            }
            else if (operator == "/") {
                q = x / y;
            }
            else if (operator == "%") {
                q = x % y;
            }
            else if (operator == "^") {
                q = Math.pow(x, 2);
                y = 2;
            }
            else if (operator == "sqr") {

                q = Math.sqrt(x, 2);
                y = 2;
            }
            else if (operator == "^^") {
                //q = Math.pow(x, y);
                var res = 1;
                for(var i = 0; i < y; i++) {
                    res *= x;

                }
                q = res;
            }
            else if (operator == "f") {
                res1 = 1;
                for (var i = 1; i <= x; i++){
                    res1 = res1*i; }
                q = res1;
            }
            else if (operator == "msa") {

                msave = q;
            }
            else if (operator == "mps") {
               msave += q;
            }
            $("#result").val(q);

            // Добавляем операцию в журнал

            calcHistory += "<li>" + x + " " + operator + " " + y + " = " + q + "</li>";
            document.getElementById("history").innerHTML = calcHistory;
            // Подготовка к следующему вычислению
            x = q;
            y = "";
        }
    );
    $("#clear").click(function () {
        $("#result").val("");
        x = "";
        operator = "";
        y = "";
    });
    $("#del").click(function () {
        if (operator == "") {
            x = x.substring(0, x.length - 1);
            $("#result").val(x);
        } else {
            y = y.substring(0, y.length - 1);
            $("#result").val(y);
        }
    });

});

/**
 * Created by Денис on 04.12.2018.
 */
