import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
    user = null;
    constructor() {
        this.user = JSON.parse(localStorage.getItem("user"));
     }

    setUser(userdata) {
        console.log(userdata);
        this.user = userdata;
        localStorage.setItem('user', JSON.stringify(this.user));
    }

    isLoggedIn(): boolean {
        return !!this.user;
    }
}
