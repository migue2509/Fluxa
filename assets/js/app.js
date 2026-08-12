/* =========================================================
   FLUXA - VALIDACIÓN DEL FORMULARIO DE TAREAS
   ========================================================= */


/* =========================================================
   ELEMENTOS DEL DOM
   ========================================================= */

/*
 * Obtenemos el formulario principal.
 */
const createTaskForm = document.querySelector('#createTaskForm');


/*
 * Campo: nombre de la tarea.
 */
const newTaskNameInput = document.querySelector('#taskTitle');


/*
 * Campo: descripción.
 */
const newTaskDescriptionInput = document.querySelector(
    '#taskDescription'
);


/*
 * Campo: fecha de entrega.
 */
const newTaskDateInput = document.querySelector('#taskDate');


/*
 * Campo: estado.
 */
const newTaskStatusInput = document.querySelector('#taskStatus');


/*
 * Alerta de validación.
 */
const taskValidationAlert = document.querySelector(
    '#taskValidationAlert'
);


/* =========================================================
   FUNCIÓN DE VALIDACIÓN
   ========================================================= */

/**
 * Valida los campos obligatorios de una tarea.
 *
 * @param {Object} data - Información de la tarea.
 * @returns {boolean} true si los datos son válidos.
 */
function validFormFieldInput(data) {

    /*
     * Validamos el nombre.
     * trim() elimina espacios innecesarios.
     */
    if (data.name.trim() === '') {

        return false;

    }


    /*
     * Validamos la descripción.
     */
    if (data.description.trim() === '') {

        return false;

    }


    /*
     * Validamos la fecha.
     */
    if (data.date === '') {

        return false;

    }


    /*
     * Validamos el estado.
     */
    if (data.status === '') {

        return false;

    }


    /*
     * Si ningún campo falló,
     * los datos son válidos.
     */
    return true;

}


/* =========================================================
   ENVÍO DEL FORMULARIO
   ========================================================= */

createTaskForm.addEventListener('submit', function (event) {

    /*
     * Evitamos que el formulario
     * recargue la página.
     */
    event.preventDefault();


    /* =====================================================
       OBTENER VALORES
       ===================================================== */

    const name = newTaskNameInput.value;

    const description = newTaskDescriptionInput.value;

    const date = newTaskDateInput.value;

    const status = newTaskStatusInput.value;


    /* =====================================================
       COMPROBAR DATOS EN CONSOLA
       ===================================================== */

    console.log('name:', name);

    console.log('description:', description);

    console.log('date:', date);

    console.log('status:', status);


    /* =====================================================
       CREAR OBJETO DE DATOS
       ===================================================== */

    const taskData = {

        name: name,

        description: description,

        date: date,

        status: status

    };


    console.log('taskData:', taskData);


    /* =====================================================
       VALIDAR INFORMACIÓN
       ===================================================== */

    const isValid = validFormFieldInput(taskData);


    /* =====================================================
       MOSTRAR / OCULTAR ALERTA
       ===================================================== */

    if (!isValid) {

        /*
         * Los datos son inválidos.
         * Mostramos la alerta.
         */
        taskValidationAlert.classList.remove('d-none');

        return;

    }


    /*
     * Los datos son válidos.
     * Ocultamos la alerta.
     */
    taskValidationAlert.classList.add('d-none');


    /*
     * Por ahora solamente comprobamos
     * que la información sea válida.
     */
    console.log('Formulario válido:', taskData);

});