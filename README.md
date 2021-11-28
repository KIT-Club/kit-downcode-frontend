# KIT Downcode

Project này được thực hiện bởi KIT Downcode Team, một nhóm thành viên thuộc KIT.

## Scripts có sẵn

Trong thư mục chứa project, bạn có thể chạy những lệnh sau trong console:

### `yarn start`

Chạy web app này ở development mode.\
Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt của bạn.

Trang này sẽ tự động reload khi bạn sửa code.\
Bạn cũng sẽ nhìn thấy bất cứ lỗi lint nào nếu có trong console.

### `yarn test`

Chạy test runner trong interactive watch mode.\
Đọc [running tests](https://facebook.github.io/create-react-app/docs/running-tests) để biết thêm thông tin.

### `yarn build`

Build ứng dụng này vào thư mục `build`.

### `yarn lint`

Sửa mọi lỗi lint được Eslint tìm thấy.

## Cấu trúc thư mục `src`

Cấu trúc thư mục có thể thay đổi trong tương lai,

### `assets`

Chứa các tài nguyên liên quan tới trang web

### `components`

Chứa code của các React component. Khi tạo thêm một component mới, tạo một thư mục trùng tên với component, đặt tên file `.jsx` là `index`, trong trường hợp sử dụng CSS riêng thì đặt tên file CSS là `index.css`.

### `views`

Chứa code của các trang web được tạo nên bởi các component. Quy tắc tạo views và đặt tên tương tự với thư mục `components`.