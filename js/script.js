document.getElementById('addTaskButton').addEventListener('click', 
	
	function() {
    // Récupération de la tache dans le champs taskImput //////////////////////////////////////////////////
    let taskInput = document.getElementById('taskInput');
    let tache = taskInput.value;

    // Vérif si le champs task Imput est vide //////////////////////////////////////////////////
    if (tache === '') { 
		alert("Veuillez entrer une tâche.");
        return;
    }

    // Création li //////////////////////////////////////////////////
    let tacheli = document.createElement('li');
    tacheli.textContent = tache;
	
	// Bouton supprimer une tache //////////////////////////////////////////////////
    let boutonsup = document.createElement('button');
    boutonsup.textContent = 'Supprimer';
	boutonsup.classList.add('boutonsup');
    boutonsup.addEventListener('click', 
			function() { 
                tacheli.remove(); 
            }
	);

    tacheli.appendChild(boutonsup);

    // Ajout de la tâche dans le li //////////////////////////////////////////////////
	document.getElementById('taskList').appendChild(tacheli);

    // On vide le champ input //////////////////////////////////////////////////
    taskInput.value = '';
});