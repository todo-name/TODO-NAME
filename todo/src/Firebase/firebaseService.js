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

    getRecent() {
        return this.getAll().then(data => {
            return data.sort((a, b) => {
                let dateA = new Date(a.time_posted); 
                let dateB = new Date(b.time_posted);
                return dateA > dateB ? -1 : dateA < dateB ? 1 : 0; 
            });
        });
    }
}