export const enemyWeapons = () => Math.floor(Math.random() * 3);

export const check = (enemy, gamer) => {
    if ((gamer === 0 && enemy === 2) || (gamer === 1 && enemy === 0) || (gamer === 2 && enemy === 1)) {
        return 'You win';
    } else if (gamer === enemy) {
        return 'It\'\s draw';
    } else {
        return 'Computer win';
    }
};

export const converting = (human) => {
    switch (human) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
        default:
            return 4;
    }
};
