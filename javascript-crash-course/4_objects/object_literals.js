// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Kiev',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};
console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

console.log(user['location']);
user['name'] = 'tom';
console.log(user['name']);

console.log(typeof user); 

// examples

// const blogs = [
// {title: 'why mac & cheese rules', likes: 30 },
// {title: '10 things to make with marmite', likes: 50}
// ];
// console.log(blogs);

let userTwo = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Kiev',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30 },
        {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

userTwo.login();
userTwo.logout();

userTwo.logBlogs();
console.log(this);
