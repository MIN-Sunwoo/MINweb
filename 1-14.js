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
var user2=copyObject(user);

user2.name='Jung';
console.log(user.name === user2.name);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);
