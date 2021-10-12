function compose (...fn){
    return (a)=>{
        return fn.reduceRight((a,b)=>b(a),a)
    }

}

module.exports = {
    compose
}