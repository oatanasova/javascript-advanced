function createAssemblyLine() {

    function hasClima(myCar) {
        myCar.temp = 21;
        myCar.tempSettings = 21;

        myCar.adjustTemp = function () {
            if (myCar.temp < myCar.tempSettings) {
                myCar.temp++;
            } else if (myCar.temp > myCar.tempSettings) {
                myCar.temp--;
            }
        };

        return myCar;
    }

    function hasAudio(car) {
        car.currentTrack = null;

        car.nowPlaying = function () {
            if (car.currentTrack !== null) {
                console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
            }
        };

        return car;
    }

    function hasParktronic(car) {
        car.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (distance < 0.5) {
                console.log('Beep!');
            } else {
                console.log('');
            }
        };

        return car;
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
//...//
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
//...//
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
//...//
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
//...//
console.log(myCar);
