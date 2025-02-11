function addtask_btn() {
    var task_title = document.getElementById("c_title").value;
    var description = document.getElementById("c_description").value;
    var due_date = document.getElementById("c_due_date").value;

    if (task_title === "" || description === "" || due_date === "") {
        alert("Please check your details.");
        return;
    }
    var taskList = document.querySelector("#taskList tbody");
    var newRow = taskList.insertRow();
    newRow.innerHTML = `<td>${task_title}</td>
                        <td>${description}</td>
                        <td>${due_date}</td>
                        <td>
                            <button onclick="editRow(this)">Edit</button>
                            <button onclick="deleteRow(this)">Delete</button>
                        </td>`;
    var form_items = JSON.parse(localStorage.getItem('form_items')) || [];
    form_items.push({ task_title, description , due_date});
    localStorage.setItem('form_items', JSON.stringify(form_items));

    document.getElementById("c_title").value = "";
    document.getElementById("c_description").value = "";
    document.getElementById("c_due_date").value = "";
    }
        let selectedRow = null;
        function editRow(button) {
            selectedRow = button.parentElement.parentElement;
            document.getElementById("u_title").value = selectedRow.cells[0].textContent;
            document.getElementById("u_description").value = selectedRow.cells[1].textContent;
            document.getElementById("u_due_date").value = selectedRow.cells[2].textContent;

            document.getElementById("update_form").style.display = "block";
            document.getElementById("create_form").style.display = "none";
        }
        function updateRow() {
            let task_title = document.getElementById("u_title").value;
            let description = document.getElementById("u_description").value;
            let due_date = document.getElementById("u_due_date").value;

            if (task_title === "" || description === "" || due_date === "") {
                alert("Please check your details.");
                return;
            }
            selectedRow.cells[0].textContent = task_title;
            selectedRow.cells[1].textContent = description;
            selectedRow.cells[2].textContent = due_date;

            let form_items = JSON.parse(localStorage.getItem('form_items')) || [];
            form_items.forEach((item, index) => {
                if (item.task_title === selectedRow.cells[0].textContent) {
                    form_items[index] = { task_title, description, due_date };
                }
            });
            localStorage.setItem('form_items', JSON.stringify(form_items));
            document.getElementById("update_form").style.display = "none";
            document.getElementById("create_form").style.display = "block";
        }
        function deleteRow(button) {
            let row = button.parentElement.parentElement;
            let task_title = row.cells[0].textContent;
            let form_items = JSON.parse(localStorage.getItem('form_items')) || [];
            form_items = form_items.filter(item => item.task_title !== task_title);
            localStorage.setItem('form_items', JSON.stringify(form_items));
            row.remove();
        }
        function loadStoredItems() {
            let form_items = JSON.parse(localStorage.getItem('form_items')) || [];
            let taskList = document.querySelector("#taskList tbody");
            if (form_items.length === 0) {
                return;
            }
    form_items.forEach(item => {
        var newRow = taskList.insertRow();
        newRow.innerHTML = `
            <td>${item.task_title}</td>
            <td>${item.description}</td>
            <td>${item.due_date}</td>
            <td>
                <button onclick="editRow(this)">Edit</button>
                <button onclick="deleteRow(this)">Delete</button>
            </td>`;
    });
}
window.onload = loadStoredItems;