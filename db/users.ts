// @ts-ignore
import * as fs from 'fs';

export type User = {
    name: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
    quote: string;
    text: string;
    github: string;
    linkedin: string;
}

export function getUsers(): User[] {
    const profiles = fs.readdirSync("./public/assets/profiles")
    const users: User[] = [];

    for (const folder in profiles) {
        const profile = profiles[folder];
        const data = fs.readFileSync(`./public/assets/profiles/${profile}/${profile}.txt`, 'utf-8').split('\n');

        let user: Omit<User, 'avatar'> = {
            name: data[0]?.split(':')[1]?.trim() ?? '',
            email: data[1]?.split(':')[1]?.trim() ?? '',
            password: data[2]?.split(':')[1]?.trim() ?? '',
            role: data[3]?.split(':')[1]?.trim() ?? '',
            quote: data[4]?.split(':')[1]?.trim() ?? '',
            text: data[5]?.split(':')[1]?.trim() ?? '',
            linkedin: data[6]?.split(/:(.+)/)[1]?.trim() ?? '',
            github: data[7]?.split(/:(.+)/)[1]?.trim() ?? '',
        }

        user = {
            ...user,
            avatar: `../assets/profiles/${profile}/pic.jpeg`
        } as User;
        users.push(user as User);
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