# Buổi 38: React.lazy, Suspense, Axios, Shadcn/ui

Ba bài tập độc lập, chuyển trang bằng các nút trên đầu. Axios instance và QueryClient dùng chung. UI theo shadcn/ui với Tailwind và Radix Dialog/Label.

## Chạy local

Node.js 22.12+:

```bash
npm ci
npm run dev
```

## GitHub Pages

Vite base đã đặt `/k20-day38-react-lazy-suspense-axios-shadcn/`.
Trong GitHub: Settings → Pages → Source → GitHub Actions. Push nhánh main để workflow lint, build và deploy thư mục dist.

Repo: https://github.com/haidmwp/k20-day38-react-lazy-suspense-axios-shadcn
Demo sau khi deploy: https://haidmwp.github.io/k20-day38-react-lazy-suspense-axios-shadcn/

## Kiểm tra thủ công

- Chuyển danh mục rồi về Tất cả; kiểm tra trạng thái tải/lỗi/rỗng. Offline có thể tạm dừng request; kết nối lại hoặc dùng endpoint sai tạm thời để kiểm tra lỗi và Thử lại.
- Thêm/sửa, kiểm tra form trống/điền sẵn; thử tên trắng, giá trống/0/âm, tồn kho trống/âm/thập phân. Kiểm tra giữ dữ liệu khi request lỗi, khóa lưu khi pending và GET lại sau POST/PATCH.
- DummyJSON không lưu thay đổi; bảng tải lại vẫn là dữ liệu ban đầu.
- Mở/ẩn đánh giá; Network lần mở đầu tải chunk ProductReviews riêng, không gọi thêm API đánh giá. Throttle mạng để quan sát Suspense.
