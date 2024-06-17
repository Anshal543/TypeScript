
type User = {
    name: string,
    email: string,
    isAdmin: boolean
}

// type myString = string

function createUser(user:User):User{
    return {name: user.name, email: user.email, isAdmin: user.isAdmin}
}

const userResult = createUser({name: 'John', email: 'anshal@gmail.com', isAdmin: true})
console.log(userResult);

export {}