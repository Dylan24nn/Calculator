var x, y, res1, operator;
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
    $("#exp").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "**"
    });
    $("#mod").click(function () {
        if (x[x.length - 1] == ".") {
            console.log("Ошибка: В конце точка");
            alert("Точку в конце не ставить");
            return;
        }
        operator = "%"
    });
    $("#equals").click(function () {
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
        if (operator == "-") {
            q = x - y;
        }
        if (operator == "*") {
            q = x * y;
        }
        if (operator == "/") {
            q = x / y;
        }
        if (operator == "**") {
            q = Math.pow(x, y);
        }
        if (operator == "%") {
            q = x % y;
        }

        $("#result").val(q);
        // Добавляем операцию в журнал

        calcHistory += "<li>"+x + " " + operator + " " + y + " = " + q + "</li>";
        document.getElementById("history").innerHTML = calcHistory;
        // Подготовка к следующему вычислению
        x = q;
        y = "";
    })
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
