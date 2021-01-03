function Node(value) {
    this.value = value;
    this.neighbor = [];
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

const pointSet = [a, b, c, d, e];
const distance = [
    [0, 4, 7, Infinity, Infinity],
    [4, 0, 8, 6, Infinity],
    [7, 8, 0, 5, Infinity],
    [Infinity, 6, 5, 0, 7],
    [Infinity, Infinity, Infinity, 7, 0],
]

function kruskal(pointSet, distance) {
    const resultList = [];
    let allDistance = 0;
    function _canlink(resultList, tempBegin, tempEnd){
        let beginListIn = null;
        let endListIn = null;
        for(let i = 0; i < resultList.length; i ++){
                if(resultList[i].includes(tempBegin)){
                    beginListIn = resultList[i];
                }
                if(resultList[i].includes(tempEnd)){
                    endListIn = resultList[i];
                }
        }
        if(beginListIn !== null && endListIn != null && beginListIn == endListIn){//null也相等，所以需要判断是否为空
            return false;
        }
        return true;
    };
    function _link(resultList, tempBegin, tempEnd){
        let beginListIn = null;
        let endListIn = null;
        for(let i = 0; i < resultList.length; i ++){
                if(resultList[i].includes(tempBegin)){
                    beginListIn = resultList[i];
                }
                if(resultList[i].includes(tempEnd)){
                    endListIn = resultList[i];
                }
        }
        if(beginListIn == null && endListIn == null){
            const newArr = [tempBegin,tempEnd];
            resultList.push(newArr);
        }else if(beginListIn == null && endListIn != null){
            endListIn.push(tempBegin);
        }else if(beginListIn != null && endListIn == null){
            beginListIn.push(tempEnd)
        }else if(beginListIn != null && endListIn !== null && endListIn != beginListIn){
            beginListIn.push(...endListIn)//一定不要改变了beginListIn的数组地址指向
            const endIndex = resultList.indexOf(endListIn);
            resultList.splice(endIndex,1);
        }
    }
    while (true) {
        const result = {
            minDistance: Infinity,
            end: null,
            begin: null
        }
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                const tempBegin = pointSet[i];
                const tempEnd = pointSet[j];
                if (i != j && result.minDistance > distance[i][j] && _canlink(resultList, tempBegin, tempEnd)) {
                    result.begin = tempBegin;
                    result.end = tempEnd;
                    result.minDistance = distance[i][j];
                }
            }
        }
        _link(resultList, result.begin, result.end);
        result.begin.neighbor.push(result.end);
        result.end.neighbor.push(result.begin);
        allDistance += result.minDistance;
        // 注意resulList是一个二维数组
        if (resultList.length == 1 && resultList[0].length == pointSet.length) break;
    }
    return allDistance;
}

console.log(kruskal(pointSet, distance))
console.log(pointSet)