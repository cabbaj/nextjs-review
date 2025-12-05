## Basic NextJS

### Client component

- Use for useState, useEffect (lifecycle)
- Event handler (onClick, onChange)

### Server component (NextJS use this by default)

- Use for Fetch data or API

---

### loading.js

- This page will show while page loading

### error.js

- This page will show when error occur

### Params (This is Promise)

- When get data from params you must use async-await
- Can use destructuring like this const { id } = await params;

### Image

- Use \<Image \/\>
- If use external URL should be configure in next.config.ts file
- If not use by define path

## Backend

### CRUD have 2 way to use

- Client-Side it will use useState and call api to backend
- Server-side it will use external function to handle it and client-side send fomData to server-side

### revalidatePath(“/path”)

- Use for clear the data cache

### useActionState() ex.form page

to show users feedback

- Use for access the return from function

**Output:**

- “message” is value of return from createUser function (“User Created”)
- “formAction” use on when submitted it will call createUser function

**Input:**

- “createUser” is function what you want to call
- “null” is initialState of message
- Must to define “prevState”
- Value of prevState is null before submit because we define to null on useActionState

### useFormStatus()

Inform status from form like a pending
- Use for component inside form like a button
- This is data of this function

### Utils Folder

it's a server action that handles form submission, and actions in app.  
you can store the function external and import to use in client component, you dont need to use useState for store the value to show you can show value that received from server action
- Use for store the function for import to use
- POST

### Api folder

it's route handlers
- Use for store api handlers
- call via http request
- GET, POST

### {} = destructuring

Use for select function or variable you want to use by specific
- That object have many properties so you want to choose what you want

### Proxy (middleware)

Every path will check by middleware
- It’s on top level of project
