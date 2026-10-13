function solve(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /^[A-Za-z0-9.]+$/;
    let messagePattern = /[<>\\&'"]/;

    if (!validMethods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    if(typeof obj.uri !== 'string' || (obj.uri !== '*' && !uriPattern.test(obj.uri))){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(typeof obj.message !== 'string' || messagePattern.test(obj.message)){
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;

}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
// console.log(solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));
// console.log(solve({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));