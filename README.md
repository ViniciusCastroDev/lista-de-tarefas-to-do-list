
# Lista de tarefas / to-do list

# [PT-BR]

- O código inicia criando as variáveis de input, button e container, através do DOM (Modelo de Objeto de Documento).
- Em seguida, é criada a primeira função validateInput() que valida se o valor do elemento de entrada, após o corte do espaço em branco, for maior que 0, então retorne verdadeiro,
  caso contrário, retorne falso.
- A segunda função a ser criada, chama-se handleAddTask(). Seu objetivo é criar um novo item de tarefa, adicioná-lo ao DOM e atualizar o armazenamento local do navegador. 
  A função retorna o que foi digitado no input, o 'value'. Contudo, antes de criar a nova tarefa, utilizamos a primeira função validateInput() para verificar se existe preenchimento e se não houver, adiciona uma classe 'error' através do CSS no campo input e retorna a função.
- A próxima função, handleClick(), valida quando uma atividade é concluída, adicionando uma classe no CSS. Quando uma tarefa é clicada, alterna a classe 'concluída' no conteúdo da tarefa.
- A função handleDeleteClick(taskItemContainer, taskContent), valida se a tarefa que está sendo clicada (a ser excluída) for a mesma que está sendo iterada(comparada), remova a tarefa do DOM.
  @parametro taskItemContainer - o div que contém o conteúdo da tarefa e o botão de exclusão. 
  @parametro taskContent - o texto da tarefa 
- A função handleInputChange(), valida qualquer alteração no campo 'input', para remover a classe 'error' do CSS.
- A função updateLocalStorage(), converte em uma matriz de objetos e armazena as tarefas preenchidas do DOM no armazenamento local do navegador.
- Caso o usuário feche o navegador ou atualize a página, a função refreshTasksUsingLocalStorage() retorna as informações anteriormente preenchidas na tela. Ela pega as tarefas do armazenamento local, cria uma 'div' para cada tarefa, adiciona um elemento 'p' para a descrição, adiciona 'eventListener' de clique ao elemento 'p', adiciona um ícone de exclusão, adiciona um 'eventListener' de clique
  listener a ele, e anexa a 'div' ao contêiner de tarefas.
- Para finalizar, é chamada a função refreshTasksUsingLocalStorage() e adicionamos um 'eventListener' de clique no botão de adicionar tarefas, chamando a função handleAddTask().
  Adicionamos também um 'eventListener' de mudança(change) no campo 'input' das tarefas, chamando a função handleInputChange().

# [EN]

- The code starts by creating the input, button and container variables, through the DOM (Document Object Model).
- Next, the first validateInput() function is created that validates if the value of the input element, after cutting the white space, is greater than 0, so return true,
  otherwise return false.
- The second function to be created is called handleAddTask(). Its purpose is to create a new task item, add it to the DOM, and update the local storage.
  The function returns what was typed in the input, the 'value'. However, before creating the new task, we use the first function validateInput() to check if there is a padding and if not, add an 'error' class through CSS in the input field and return the function.
- The next function, handleClick(), validates when an activity is completed by adding a class in the CSS. When a task is clicked, toggles the 'completed' class in the task's content.
- The handleDeleteClick(taskItemContainer, taskContent) function, validates if the task being clicked (to be deleted) is the same one being iterated over (compared), remove the task from the DOM.
  @parameter taskItemContainer - the div that contains the task content and the delete button.
  @parameter taskContent - the task text
- The handleInputChange() function, validates any change in the 'input' field, to remove the 'error' class from the CSS.
- The updateLocalStorage() function, converts to an array of objects and stores the populated DOM tasks in the local storage.
- If the user closes the browser or refreshes the page, the refreshTasksUsingLocalStorage() function returns the information previously filled in on the screen. It takes tasks from local storage, creates a 'div' for each task, adds a 'p' element to the description, adds a click 'eventListener' to the 'p' element, adds a delete icon, adds an 'eventListener' of click
  listener to it, and appends the 'div' to the task container.
- Finally, the refreshTasksUsingLocalStorage() function is called and we add a click 'eventListener' to the add tasks button, calling the handleAddTask() function.
  We also added a change 'eventListener' in the 'input' field of the tasks, calling the handleInputChange() function.
