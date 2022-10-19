npm install
npm run build
docker build -t ins8-demo .
docker run --rm -p 3000:3000 ins8-demo
