const { Random, Console } = require('@woowacourse/mission-utils');
const Car = require('./Car');

async function startRace() {
    const carNames = (await Console.readLineAsync('경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분): ')).split(',');
    for (const name of carNames) {
        if (name.length > 5) {
            throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력하세요.");
        }
    }
}

module.exports = startRace;