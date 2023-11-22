var arrExams = [];

arrExams[0] = {
    Subj: "Високопродуктивні обчислення",
    Data: "14.11.2023",
    Room: "1"
}

arrExams[1] = {
    Subj: "Непроцедурне програмування",
    Data: "22.11.2023",
    Room: "42"
}

arrExams[2] = {
    Subj: "Проектування та розробка веб-застосувань",
    Data: "23.11.2023",
    Room: ""
}

arrExams[3] = {
    Subj: "Технології комп'ютерного проектування",
    Data: "30.11.2023",
    Room: ""
}


function isExam(text) {
    var currentDate = new Date();
    var examDate = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    examDate.setHours(0, 0, 0, 0);
    return currentDate.toDateString() === examDate.toDateString();
}

function isCons(text) {
    var currentDate = new Date();
    var tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);
    var inputDate = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    inputDate.setHours(0, 0, 0, 0);
    return tomorrowDate.toDateString() === inputDate.toDateString();
}

function ras() {
    var tableHtml = "<table border='1'><tr><th>Предмет</th><th>Дата</th><th>Аудиторія</th></tr>";

    for (var i = 0; i < arrExams.length; i++) {
        var item = arrExams[i];
        var text = item['Data'];
        var ex = isExam(text);
        var cons = isCons(text);

        tableHtml += "<tr>";
        tableHtml += "<td>" + item['Subj'] + "</td>";
        if (ex) {
            tableHtml += "<td style='background:green;'>Сьогодні екзамен</td>";
        } else if (cons) {
            tableHtml += "<td style='background:grey;'>Сьогодні консультація</td>";
        } else {
            tableHtml += "<td>" + text + "</td>";
        }
        var classroom = item['Room'];
        if (classroom) {
            tableHtml += "<td>" + classroom + "</td>";
        } else {
            tableHtml += "<td>Невідоме місце проведення консультації/іспиту</td>";
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";
    document.getElementById("result").innerHTML = tableHtml;
}
