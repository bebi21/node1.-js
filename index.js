const express = require("express");
const app = express();
const port = 3000;

app.get("/tin-tuc", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World!");
});

// localhost ---- 127.0.0.1  (đây  là nới khi mình  gõ localhost  nó tương đương với 127zzz)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// nodemon để lắng nghe sự thay  đổi của mình không
// cần phải mỗi lần thay đổi phải chạy  lại server
// khi  thêm --inspect vào package.json chỗ đoạn  start
// thì ta có thể kiểm tra lỗi
