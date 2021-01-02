window.onload = function () {
    //---hide lien of canvasjs-chart
    //todo:this function working in console google but here none
    var targList = document.getElementsByClassName("canvasjs-chart-credit");
    if (targList) {
        for (var x = 0; x < targList.length; x++) {
            targList[x].style.visibility = "hidden";
        }
    }


    //list all products
    var pageCounter = 1;
    var productContainer = document.getElementById("pro");
    var btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('GET', 'http://localhost:8080/api/products');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });


    var category1 = document.getElementById("btn1");
    var category2 = document.getElementById("btn2");
    var category3 = document.getElementById("btn3");
    var category4 = document.getElementById("btn4");
    var category5 = document.getElementById("btn5");
    var category6 = document.getElementById("btn6");
    var category7 = document.getElementById("btn7");
    var category8 = document.getElementById("btn8");
    var category9 = document.getElementById("btn9");
    var category10 = document.getElementById("btn10");


    category1.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=1');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category2.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=2');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                console.log(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category3.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=3');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category4.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=4');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category5.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=5');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category6.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=6');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category7.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=7');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category8.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=8');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category9.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=9');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });
    category10.addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://gist.githubusercontent.com/abdennacerelmaalem/4df54e212f8bbbb3763029dfdb84f873/raw/67a1fdca2a8b5d5fc5b07d53814c7d6b402d06a7/jsont_test.json');
        xhr.open('POST', 'http://localhost:8080/api/productsByCategory?id=10');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
                renderHTML(ourData);
                // console.log(this)
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
            xhr.onerror = function () {
                console.log("Connection error");
            };

        }
        xhr.send();

        pageCounter++;
        if (pageCounter > 3) {
            btn.classList.add("hide-me");

        }

    });


    function renderHTML(data) {
        var htmlString = "";
        for (i = 0; i < data.length; i++) {
            htmlString += "<tr> " +
                // "<th scope=\"row\">" + i+"." +
                "<td>" + data[i].id +
                "</td> <td>" + data[i].name +
                "</td> <td>" + data[i].sales +
                "</td> <td>" + data[i].rating +
                "</td> <td>" + data[i].date +
                "</td> <td>" + data[i].price +
                "</td> <td>" + data[i].category.name +
                "</td> <td>" + data[i].stores.name +
                "</td> <td> <a href='" + data[i].productUrl + "' target='_blank' > " + data[i].productUrl + "</a>" +
                "</td> <td class='card-img-wrap'> <a href='" + data[i].imageUrl + "' target='_blank'><img src='" + data[i].imageUrl + "' alt=" + data[i].name + " width=\"80\" height=\"80\"/></a></td>  </tr>";

        }

        productContainer.insertAdjacentHTML('beforeend', htmlString);

    }


    $(document).ready(function () {
        $("#MySearch").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#pro tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    $(function () {
        $("#DyVerticalScroll").DataTable({
            "scrollY": "800px",
            "scrollCollapse": true,
        });
    });
    $(function () {
        /*var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/api/legacyProducts');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var ourData = JSON.parse(xhr.responseText);
*/
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
                text: "Product Price by Date"
            },
            axisY: {
                title: "Price in DH",
                valueFormatString: "#0,,.",
                suffix: "",
                prefix: "DH"
            },
            data: [{
                type: "splineArea",
                color: "rgba(54,158,173,.7)",
                markerSize: 5,
                xValueFormatString: "YYYY",
                yValueFormatString: "DH#,##0.##",
                dataPoints: [
                    {x: new Date(2018, 9), y: 3289000},
                    {x: new Date(2018, 10), y: 3830000},
                    {x: new Date(2018, 11), y: 2009000},
                    {x: new Date(2018, 12), y: 2840000},
                    {x: new Date(2019, 1), y: 2396000},
                    {x: new Date(2019, 2), y: 1613000},
                    {x: new Date(2019, 3), y: 2821000},
                    {x: new Date(2019, 4), y: 2000000},
                    {x: new Date(2019, 5), y: 1397000},
                    {x: new Date(2019, 6), y: 2506000},
                    {x: new Date(2019, 7), y: 2798000},
                    {x: new Date(2019, 8), y: 3386000},
                    {x: new Date(2019, 9), y: 6704000},
                    {x: new Date(2019, 10), y: 6026000},
                    {x: new Date(2019, 11), y: 2394000},
                    {x: new Date(2019, 12), y: 1872000},
                    {x: new Date(2020, 1), y: 2140000}
                ]

    }]
    });
        chart.render();

    });


}

/*var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
        text: "Company Revenue by Year"
    },
    axisY: {
        title: "Revenue in USD",
        valueFormatString: "#0,,.",
        suffix: "mn",
        prefix: "$"
    },
    data: [{
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        markerSize: 5,
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,##0.##",
        ourData[2].product.id,
        dataPoints: [
            for (i = 0; i < ourData.length; i++)
            {

                if (ourData[i].product.id)
                    {
                        x: new Date(ourData[i].date.getFullYear(),
                            ourData[i].date.getMonth(),
                            ourData[i].date.getDate(),
                            ourData[i].date.getHours(),
                            ourData[i].date.getMinutes(),
                            ourData[i].date.getSeconds()),
                        y : ourData[i].newPrice
                    }

                if (i = !(ourData.length) - 1)
                    {
                         +virgule
                    }
            }
            ]*/


