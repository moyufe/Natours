const express = require('express');
// 调用模块 server = http.createServer();
const app = express();

app.get('/', (req, res) => {
  console.log(req.url);
  res
    .status(200) // 返回状态码
    .json({ message: '66', app: 'Natours' }); // 返回的数据类型，这样就不需要在自己去设置标头。
});

const port = 3000;
// 监听端口 server.listen();
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
