import {BehaviorSubject} from 'rxjs';

export default class Auth {
    constructor() {
        this.user = undefined;
        this.postsLiked = new BehaviorSubject([]);
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    checkLoggedIn() {
        return this.user !== undefined;
    }

    signOut() {
        this.user = undefined;
    }

    addLikedPosts(posts) {
        this.postsLiked.next(posts);
    }
}