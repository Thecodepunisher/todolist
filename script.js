/*--------------PRENDIAMO GLI ELEMENTI DELLA PAGINA--------------------*/
const taskInput = document.getElementById("taskinput");
const addTaskButton = document.getElementById("addtask");
const taskList = document.getElementById("tasklist");
const categorySelect = document.getElementById("categoryselect");


/*--------------AGGIUNTA TASK CON INVIO--------------------*/
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});


/*--------------ANIMAZIONE PULSANTE AGGIUNGI--------------------*/
addTaskButton.addEventListener("click", function() {
    addTaskButton.classList.add("animate");

    setTimeout(() => {
        addTaskButton.classList.remove("animate");
    }, 400);
});


/*--------------QUANDO CLICCO IL PULSANTE AGGIUNGE UNA TASK--------------------*/
addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim(); // Serve a prendere il testo che scriviamo

    if (taskText === "") return; // Serve ad evitare i vuoti

    const li = document.createElement("li"); // Crea un nuovo elemento li
    li.textContent = taskText; // Ci mette il testo scritto

    /*--------------CREA UNA CHECKBOX--------------------*/ 
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.style.textDecoration = "line-through";
            li.style.color = "black";
        } else {
            li.style.textDecoration = "none";
            li.style.color = "black";
        }
    });
    
    /*--------------CREIAMO IL BOTTONE ELIMINA--------------------*/ 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina Task";
    deleteButton.classList.add("delete-button");

    /*--------------QUANDO CLICCO IL BOTTONE ELIMINA LA TASK--------------------*/ 
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    const categoria = categorySelect.value;
    li.textContent = taskText + " (" + categoria + ")";
    li.appendChild(deleteButton); // Aggiunge il bottone dentro la li
    li.prepend(checkbox);
    
    taskList.appendChild(li); // Aggiunge la li (con bottone) alla lista
    taskInput.value = ""; // Serve a pulire il campo
});