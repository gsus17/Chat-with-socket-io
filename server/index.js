var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var server = http.Server(app);
var socketIO = require('socket.io');
var io = socketIO(server);

var port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('user connected');

  socket
    .on('new-message', (message) => {
      console.log('message emit');
      io.emit('new-message', message);
      // trasladaRequestProcess(message);
    });
});

function trasladaRequestProcess(message) {
  var data = JSON.stringify({
    "message": message,
    "receptorId": 3088,
    "receptorProfile":
      "Supplier",
    "refServiceId": null
  });

  var options = {
    hostname: 'suppliers.zwitcher.com',
    port: 443,
    path: '/chats/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlc3RlYmFuIiwiZXh0ZXJuYWxfdG9rZW4iOiJiMTQ4NmViMDZhMTY0OGQyYTFhZTI3OTU0NGIyNTgzYyIsInJvbGUiOiJPcGVyYXRvciIsInRva2VuX3VzYWdlIjoiYWNjZXNzX3Rva2VuIiwianRpIjoiMjdkMDg5YTUtZDMxZC00OWJiLWFhMjctMjdkMmUzMDQ3NWIwIiwiY2ZkX2x2bCI6InByaXZhdGUiLCJzY29wZSI6WyJvcGVuaWQiLCJlbWFpbCIsInByb2ZpbGUiXSwiYXVkIjoiendpdGNoZXIuY29tIiwiYXpwIjoidHJhc2xhZGEub3BlcmF0b3JzIiwibmJmIjoxNTgxMjExODY3LCJleHAiOjE1ODEyNTUwNjUsImlhdCI6MTU4MTIxMTg2NywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwLyJ9.nsjfYDVGM_GzsYtk7PvUwM37ENqE2uCAmfgyayJ0l16DwdCXR49v8XP6h4f2zLBtkFQZWSsOsrPWpiy_TjLnXnEbY8DnQlym9Yxy3yvjTL6TYLpRAHHE1vOxZnf19C62m3_gQlhlzU9fXyiAinc2btKun3DctFcvqFvasDWMi9Pit1psVa3PHMJDWuDtgARq8oKF40xugisNIEbxdeFFh21bHlgFpI_TRUI_t99WVFcYXw0j0M1r4Z-9Qe5hfpTwLpIVecsmkFBf4KCiart3Mqo46_0Gy6I-_sOoQzD6Ih1c16ZvZQw8gctgH4uL4ecdPeSTvnJLb_k2I7DFg-eCbzJw_c4eooBlCnrJs3CzPcTp1Na6R8WJ-E9XAj_2bOWa-nqSAFUTAd5oMzfQpeozKpkovJHpOkcruKOz2rAYUhWu7JXC_oBlbeUUfv1LUarKDzUo-woRC7Vb8z5UrSvyV0_XmYm26fYTuF7YdTRTFbtq9acxK1p1xO7kJQ2nuRyq1QCM_EekNpsYG64vxzaI5-l_nG6-hfjRfiNJv9jpC5gZkaEBz6sdCm4ThRgL7m-jzcAlmoTIJUoNkw21jYx84coAJY64YO-dqPt9R9xvNF3pl0s9dw_JqNYNzl-FKGDmc0VZHiD5vACRU1OCj8EBDAl4BdYsmw9HcPqK3EN915w',
      'Content-Length': data.length
    }
  };

  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
      console.error('Success');

      process.stdout.write(d);
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

server
  .listen(port, () => {
    console.log(`started on port: ${port}`);
  });
