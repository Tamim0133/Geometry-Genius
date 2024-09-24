function areaCalculateTriangle()
{
    const baseValue = document.getElementById("baseTriangle").value;
    const heightValue = document.getElementById("heightTriangle").value;

    const baseNumber = parseInt(baseValue);
    const heightNumber = parseInt(heightValue);

    if (isNaN(baseNumber) || isNaN(heightNumber) || baseNumber <= 0 || heightNumber <= 0) {

        alert("Please enter valid positive integer values for both base and height.");
     
    } 
    else {

        const area = baseNumber * heightNumber;
        document.getElementById("areaResultTriangle").innerText = area;
        document.getElementById("inputBaseTriangle").innerText = baseNumber;
        document.getElementById("inputHeightTriangle").innerText = heightNumber;

        console.log("Base: ", baseNumber, "cm");
        console.log("Height: ", heightNumber, "cm");
        console.log("Area: ", area, "cm²");

        addToHistory('Triangle', baseNumber, heightNumber, area);

    }

    document.getElementById("baseTriangle").value = '';
    document.getElementById("heightTriangle").value = '';


    console.log(baseValue);
    console.log(heightValue);
}

function areaCalculateRectangle()
{
    const baseValue = document.getElementById("baseRectangle").value;
    const heightValue = document.getElementById("heightRectangle").value;

    const baseNumber = parseInt(baseValue);
    const heightNumber = parseInt(heightValue);

    if (isNaN(baseNumber) || isNaN(heightNumber) || baseNumber <= 0 || heightNumber <= 0) {

        alert("Please enter valid positive integer values for both base and height.");
      
    } 
    else {

        const area = baseNumber * heightNumber;
        document.getElementById("areaResultRectangle").innerText = area;
        document.getElementById("inputBaseRectangle").innerText = baseNumber;
        document.getElementById("inputHeightRectangle").innerText = heightNumber;

        console.log("Base: ", baseNumber, "cm");
        console.log("Height: ", heightNumber, "cm");
        console.log("Area: ", area, "cm²");

        addToHistory('Rectangle', baseNumber, heightNumber, area);

    }
    document.getElementById("baseRectangle").value = '';
    document.getElementById("heightRectangle").value = '';



    console.log(baseValue);
    console.log(heightValue);
}
function areaCalculateParallelogram()
{
    const baseValue = document.getElementById("baseParallelogram").value;
    const heightValue = document.getElementById("heightParallelogram").value;


    const baseNumber = parseInt(baseValue);
    const heightNumber = parseInt(heightValue);

    if (isNaN(baseNumber) || isNaN(heightNumber) || baseNumber <= 0 || heightNumber <= 0) {

        alert("Please enter valid positive integer values for both base and height.");
    
    } 
    else {

        const  area = baseNumber * heightNumber;
        document.getElementById("areaResultParallelogram").innerText = area;
        document.getElementById("inputBaseParallelogram").innerText = baseNumber;
        document.getElementById("inputHeightParallelogram").innerText = heightNumber;

        console.log("Base: ", baseNumber, "cm");
        console.log("Height: ", heightNumber, "cm");
        console.log("Area: ", area, "cm²");
        addToHistory('Parallelogram', baseNumber, heightNumber, area);
    }
    document.getElementById("baseParallelogram").value = '';
    document.getElementById("heightParallelogram").value = '';




    console.log(baseValue);
    console.log(heightValue);
}

function addToHistory(shape, base, height, area) {
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('li');
    historyItem.textContent = `Shape: ${shape}, Base: ${base} cm, Height: ${height} cm, Area: ${area} cm²`;
    historyList.appendChild(historyItem);
}