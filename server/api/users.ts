import {getUsers} from "~/db/users";

export default defineEventHandler(event => {
    return {
        statusCode: 200,
        users: getUsers()
    }
})