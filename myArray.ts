const superHero: string[] = [];
// const heroPower: number[] = []
const heroPower: Array<number> = []

superHero.push('Thor');
heroPower.push(100);
// console.log(superHero,heroPower);

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];
allUsers.push({name: 'Thor', isActive: true});