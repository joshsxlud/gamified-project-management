# Architectural Decisions Josh Salud

This document outlines the design choices made in sprint 3. It outlines *hooks*, *service*, and *repositories* created by Josh Salud.

Each implementation includes:

- Purpose / function of the implementation,
- What logic is included in the implementation and why,
- and where its used.

## Hook: `useTask()`

### Hook Function

- Provides a state that can be updated from UI components.
- Allows for UI changes to be made, without exposing any data-access or business logic.

### Hook Logic

- `useTask()` holds the state of Tasks that are passed to a component e.g. `CreateTaskWidget`.
- This hook is "in charge" of the data that is shown to the user, and calls the appropriate repository function depending what methods are invoked from the user.
  - Depending on the user input e.g. task addition, task deletion.
  - Repository is not directly modified with the hook, but rather the repository function is called via the service associated with it.

### Hook Usage

This hook is used in:

- `CreateTaskWidget`
  - When the form to create a new task is submitted, this hook is invoked with the `createTask()` function.
  - The state is updated via the hook once a task is added.

- `MyTasksWidget`
  - When displaying all tasks, the hook is invoked using the `tasks` state.
  - The `deleteTask` function is used to remove a task.

## Service: `taskService`

### Service Function

- Provides a connection between the presentation and repository layer, only handling any business logic / requirements.
- Invokes the associated repository function.

### Service Logic

- Provides an interface to interact with the repository.
- Performs basic validation on inputs before calling the associated repository function.
- Returns validated results back to the hook (`useTask`) that called it.
- Separates concern between presentation (hook) and repository layer.
  - Allows for how the data is accessed and how its used to be separate / changed without affecting the other layers.

### Service Usage

- Used by the `useTasks()` hook to call the service methods.

  - Then calls the associated repository method.

## Repository: `TaskRepo`

### Repository Function

- Provides an interface for data access.
- Allows for CRUD operations to be done on the repository.

### Repository Logic

- This layer is only responsible for data access to the repository.
- Does not do any validation, since this is done in the service layer.
- This enforces the separation of concerns between each layer.

### Repository Usage

- Used by the `taskService`.
  - Allows for repository functions to be called.
