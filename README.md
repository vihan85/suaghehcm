# suaghehcm
Design layout for website



https://sass-lang.com/guide

# SCSS
Compile File SCSS to CSS
Cách 1: sass --watch ./src/assets/scss/index.scss ./src/dist/css/index.css
   - Công cụ SASS watch(theo dõi) file ./src/assets/scss/index.scss và compile thành file ./src/dist/css/index.css
cách 2: npm run scss 
   - Đọc trong file package.json > scripts > và thực thi lên scss
Dọc trong file package.json > scripts > đọc lệnh

Compile build
npm install grunt-cli > grunt

# menu mobile
1/ nằm bên trái width 80%, height 100%
2/ nút danh sách nằm cạnh logo
3/ menu cấp 2 khi bấm vào xổ từ trên xuống
4/ khi scroll xuống list btn đc fixed 
5/ khi danh sách quá dài thì sẽ có thành scroll bar
6/ khi menu đc show ra btn list đổi icon khách
7/ khi click ra khỏi menu thì tự thu vào