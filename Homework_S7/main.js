let btnAdd = document.querySelector(".table i");
let tableList = document.querySelector("table");
let count = document.querySelector("span p");

let currentCount = 0;

const updateCount = (number) => {
  currentCount = number;
  count.innerText = currentCount;
};

const removeRow = (button) => {
  let row = button.parentElement.parentElement;
  row.remove();

  updateCount(currentCount - 1);
};

const click = () => {
  let newRow = document.createElement("tr");
  newRow.classList.add("student-row");

  newRow.innerHTML = `
          <td class="number">
            <input type="text" id="number" name="number" />
          </td>
          <td class="name"><input type="text" id="name" name="name" /></td>
          <td class="birth"><input type="text" id="birth" name="birth" /></td>
          <td class="phone"><input type="text" id="phone" name="phone" /></td>
          <td class="remove"><button class="btn-delete" onclick="removeRow(this)">X</button></td>
        `;

  tableList.appendChild(newRow);

  updateCount(currentCount + 1);
};

btnAdd.onclick = click;
