const grid = [[1, 3, 1],
[1, 5, 1],
[4, 2, 1]];
//方法一，通过递归
// var minPathSum = function (grid) {
//     const gridLenX = grid[0].length;
//     const gridLenY = grid.length;
//     return _minPathSum(grid, 0, 0)
//     function _minPathSum(grid, x, y) {
//         if(x >= gridLenX || y >= gridLenY) return Infinity;
//         if (y == gridLenY - 1 && x == gridLenX - 1) { return +grid[y][x] };
//        console.log(y,x)
//         return grid[y][x] + Math.min(_minPathSum(grid, x+1, y),_minPathSum(grid, x, y+1))
//     }
// };
// 动态规划
//  通过对原数组进行填充值
// function minPathSum(grid){

//     for(let i = 0; i < grid.length; i ++){
//         console.log("===========")
//         for(let j = 0; j < grid[i].length; j ++){
//             console.log(i,j)
//             if(i == 0 && j == 0) continue;
//             else if(i == 0){
//                 grid[i][j] = grid[i][j - 1] + grid[i][j] 
//             }
//             else if(j == 0){
//                 grid[i][j] = grid[i - 1][j] + grid[i][j];
//             }else{
//                 grid[i][j] += Math.min(grid[i - 1][j],grid[i][j - 1])
//             }

//         }
//     }
//     return grid[grid.length - 1][grid[grid.length - 1].length - 1]

// }
var minPathSum = function (grid) {
    const cache = [];
    const result = {
        x: null,
        y: null,
        re: null,
    }
    function fn(grid, x, y) {
        for (let i = 0; i < cache.length; i++) {
            if (cache[i].x == x && cache[i].y == y) return cache[i].re;

        }

        if (x >= grid[0].length || y >= grid.length) result.re = Infinity;
        else if (x == grid[0].length - 1 && y == grid.length - 1) result.re = grid[y][x];
        else {
            result.re = grid[y][x] + Math.min(fn(grid, x + 1, y), fn(grid, x, y + 1))
        }
        result.x = x;
        result.y = y;
        cache.push(result);
        console.log(cache)
        return result.re;
    }
    return fn(grid, 0, 0)
};

console.log("结果", minPathSum(grid))


