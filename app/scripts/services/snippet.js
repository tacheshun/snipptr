'use strict';

app.factory('Snippet', function ($firebaseArray, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    /*
    As of AngularFire v1.0.0 we can now instantiate $firebaseArray directly.
    See this guide: https://www.firebase.com/docs/web/libraries/angular/guide/migration-guides.html
     */
    var snippets = $firebaseArray(ref);
    var Snippet = {
        all: snippets,
        create: function (snippet) {
            return snippets.$add(snippet);
        },
        get: function (snippet) {
            return snippets.$getRecord(snippet);
        },
        remove: function (snippet) {
            return snippets.$remove(snippet);
        }
    };

    return Snippet;
});