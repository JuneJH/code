//提前创建得东西

function isBalanceTree(root) {
    if (!root) return true;
    const left = getDeep(root.left);
    const right = getDeep(root.right);
    if (Math.abs(left - right) > 1) {
      return false;
    } else {
      return isBalanceTree(root.left) && isBalanceTree(root.right)
    }
  
  }
  function getDeep(root) {
    if (root == null) return 0;
    const left = getDeep(root.left) + 1;
    const right = getDeep(root.right) + 1;
    return Math.max(left, right);
  }
  
  function Graph(value){
    this.value = value;
    this.neighbor = []
  }
  const graphA = new Graph('a');
  const graphB = new Graph('b')
  const graphC = new Graph('c')
  const graphD = new Graph('d')
  const graphE = new Graph('e')
  
  graphA.neighbor.push(graphB,graphC)
  graphB.neighbor.push(graphA,graphC,graphD)
  graphC.neighbor.push(graphA,graphB,graphD)
  graphD.neighbor.push(graphB,graphC,graphE)
  graphE.neighbor.push(graphD)
  
  const graphA1 = new Graph('a');
  const graphB1 = new Graph('b')
  const graphC1 = new Graph('c')
  const graphD1 = new Graph('d')
  const graphE1 = new Graph('e')
  const pointSet = [graphA1, graphB1,graphC1, graphD1, graphE1];
  const distance = [
      [0, 4, 7, Infinity, Infinity],
      [4, 0, 8, 6, Infinity],
      [7, 8, 0, 5, Infinity],
      [Infinity, 6, 5, 0, 7],
      [Infinity, Infinity, Infinity, 7, 0],
  ]
  
  // 结束