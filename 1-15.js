var copyObject = function(target){
    var result = {};
    for (var prop in target){
        result[prop]=target[prop];
    }
    return result;
};

var user = {
    name: 'Jaemnam',
    urls:{
        portfolio:'http://gitjub.com/abc',
        blog:'http://blog.com',
        facebook:'http://facebook.com/abc'
    }
};

var user2 = copyObject(user);
user2.urls=copyObject(user.urls);

user.urls.protfolio='http://portfolio.com';
console.log(user.urls.protfolio === user2.urls.protfolio);

user2.urls.blog='';
console.log(user.urls.blog === user2.urls.blog);
