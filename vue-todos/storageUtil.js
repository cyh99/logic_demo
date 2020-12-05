(()=>{
    let storageUtil = {}
    storageUtil.fetch = function (key){
        let rawObj = localStorage.getItem(key) || '[]'
        return JSON.parse(rawObj)
    }
    storageUtil.save = function(key,obj){
        localStorage.setItem(key,JSON.stringify(obj))
    }
    window.storageUtil = storageUtil
})()