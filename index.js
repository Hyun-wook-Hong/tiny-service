const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

// CORS 예외처리를 위해 추가
let corsOptions = {
  origin: "*",        //출처 허용 옵션
  credential: true,   //사용자 인증이 필요한 리소스(쿠키 등) 접근
}
app.use(cors(corsOptions));

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const port = 18080;
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚗`);
});