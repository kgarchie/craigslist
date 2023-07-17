// @ts-ignore
import * as fs from 'fs';

type User = {
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    quote: string;
    text: string;
}

export function getUsers(): User[] {
    const profiles = fs.readdirSync("./src/assets/profiles")
    const users: User[] = [];

    for (const folder in profiles) {
        const profile = profiles[folder];
        const data = fs.readFileSync(`./src/assets/profiles/${profile}/${profile}.txt`, 'utf-8').split('\n');
        const user: User = {
            name: data[0].split(':')[1].trim() ?? '',
            email: data[1].split(':')[1].trim() ?? '',
            password: data[2].split(':')[1].trim() ?? '',
            role: data[3].split(':')[1].trim() ?? '',
            quote: data[5].split(':')[1].trim() ?? '',
            text: data.slice(data.findIndex((line: string) => line.includes(':')) + 1).join('\n').trim() ?? ''
        }

        user.avatar = `../assets/profiles/${profile}/pic.jpg`;

        users.push(user);
    }

    return users;
}

export function getUser(email: string): User | undefined {
    const users = getUsers();
    return users.find(user => user.email === email);
}


export function authenticate(email: string, password: string): User | undefined {
    const user = getUser(email);
    if (user && user.password === password) {
        return user;
    }
    return undefined;
}