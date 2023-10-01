export function filterUsers(items: Array<object>, filter: string): Array<object> {
    if (!Array<object>) {
        return new Array<object>()
    }
    const filteredUsers: Array<object> = []
    for (let item of items) {
        if (item.name.toLowerCase().includes(filter.toLowerCase())) {
            filteredUsers.push(item);
        }
    }
    return filteredUsers
}