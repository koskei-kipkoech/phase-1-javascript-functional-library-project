function myEach(collection,callback){
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            callback(collection[i], i, collection);
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                callback(collection[key], key, collection)
            }
        }
    }
    return collection;
}

function myMap (collection,callback){
    const result = [];
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            result.push(callback(collection[i], i, collection));
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    return result;
}

function myReduce (collection,callback,acc){
    let start = acc === undefined ? true : false;
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            if (start){
                acc = collection[i];
                start = false;
            }else{
                acc = callback(acc, collection[i], collection)
            }
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                if (start){
                    acc = collection[key];
                    start = false;
                }else{
                    acc = callback(acc, collection[key], collection)
                }            
            }
        }
    }
    return acc;
}

function myFind (collection,callback){
    for(let i = 0;i < collection.length; i++){
        if(callback(collection[i], i, collection)){
            return collection[i];
        }
    }
    return undefined;
}
function myFilter (collection,callback){
    const result = [];
    if(Array.isArray(collection)){
        for(let i = 0;i < collection.length; i++){
            if(callback(collection[i], i, collection)){
                result.push(collection[i])
            }
        }
    }else if(typeof collection === 'object' && collection !== null){
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                if(callback(collection[key], key, collection)){
                    result.push(collection[key]);
                }
            }
        }
    }
    return result;
}

function mySize(collection){
    if(Array.isArray(collection)){
        return collection.length;
    }else if (typeof collection ==='object' && collection !== null){
        return Object.keys(collection).length;
    }else{
        return 0;
    }
}

function myFirst(collection, n){
    if(Array.isArray(collection)){
        if(n === undefined){
            return collection[0];
        }
        return collection.slice(0,n)
    }
    return undefined;
}

function myLast(collection, n){
    if (Array.isArray(collection)) {
        if(n === undefined){
            return collection[collection.length -1];
        }else{
            return collection.slice (-n)
        }
    }else{
        return undefined;
    }
} 

function myKeys(obj){
    if(typeof obj !== 'object' || obj === null){
        return [];
    }
    return Object.keys(obj)
}

function myValues(obj){
    if(typeof obj !== 'object' || obj === null){
        return [];
    }
    return Object.values(obj)
}