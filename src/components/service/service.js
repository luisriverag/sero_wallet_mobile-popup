import {config, lang} from "../../config/common";
import {PopupService} from 'popup-service'
const popservice = new PopupService();

class AssetService {
    init() {
        popservice.init(config.seroRpc(),15*1000,function (data) {
            console.log("init data:",data)
        })
    }

    balanceOf(tk) {
        return new Promise(function (resolve,reject) {
            popservice.balanceOf(tk,function (msg) {
                if(msg.error){
                    reject(msg.error)
                }else{
                    resolve(msg.data)
                }
            })
        })
    }

    initAccount(tk) {
        return new Promise(function (resolve, reject) {
            popservice.initAccount(tk, function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    getTxList(tk,cy,count){
        console.log("getTxList>>>>>>",cy,count)
        return new Promise(function (resolve, reject) {
            let query = {tk: tk, cy: cy, count: count}
            popservice.getTxList(query,function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    getTxDetail(tk,hash){
        return new Promise(function (resolve, reject) {
            popservice.getTxDetail(tk,hash,function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    getPKrIndex(tk){
        return new Promise(function (resolve, reject) {
            popservice.getPKrIndex(tk,function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    commitTx(tx){
        return new Promise(function (resolve, reject) {
            popservice.commitTx(tx,function (msg) {
                if (msg.error) {
                    if ("stx Verify error" === msg.error){
                        reject(lang.e().page.txTransfer.failed)
                    }else{
                        reject(msg.error)
                    }
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    getPrice(t){
        return new Promise(function (resolve, reject) {
            popservice.getSeroPrice(t,function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    clearData(tk){
        return new Promise(function (resolve, reject) {
            popservice.clearData(tk,function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }

    getSyncState(tk){
        return new Promise(function (resolve, reject) {
            popservice.getSyncState(tk,function (msg) {
                if (msg.error) {
                    reject(msg.error)
                } else {
                    resolve(msg.data)
                }
            })
        })
    }
}

const assetService = new AssetService();

export {
    assetService
}
