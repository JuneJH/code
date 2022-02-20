/**
 * 普里姆算法
 * @param {*节点对象集合} pointSet 
 * @param {*路程的集合} distance 
 * @param {*起始位置} Graph
 */
function  prim (points,distances,start){
    // 统计最短路径
    let result = 0;
    // 已经连通村庄
    const village = [];
    // 初始化
    village.push(start);
    while (village.length !== points.length){
        let minDistance = Infinity;
        let fromNode = null;
        let toNode = null;
        village.forEach(p=>{
            // 找到当前村庄连接其他村庄的路径
            const index = points.indexOf(p);
            const distance = distances[index];
            distance.forEach((d,i)=>{
                const n = points[i];
                if(!village.includes(n) && minDistance > d){
                    minDistance = d;
                    fromNode = p;
                    toNode = n;
                }
            })
        })
        village.push(toNode);
        fromNode.neighbor.push(toNode);
        toNode.neighbor.push(fromNode);
        result += minDistance;
    }
    return result;
}
module.exports = {
    prim
}