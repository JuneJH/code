/**
 * 普里姆算法
 * @param {*节点对象集合} pointSet 
 * @param {*路程的集合} distance 
 * @param {*起始位置} start 
 */
function prim(pointSet,distance,start){
    let allDistance = 0;
    const hores = [];
    hores.push(start);
    // 辅助函数，求出最小的点
    function _getMinPoint (pointSet,distance,hores){
        // 保存结果对象
        const result = {
            from:null,
            to:null,
            minDisstance:Infinity
        }
        //通过已连接节点去找最短路程
        for(let i = 0; i < hores.length; i ++){
            // 找到对应路程数组的索引
            const nowPointIndex = pointSet.indexOf(hores[i]);
            // 找出不包含在已连接数组中，且最小路程
            for(let j = 0; j < distance[nowPointIndex].length; j ++) {
                 const thisNode = pointSet[j]
                 if(hores.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < result.minDisstance){
                     result.from = hores[i];
                     result.to = thisNode;
                     result.minDisstance = distance[nowPointIndex][j];
                 }
            }
        }
        // 连接各个点
        result.from.neighbor.push(result.to);
        result.to.neighbor.push(result.from);
        allDistance += result.minDisstance;
        return result.to;
    }
    while(true){
        const minPoint = _getMinPoint(pointSet,distance,hores);
        hores.push(minPoint);
        if(hores.length == pointSet.length) break;
    }
    return allDistance
}

module.exports = {
    prim
}