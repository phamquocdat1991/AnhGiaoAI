# 🎓 EduTech AI - Hệ Sinh Thái Ứng Dụng AI Giáo Dục

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/stack-HTML5%20%7C%20TailwindCSS%20%7C%20JavaScript-38bdf8)
![Platform](https://img.shields.io/badge/deploy-Vercel%20Production-black?logo=vercel)
![Status](https://img.shields.io/badge/status-active-success)

> **EduTech AI** là nền tảng hệ sinh thái ứng dụng trí tuệ nhân tạo chuyên sâu dành cho ngành giáo dục: hỗ trợ tinh giản gánh nặng sổ sách cho giáo viên, tự động hóa thiết kế kế hoạch bài dạy (giáo án), thẩm định sáng kiến kinh nghiệm (SKKN), quản lý lớp học và mở khóa tiềm năng tự học cho học sinh.

---

## 🌟 Điểm nổi bật & Tính năng chính

- 🚀 **16+ Trợ lý AI Giáo dục chuyên biệt**: Soạn giáo án chuẩn Công văn 5512, Trợ lý chủ nhiệm, Ma trận & Đặc tả đề kiểm tra, Trợ lý tạo mô phỏng & phòng thực hành số, Phân tích dữ liệu học tập, Trợ lý STEM/STEAM, v.v.
- ⚡ **Tìm kiếm trực tiếp (Live Search)**: Tìm kiếm tức thì theo tên ứng dụng, danh mục và từ khóa (hỗ trợ tiếng Việt có dấu và không dấu).
- 🏷️ **Bộ lọc danh mục linh hoạt**: Phân loại theo *Quản lý & Chuyên môn*, *Kế hoạch & Giảng dạy*, *Kiểm tra & Đánh giá*, *Tự học & Phát triển*.
- 🎨 **Thiết kế Lumina Academic**: Giao diện tối ưu theo chuẩn Material Design 3, Typography Plus Jakarta Sans & Inter sắc nét, hiệu ứng Glassmorphism và tối ưu trải nghiệm trên cả Mobile lẫn Desktop.
- ⚡ **Tối ưu Production trên Vercel**: Tốc độ tải trang siêu tốc qua mạng Edge Network toàn cầu, cấu hình bảo mật Security Headers và bộ đệm Cache Control tối ưu.

---

## 📁 Cấu trúc thư mục dự án

```text
eduai/
├── .git/                  # Git repository local
├── .gitattributes         # Chuẩn hóa định dạng dòng LF giữa Windows & Linux
├── .gitignore             # Danh sách loại trừ các file tạm, bảo mật và thư mục build
├── DESIGN.md              # Tài liệu hệ thống màu sắc và kiểu chữ (Design System)
├── favicon.svg            # Biểu tượng Favicon vector đồng bộ thương hiệu
├── index.html             # Điểm vào chính của ứng dụng web (Production Entrypoint)
├── code.html              # File mã nguồn HTML gốc
├── package.json           # Cấu hình dự án & script dev/start cục bộ
├── screen.png             # Ảnh chụp màn hình giao diện giới thiệu
├── vercel.json            # Cấu hình Vercel (cleanUrls, headers, caching, rewrites)
├── LICENSE                # Giấy phép nguồn mở MIT
└── README.md              # Hướng dẫn chi tiết dự án và cách triển khai
```

---

## 🚀 Hướng dẫn 1: Đưa mã nguồn lên GitHub

Mã nguồn đã được khởi tạo sẵn Git cục bộ trong thư mục này. Bạn thực hiện các bước sau trong terminal PowerShell:

### Bước 1: Commit các file vào Git cục bộ
```powershell
git add .
git commit -m "feat: initial commit EduTech AI ecosystem ready for Vercel deployment"
git branch -M main
```

### Bước 2: Tạo Repository trên GitHub
1. Truy cập [github.com/new](https://github.com/new).
2. Đặt tên **Repository name** (ví dụ: `eduai` hoặc `edutech-ai`).
3. Chọn chế độ **Public** hoặc **Private** tùy ý.
4. **Không** tích chọn *Add a README file*, *.gitignore* hay *license* (vì dự án đã tạo sẵn đầy đủ).
5. Nhấn **Create repository**.

### Bước 3: Liên kết và Đẩy (Push) lên GitHub
Thay `<YOUR_GITHUB_USERNAME>` bằng tên tài khoản GitHub của bạn:
```powershell
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/eduai.git
git push -u origin main
```

*(Nếu GitHub yêu cầu đăng nhập, hãy làm theo cửa sổ xác thực trình duyệt hoặc dùng Personal Access Token).*

---

## 🌐 Hướng dẫn 2: Deploy Production lên Vercel.com

### Cách A: Tự động qua giao diện Vercel Dashboard (Khuyên dùng)
1. Đăng nhập vào [vercel.com](https://vercel.com) (chọn đăng nhập bằng tài khoản **GitHub**).
2. Nhấn nút **Add New...** ở góc phải trên cùng và chọn **Project**.
3. Tại mục **Import Git Repository**, tìm repository `eduai` (hoặc `edutech-ai`) vừa đẩy lên và bấm **Import**.
4. Tại màn hình **Configure Project**:
   - **Framework Preset**: Chọn `Other` (hoặc để mặc định).
   - **Root Directory**: `./` (mặc định).
   - **Build and Output Settings**: Giữ nguyên mặc định (đã được cấu hình tự động qua `vercel.json`).
5. Bấm nút **Deploy**.
6. Chỉ sau 5–10 giây, Vercel sẽ cấp cho bạn một đường dẫn dạng:
   👉 `https://eduai-xxxx.vercel.app` (hoặc tên miền tùy chỉnh của bạn).

> 💡 **Lợi ích**: Từ nay, mỗi khi bạn thay đổi code và gõ `git push origin main`, Vercel sẽ tự động build và cập nhật phiên bản mới nhất ngay lập tức (CI/CD hoàn toàn tự động)!

---

### Cách B: Triển khai nhanh bằng Vercel CLI (Từ dòng lệnh)
Nếu bạn thích dùng Terminal:
```powershell
# 1. Chạy deploy bản kiểm thử (Preview)
npx vercel

# 2. Triển khai bản chính thức (Production)
npx vercel --prod
```

---

## 💻 Chạy thử nghiệm tại máy cục bộ (Local Development)

Nếu muốn xem trang web hoạt động trên máy trước khi deploy:
```powershell
# Sử dụng script đã cấu hình trong package.json
npm run dev

# Hoặc dùng npx serve trực tiếp:
npx -y serve .
```
Mở trình duyệt tại địa chỉ: `http://localhost:3000`

---

## 🔗 Gắn tên miền tùy chỉnh (Custom Domain) trên Vercel

1. Vào trang quản trị dự án trên Vercel Dashboard -> chọn tab **Settings** -> mục **Domains**.
2. Nhập tên miền riêng của bạn (ví dụ: `edutech.vn` hoặc `ai.hoclieuso.com`).
3. Cập nhật bản ghi DNS (CNAME hoặc A record) theo hướng dẫn hiển thị trên Vercel.
4. Vercel sẽ tự động cấp chứng chỉ bảo mật **SSL (HTTPS)** miễn phí trọn đời.

---

## 👤 Tác giả & Kênh liên hệ

- **Phạm Quốc Đạt** - *Chuyên gia phát triển ứng dụng giáo dục & Giải pháp AI*
- 🎵 **TikTok**: [@phamquocdat3110](https://www.tiktok.com/@phamquocdat3110?_r=1&_t=ZS-99U3aqBRutA)
- 🌐 **Facebook**: [Phạm Quốc Đạt (lam.gia.at.685215)](https://www.facebook.com/lam.gia.at.685215/)
- 📄 **Bản quyền**: [MIT License](LICENSE)
