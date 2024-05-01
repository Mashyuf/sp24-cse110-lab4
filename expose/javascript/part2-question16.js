let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(car in statistics) {
    let name = car.toString();
    if (name.startsWith('r') || (statistics[car]%2) !== 0) {
        console.log(statistics[car]);
    }
};