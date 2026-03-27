# Architectural Decisions Ronen Begelfor

This document outlines the design choices made in sprint 3. It outlines *hooks*, *services*, and *repositories* created by Ronen Begelfor.

Each implementation includes:

- Purpose / function of the implementation,
- What logic is included in the implementation and why,
- and where its used.

## Service: `groupService`

### Service Function

- Provides a connection between the presentation and repository layers. Only handles business logic.
- Invokes the associated repository function.

### Service Logic

- Provices a source of communication between the interface and the repository.
- Should perform basic validation before receiving the data from the repository.
- Returns the validated results wherever used.

### Service Usage

- Used by `useDepartments()` hook to call the service methods.

## Repository: `groupRepo`

### Repository Function

- Provides an interface for data access.
- Allows for CRUD operations to be done on the repository.

### Repository Logic

- This layer is only responsible for data access to the repository.
- Does not do any validation, since this is done in the service layer.
- This enforces the separation of concerns between each layer.

### Repository Usage

- Used by the `groupService`.
  - Allows for repository functions to be called.

## Hook: `useInput()`

### Hook Function

- Accepts an `input` configuration of type `myInputType`
- Returns:
  - `value` - current input value
  - `error` - validation error message
  - `isSubmitting` - submission state
  - `onChange` - handler which updates the input value
  - `handleSubmit` - function to validate and submit the input

### Hook Logic

- `useInput()` holds the state of the user's input within a form.
- The hook validates the user's input as well, ensuring the provided input is allowed.
- In the future, the hook will verify whether an entry exists or not within the repository.

### Hook Usage

- Currently the hook is only used in `DepartmentForm`, as a test, but later on can be used in any other page which involved the use of a form.
