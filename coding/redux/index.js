// export {default as createStore} from "./createStore"
// export {default as bindActionCreators} from "./bindActionCreators"
// export {default as combineReducers} from "./combineReducers"
// export {default as applyMiddleware} from "./applyMiddleware"

const {createStore} = require("./createStore");
const {bindActionCreators} = require("./bindActionCreators");
const {combineReducers} = require("./combineReducers");
const {applyMiddleware} = require("./applyMiddleware");


module.exports = {
    createStore,
    bindActionCreators,
    combineReducers,
    applyMiddleware,
}