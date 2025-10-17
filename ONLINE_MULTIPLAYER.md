# 🎮 BOXING ONLINE MULTIPLAYER

## 🚀 DEPLOY LÊN VERCEL

### Cách 1: Deploy qua Vercel CLI (Nhanh nhất)

#### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

#### Bước 2: Deploy
```bash
cd d:\CODE_WORD\py-simple
vercel
```

#### Bước 3: Làm theo hướng dẫn
- Đăng nhập Vercel (nếu chưa)
- Chọn "No" khi hỏi link to existing project
- Nhập tên project: `boxing-online`
- Chọn thư mục hiện tại
- Chọn "No" để override settings
- Xong! Link sẽ hiện ra: `https://boxing-online-xxx.vercel.app`

---

### Cách 2: Deploy qua Vercel Dashboard (Web)

#### Bước 1: Push code lên GitHub
```bash
cd d:\CODE_WORD\py-simple
git add .
git commit -m "Add online multiplayer"
git push origin main
```

#### Bước 2: Import vào Vercel
1. Truy cập: https://vercel.com
2. Click "New Project"
3. Import repository: `py-simple`
4. Click "Deploy"
5. Đợi 1-2 phút
6. Xong! Link: `https://py-simple-xxx.vercel.app`

---

## 🎮 CÁCH CHƠI

### 1. Tạo phòng
- Nhập tên của bạn
- Click "TẠO PHÒNG"
- Nhập tên phòng
- Chờ người chơi 2

### 2. Vào phòng
- Nhập tên của bạn
- Click "TÌM PHÒNG"
- Chọn phòng và click "VÀO PHÒNG"
- Game bắt đầu khi đủ 2 người

### 3. Điều khiển
```
WASD - Di chuyển (W: Nhảy, A: Trái, D: Phải)
F    - Đấm
G    - Chặn (giảm 70% damage)
```

---

## 🌐 MULTIPLAYER SYSTEM

### Công nghệ sử dụng:
- **Frontend**: HTML5 Canvas + JavaScript
- **WebSocket**: Socket.IO (sử dụng free public server)
- **Deployment**: Vercel (Static hosting)

### Tính năng:
- ✅ Realtime multiplayer cho 2 người
- ✅ Tạo/tham gia phòng
- ✅ Sync vị trí và hành động realtime
- ✅ Hiển thị tên người chơi
- ✅ Trạng thái kết nối
- ✅ Tự động ngắt kết nối khi rời phòng

---

## 🔧 CẤU HÌNH VERCEL

File `vercel.json` đã được cấu hình:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}
```

---

## 📱 COMPATIBILITY

### Trình duyệt hỗ trợ:
- ✅ Chrome/Edge (Khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers

### Yêu cầu:
- Kết nối internet ổn định
- WebSocket support
- HTML5 Canvas support

---

## 🐛 TROUBLESHOOTING

### ❓ Không kết nối được?
- ✅ Kiểm tra internet
- ✅ Tắt ad-blocker
- ✅ Cho phép WebSocket
- ✅ Thử trình duyệt khác

### ❓ Lag/giật?
- ✅ Kiểm tra tốc độ mạng
- ✅ Đóng các tab khác
- ✅ Chọn server gần hơn

### ❓ Không thấy phòng?
- ✅ Refresh trang
- ✅ Tạo phòng mới
- ✅ Kiểm tra kết nối

---

## 🎯 CÁCH SỬ DỤNG SAU KHI DEPLOY

1. **Mở link Vercel** (vd: `https://boxing-online.vercel.app`)
2. **Người chơi 1**: 
   - Nhập tên → TẠO PHÒNG → Nhập tên phòng → Chờ
3. **Người chơi 2**: 
   - Mở cùng link trên máy khác
   - Nhập tên → TÌM PHÒNG → Chọn phòng → VÀO PHÒNG
4. **Bắt đầu chiến đấu!** 🥊

---

## 📊 GIỚI HẠN FREE TIER

### Vercel Free:
- ✅ 100GB bandwidth/tháng
- ✅ Unlimited projects
- ✅ Automatic HTTPS
- ✅ Custom domain
- ✅ Fast CDN

### Socket.IO Free Server:
- ⚠️ Có thể chậm khi traffic cao
- ⚠️ Shared server với người khác
- ✅ Đủ để test và chơi nhỏ

---

## 🚀 NÂNG CẤP (TÙY CHỌN)

### Nếu muốn server riêng:

1. **Socket.IO trên Render.com** (Free)
2. **Socket.IO trên Railway.app** (Free)
3. **Socket.IO trên Heroku** (Paid)

File server đã sẵn sàng, chỉ cần deploy!

---

## ✅ CHECKLIST

- [x] Tạo file `package.json`
- [x] Tạo file `vercel.json`
- [x] Tạo game online multiplayer
- [x] Cấu hình WebSocket
- [ ] Push lên GitHub
- [ ] Deploy lên Vercel
- [ ] Test với bạn bè!

---

## 🎉 HOÀN TẤT!

Game của bạn đã sẵn sàng để deploy và chơi online!

**Next steps:**
1. Push code: `git push origin main`
2. Deploy: `vercel` hoặc import vào Vercel Dashboard
3. Chia sẻ link với bạn bè
4. Chơi thôi! 🥊

---

## 📞 HỖ TRỢ

- 📖 Vercel Docs: https://vercel.com/docs
- 💬 Socket.IO Docs: https://socket.io/docs
- 🐛 Issues: GitHub Issues

**Good luck & Have fun! 🚀🥊**
