const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".price");
    
    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        totalPrice += parseInt(priceElement.textContent);
    });
    
    const existingTotalRow = document.querySelector(".total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.className = "total-row";
    
    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = `Total Price: ${totalPrice}`;
    
    newRow.appendChild(cell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

