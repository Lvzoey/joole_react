export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    // if (user && user.accessToken) {
    //     return { Authorization: 'Bearer ' + user.accessToken };
    // } else {
    //     return {};
    // }
    if (user) {
        return { Authorization: 'Bearer ' + user };
    } else {
        return {};
    }
}