const User = {
    name: 'John',
    email: 'anshal@gmail.com',
    isActive: true,
}

function createUser({name: string, isPaid:boolean}){

}

// createUser({name: 'Anshal', isPaid: true, email: 'anshal'})
let user = {name: 'Anshal', isPaid: true, email: 'anshal'}  // it should stop me from creating this object
createUser(user)

// function createCourse():{}{
//     return {}
// }


function createCourse():{name: string, price: number}{
    return {name: 'Anshal', price: 100}
}


export {}