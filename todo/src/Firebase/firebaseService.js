import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("posts");
    }

    add(data) {
        return this.db.add(data);
    }

    flag(post) {
        this.db.doc(post.keys[0]).set({
            flagged: true
        }, {merge: true});
    }

    get(pid) {
        let data = {}
        return this.db.where("pid", "==", pid).get().then(
            snapshot => {
                snapshot.forEach(snap => data[snap.id] = snap.data());
                return data;
            }
        );
    }

    getAll() {
        let data = {}
        return this.db.get().then(
            snapshot => {
                let i = 0;
                snapshot.forEach(snap => {
                    data[snap.id] = snap.data();
                    i++;
                });
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