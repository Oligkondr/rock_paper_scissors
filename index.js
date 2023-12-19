import readlineSync from 'readline-sync';
import {check, converting, enemyWeapons} from './src.js';

const game = () => {
    console.log('Hello! It\'\s rock paper scissors game!');
    console.log('You need to choose, rock, paper or scissors. And hopes for your luck!');

    const rounds = readlineSync.question('How many rounds do you want: ');

    console.log('Lets start!');

    let x = 1;
    while (x <= rounds) {
        console.log(`Round ${x}`);
        const enemyWeapon = enemyWeapons();

        console.log(enemyWeapon); // !!!Отладочный вывод!!!

        let gamerWeapon = readlineSync.question('Choose your weapon: ');
        gamerWeapon = converting(gamerWeapon);

        console.log(gamerWeapon); // !!!Отладочный вывод!!!

        if (gamerWeapon == 4) {
            return 'You brock rule of the game!';
        }

        const winner = check(enemyWeapon, gamerWeapon);
        console.log(winner);

        if (winner === 'You win') {
            x++;
        } else if (winner === 'It\'\s draw') {
            continue;
        } else {
            break;
        }
    }
    if (x === Number(rounds) + 1) {
        return 'You beet the computer :)';
    } else {
        return 'The computer beet you :(';
    }
};
console.log(game());
