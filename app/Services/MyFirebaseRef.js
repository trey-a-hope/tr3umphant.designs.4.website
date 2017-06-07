var App;
(function (App) {
    var Services;
    (function (Services) {
        var MyFirebaseRef = (function () {
            function MyFirebaseRef() {
                this.config = ({
                    apiKey: "AIzaSyAMonlIeAmbE_E2k0yoxCnfksuwqaAIeG0",
                    authDomain: "treyahope-5bd81.firebaseapp.com",
                    databaseURL: "https://treyahope-5bd81.firebaseio.com",
                    projectId: "treyahope-5bd81",
                    storageBucket: "treyahope-5bd81.appspot.com"
                });
                firebase.apps.length === 0 ? this.firebase = firebase.initializeApp(this.config) : this.firebase = firebase.apps[0];
                this.databaseRef = this.firebase.database().ref();
                this.homeDatabaseRef = this.databaseRef.child('Home');
                this.aboutDatabaseRef = this.databaseRef.child('About');
                this.serviceDatabaseRef = this.databaseRef.child('Service');
                this.projectsDatabaseRef = this.databaseRef.child('Projects');
                this.reviewsDatabaseRef = this.databaseRef.child('Reviews');
                this.blogDatabaseRef = this.databaseRef.child('Blog');
                this.contactDatabaseRef = this.databaseRef.child('Contact');
                this.storageRef = this.firebase.storage().ref();
            }
            return MyFirebaseRef;
        }());
        Services.MyFirebaseRef = MyFirebaseRef;
        angular.module('tr3umphant-designs').service('MyFirebaseRef', MyFirebaseRef);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=MyFirebaseRef.js.map