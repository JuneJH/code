/**
 * 克鲁斯卡尔算法
 * @param pointSet  点
 * @param distance  距离
 * @returns {number}    最少路径
 */
function kruskal(pointSet, distance) {
    const village = [];
    let result = 0;
    while (!(village.length == 1 && village[0].length == pointSet.length)) {
        const temp = {
            minDistance: Infinity,
            end: null,
            begin: null
        }
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                const tempBegin = pointSet[i];
                const tempEnd = pointSet[j];
                const {t1,t2} = findNode(village,tempBegin,tempEnd);
                if (i != j && temp.minDistance > distance[i][j] && !(t1 !== null && t2 != null && t1 == t2)) {
                    temp.begin = tempBegin;
                    temp.end = tempEnd;
                    temp.minDistance = distance[i][j];
                }
            }
        }
        const {t1,t2} = findNode(village,temp.begin,temp.end);
        if(t1 == null && t2 == null){
            const newArr = [temp.begin,temp.end];
            village.push(newArr);
        }else if(t1 == null && t2 != null){
            t2.push(temp.begin);
        }else if(t1 != null && t2 == null){
            t1.push(temp.end)
        }else if(t1 != null && t2 !== null && t1 != t2){
            t1.push(...t2);
            const endIndex = village.indexOf(t2);
            village.splice(endIndex,1);
        }
        temp.begin.neighbor.push(temp.end);
        temp.end.neighbor.push(temp.begin);
        result += temp.minDistance;
    }
    return result;
};
function  findNode(village,p1,p2){
    let t1 = null,t2 = null;
    for(let i = 0; i < village.length; i ++){
        const v = village[i];
        if(v.includes(p1)){
            t1 = v;
        }
        if(v.includes(p2)){
            t2 = v;
        }
    }
    return {
        t1,t2
    }
}
module.exports = {
    kruskal
}