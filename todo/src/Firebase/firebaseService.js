import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("posts");
        this.pldb = firebase.firestore().collection("postsLiked");
    }

    add(data) {
        return this.db.add(data);
    }

    flag(pid, reportInfo) {
        this.db.doc(pid).set(reportInfo, {merge: true});
    }

    get(pid) {
        return this.db.get().then(
            snapshot => {
                let data = ''
                snapshot.forEach(snap => {
                    if (snap.id == pid) {
                        return snap.data()
                    }
                });
                return data
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

    likePost(post, uid) {
        return new Promise((resolve, reject) => {
            let likes;
            let key = Object.keys(post)[0];
            let doc = this.db.doc(key)
            doc.get().then(snapshot => {
                likes = snapshot.data().likes + 1;
                doc.set({
                    likes: likes
                }, {merge: true})
                .then(() => {
                    this.pldb.add({
                        "pid": key,
                        "uid": uid
                    }).then(() => resolve(likes))
                });
            });
        });
    }

    unlikePost(post, uid) {
        return new Promise((resolve, reject) => {
            let likes;
            let key = Object.keys(post)[0];
            let doc = this.db.doc(key)
            doc.get().then(snapshot => {
                likes = snapshot.data().likes - 1;
                doc.set({
                    likes: likes
                }, {merge: true})
                .then(() => {
                    this.pldb.where("pid", "==", key).where("uid", "==", uid).get().then(snapshots => {
                        this.pldb.doc(snapshots.docs[0].id).delete().then(() => resolve(likes));
                    })
                })
            });
        });
    }

    getRecent() {
        return this.getAll().then(data => {
            return data.sort((a, b) => {
                a = a[Object.keys(a)[0]];
                b = b[Object.keys(b)[0]];
                let dateA = new Date(a.time_posted.seconds); 
                let dateB = new Date(b.time_posted.seconds);
                return dateA > dateB ? -1 : dateA < dateB ? 1 : 0; 
            });
        });
    }

    getLikedPosts(uid) {
        let data = [];
        return this.pldb.where("uid", "==", uid).get().then(
            snapshots => {
                snapshots.forEach(snap => {
                    data.push(snap.data().pid);
                })
                return data;
            }
        )
    }
}