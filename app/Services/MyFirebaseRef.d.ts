declare module App.Services {
    class MyFirebaseRef {
        private config;
        private firebase;
        private databaseRef;
        homeDatabaseRef: Firebase;
        aboutDatabaseRef: Firebase;
        serviceDatabaseRef: Firebase;
        projectsDatabaseRef: Firebase;
        reviewsDatabaseRef: Firebase;
        blogDatabaseRef: Firebase;
        contactDatabaseRef: Firebase;
        storageRef: any;
        constructor();
    }
}
