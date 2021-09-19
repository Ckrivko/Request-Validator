function solve(obj) {


    let validMethodNames = ['GET', 'POST', 'DELETE', 'CONNECT']

    if (obj['method'] === undefined || !validMethodNames.includes(obj['method'])) {

        throw new Error('Invalid request header: Invalid Method')
    }


    let reg = /^[\w.]+$/

    if (obj['uri'] === undefined || !reg.test(obj['uri'])) {

        throw new Error('Invalid request header: Invalid URI')
    }


    let validVersionNames = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (obj['version'] === undefined || !validVersionNames.includes(obj['version'])) {

        throw new Error('Invalid request header: Invalid Version')
    }


    let msgRegexp = /^[^<>\\&'"]*$/
    let result = msgRegexp.test(obj['message']);

    if (obj['message'] === undefined || result === false) {

        throw new Error('Invalid request header: Invalid Message')

    }


    return obj;

}


// try {

//    console.log( solve({
//         method: 'GET',
//         uri: 'com.com',
//         version: 'HTTP/1.1',
//         message: '"value"'
        
      
    
      
        
       
//     }));

// } catch (error) {
// console.log(error.message)
// }
