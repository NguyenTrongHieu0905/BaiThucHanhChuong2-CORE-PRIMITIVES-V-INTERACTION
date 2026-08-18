A. Cấu trúc Component đã sử dụng:
Ứng dụng được thiết kế phân chia thành 5 component độc lập có ý nghĩa, đảm bảo không tràn màn hình thông qua ScrollView:

Header: Chứa Text hiển thị thanh tiêu đề trên cùng của ứng dụng.

ProfileSection: Hiển thị ảnh đại diện và thông tin cơ bản. Ảnh đại diện (Image) được bọc bởi Pressable tạo thành hành động tương tác 1 (có phản hồi opacity khi nhấn).

SearchField: Sử dụng TextInput cho phép nhập liệu tìm kiếm, quản lý trạng thái có value, onChangeText, và placeholder. Vùng chạm được thiết lập chiều cao 48.

StudentInfoCard: Khối View chứa các Text để hiển thị thông tin lớp học và email.

ActionButton: Nút bấm (hành động tương tác 2) được xây dựng bằng Pressable với vùng chạm 48x48. Nút được cấu hình đầy đủ accessibilityRole, accessibilityLabel và accessibilityState, đi kèm hiệu ứng đổi màu nền rõ rệt khi người dùng nhấn vào.

B. Hướng dẫn cài đặt và khởi chạy:

Mở terminal tại thư mục gốc của project.

Chạy lệnh cài đặt các gói module (Dependencies): npm install

Khởi động máy chủ Expo: npx expo start

Trải nghiệm ứng dụng:

Quét mã QR bằng ứng dụng Expo Go trên điện thoại.

Hoặc nhấn phím a để chạy ứng dụng trên máy ảo Android / phím i để mở trên máy ảo iOS.
