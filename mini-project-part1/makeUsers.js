var connect = require("./dbConnect.js");
connect(require("./settings").DEV_DB_URI);

var User = require("./models/user.js");
var LocationBlog = require("./models/locationBlog.js");
var Position = require("./models/position.js");

// Created positions to user
function positionCreator(lon, lat, userId, dateInFuture) {
  var posDetail = { user: userId, loc: { coordinates: [lon, lat] } }
  if (dateInFuture) {
    posDetail.created = "2022-09-25T20:40:21.899Z"
  }
  return posDetail;
}

// Creates dummy
async function makeData() {
  console.log("Making users")
  try {
    var userInfos = [
      {
        firstName: "a", lastName: "a", userName: "a", password: "a", email: "a@a.dk",job: [{ type: "t1", company: "c1", companyUrl: "url" },{ type: "t2", company: "c2", companyUrl: "url2" }],
      },
      {
        firstName: "b", lastName: "b", userName: "b", password: "b", email: "b@B.dk", job: [{ type: "t1", company: "c1", companyUrl: "url" },{ type: "t2", company: "c2", companyUrl: "url2" }],
      },
      {
        firstName: "c", lastName: "c", userName: "c", password: "c", email: "c@c.dk", job: [{ type: "t1", company: "c1", companyUrl: "url" },{ type: "t2", company: "c2", companyUrl: "url2" }],
      }
    ];

    await User.deleteMany({});
    await Position.deleteMany({});
    await LocationBlog.deleteMany({})

    //var userInfos = [];
    var users = await User.insertMany(userInfos);

    console.log(users);

    var positions = [positionCreator(10, 11, users[0]._id), positionCreator(11, 12, users[1]._id, true),]
    await Position.insertMany(positions);
    
    var blogs = [{ info: "Cool Place", pos: { longitude: 26, latitude: 57 }, author: users[0]._id },]
    //var blogs = await LocationBlog.insertMany(blogs);
  
    await LocationBlog.insertMany(blogs)

  } catch (err) {
    console.log(err);
  }
}

makeData();