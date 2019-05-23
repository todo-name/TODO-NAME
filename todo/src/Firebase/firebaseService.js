import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("posts");
    }

    add(data) {
        return this.db.add(data);
    }

    get(name) {
        let data = []
        return this.db.where("pid", "==", name).get().then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }

    getAll() {
        let data = []
        return this.db.get().then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }
}