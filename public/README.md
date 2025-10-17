# 🥊 BOXING GAME - PUBLIC FOLDER

## 📁 CẤU TRÚC THƯ MỤC

```
public/
├── index.html              ← MENU CHÍNH (Trang chủ)
├── game-full.html          ← Ultimate Edition (6 chế độ, 4 skills, 6 maps)
├── game-online.html        ← Online PvP (2 người cùng máy)
├── game-ai.html            ← VS AI Classic (với skills & maps)
├── game-boxing-skills.js   ← Hệ thống kỹ năng
└── game-boxing-maps.js     ← Hệ thống bản đồ
```

## 🎮 CÁC FILE GAME

### 1. **index.html** - Menu chính
- Trang chủ với 4 lựa chọn
- Giao diện đẹp với animation
- Link đến các phiên bản game

### 2. **game-full.html** - Ultimate Edition
**Tính năng:**
- ✅ 6 chế độ chơi: PVP, AI, Survival, Tournament, Training, Time Attack
- ✅ 4 kỹ năng đặc biệt: Uppercut, Combo Rush, Counter Shield, Lightning Dash
- ✅ 6 bản đồ: Classic, Neon, Volcano, Space, Dojo, Cyber
- ✅ AI 4 độ khó: Easy, Medium, Hard, Super
- ✅ Pause menu (ESC)
- ✅ Sound toggle
- ✅ High score system

### 3. **game-online.html** - Online PvP
**Tính năng:**
- ✅ 2 người chơi cùng lúc trên 1 máy
- ✅ Điều khiển riêng biệt
- ✅ Realtime combat
- ✅ Đơn giản, dễ chơi

**Player 1:** WASD + F + G  
**Player 2:** Arrow Keys + / + .

### 4. **game-ai.html** - VS AI Classic
**Tính năng:**
- ✅ Đấu với AI
- ✅ Import skills & maps từ file JS
- ✅ 4 độ khó AI
- ✅ Phiên bản với external JS

### 5. **game-boxing-skills.js** - Hệ thống kỹ năng
```javascript
SKILLS = {
    uppercut: { damage: 20, energyCost: 30, cooldown: 180 },
    comboRush: { damage: 8x5, energyCost: 40, cooldown: 200 },
    counterShield: { energyCost: 35, cooldown: 240 },
    lightningDash: { damage: 15, energyCost: 25, cooldown: 150 }
}
```

### 6. **game-boxing-maps.js** - Hệ thống bản đồ
```javascript
MAPS = {
    classic, neon, volcano, space, dojo, cyber
}
```

## 🚀 DEPLOY LÊN VERCEL

### Cấu hình đã sẵn sàng:
- ✅ `vercel.json` đã cấu hình static hosting
- ✅ Tất cả file trong thư mục `public/`
- ✅ Routing tự động

### Deploy bằng Vercel CLI:
```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Deploy
cd d:\CODE_WORD\py-simple
vercel

# Link sẽ ra: https://[project-name].vercel.app
```

### Deploy qua Dashboard:
1. Push code lên GitHub
2. Import vào Vercel
3. Deploy tự động
4. Link: `https://py-simple.vercel.app`

## 🌐 TRUY CẬP GAME

Sau khi deploy:
- **Trang chủ:** `https://your-domain.vercel.app/`
- **Ultimate:** `https://your-domain.vercel.app/game-full.html`
- **Online PvP:** `https://your-domain.vercel.app/game-online.html`
- **VS AI:** `https://your-domain.vercel.app/game-ai.html`

## 📱 TƯƠNG THÍCH

### Desktop:
- ✅ Chrome/Edge (Khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Mobile:
- ⚠️ Cần bàn phím để chơi
- ✅ Có thể xem được
- 🔜 Touch controls (coming soon)

## 🎯 HƯỚNG DẪN SỬ DỤNG

### Chơi Local:
1. Mở file `index.html` trên trình duyệt
2. Chọn chế độ chơi
3. Enjoy!

### Chơi Online (sau khi deploy):
1. Mở link Vercel
2. Chọn chế độ
3. Chia sẻ link với bạn bè

## ⚙️ CUSTOMIZE

### Thay đổi màu sắc:
Mở file HTML, tìm:
```javascript
player1 = new Fighter(100, '#4a90e2', ...); // Xanh
player2 = new Fighter(750, '#e74c3c', ...); // Đỏ
```

### Thêm map mới:
Mở `game-boxing-maps.js`, thêm:
```javascript
MAPS.newMap = {
    name: 'New Map',
    icon: '🎨',
    draw() { /* Canvas code */ }
};
```

### Thêm skill mới:
Mở `game-boxing-skills.js`, thêm:
```javascript
SKILLS.newSkill = {
    name: 'New Skill',
    icon: '⚡',
    key: '5',
    energyCost: 50,
    cooldown: 200,
    execute(attacker, defender) { /* Logic */ }
};
```

## 📊 FILE SIZE

- `index.html`: ~7KB
- `game-full.html`: ~62KB (standalone, all-in-one)
- `game-online.html`: ~12KB
- `game-ai.html`: ~35KB
- `game-boxing-skills.js`: ~5KB
- `game-boxing-maps.js`: ~4KB

**Total:** ~125KB (Rất nhẹ!)

## 🐛 TROUBLESHOOTING

### Game không load?
- ✅ Kiểm tra console (F12)
- ✅ Xóa cache (Ctrl+F5)
- ✅ Kiểm tra đường dẫn file

### Skills/Maps không hoạt động?
- ✅ Kiểm tra file `.js` đã load
- ✅ Xem console có lỗi không
- ✅ Đảm bảo đường dẫn đúng

### Vercel deploy lỗi?
- ✅ Kiểm tra `vercel.json`
- ✅ Đảm bảo file trong `public/`
- ✅ Xem build logs

## 🎉 HOÀN TẤT!

Tất cả file đã sẵn sàng để deploy!

**Next steps:**
1. Test local: Mở `index.html`
2. Push to GitHub: `git push`
3. Deploy Vercel: `vercel` hoặc import
4. Share & Play! 🥊

---

**Made with ❤️ | Version 2.0 | © 2025**
