function printMatrix(matrix) {
    if (matrix === null || matrix[0] === null) return null;
    let [up, down, left, right] = [0, matrix.length - 1, 0, matrix[0].length - 1]
    let direction = 'right';
    let [posx, posy] = [0, 0];
    let result = [];
    while (up <= down && left <= right) {
        
        if (direction === 'right' && posy === right) {
            direction = 'down';
            up += 1;
            continue;
        }
        if (direction === 'down' && posx === down) {
            direction = 'left';
            right -= 1;
            continue;
        }
        if (direction === 'left' && posy === left) {
            direction = 'up';
            down -= 1;
            continue;
        }
        if (direction === 'up' && posx === up) {
            direction = 'right';
            left += 1;
            continue;
        }

        result.push(matrix[posx][posy]);

        if (direction === 'right') {
            posy += 1;
        }
        if (direction === 'down') {
            posx += 1;
        }
        if (direction === 'left') {
            posy -= 1;
        }
        if (direction === 'up') {
            posx -= 1;
        }
    }
    result.push(matrix[posx][posy]);
    return result;
}

let a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(printMatrix(a));