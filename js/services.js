angular.module('sol.services', [])

/**
* A simple example service that returns some data.
*/
.factory('Rozvrh', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var rozvrh = [
        { id: 0, obdobiDne: '0.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 1, obdobiDne: '1.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 2, obdobiDne: '2.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 3, obdobiDne: '3.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 4, obdobiDne: '4.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 5, obdobiDne: '5.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 6, obdobiDne: '6.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 7, obdobiDne: '7.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 8, obdobiDne: '8.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 9, obdobiDne: '9.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' },
        { id: 10, obdobiDne: '10.', casKonani: '08:00-08:45', zkratka: 'ČJL', nazev: 'Český jazyk a literatura', info: 'UC1, 3.A' }
    ];



    return {
        all: function () {
            return rozvrh;
        },
        get: function (id) {
            // Simple index lookup
            return rozvrh[id];
        }
    }
});