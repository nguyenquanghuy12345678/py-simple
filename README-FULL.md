# 🥊 BOXING AI ULTIMATE - FULL EDITION

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-Game-orange)

## 🎮 GIỚI THIỆU

Game đấm bốc HTML5 hoàn chỉnh với AI thông minh, nhiều chế độ chơi, kỹ năng đặc biệt và bản đồ đa dạng. Chỉ cần **1 file HTML duy nhất**, không cần server, chạy được ngay trên trình duyệt!

### ✨ TÍNH NĂNG NỔI BẬT

#### 🎯 6 CHẾ ĐỘ CHƠI
- **👥 PVP Mode** - Đấu với bạn bè (2 người chơi)
- **🤖 VS AI Mode** - Đấu với AI (4 độ khó: Easy/Medium/Hard/Super)
- **⚔️ Survival Mode** - Sinh tồn càng lâu càng tốt, AI ngày càng mạnh
- **🏆 Tournament Mode** - Giải đấu 8 vòng với đối thủ ngẫu nhiên
- **🎯 Training Mode** - Luyện tập không giới hạn HP
- **⏱️ Time Attack Mode** - 60 giây gây damage tối đa

#### 🥊 4 KỸ NĂNG ĐẶC BIỆT
1. **⬆️ Uppercut (Phím 1)** - 20 damage, tung đối thủ bay lên
2. **💥 Combo Rush (Phím 2)** - 5 đòn liên tiếp x8 damage
3. **🛡️ Counter Shield (Phím 3)** - Phản sát thương về kẻ tấn công
4. **⚡ Lightning Dash (Phím 4)** - Lướt nhanh + 15 damage

#### 🗺️ 6 BẢN ĐỒ
- 🥊 **Classic Ring** - Võ đài quyền anh truyền thống
- 🌃 **Neon Arena** - Đấu trường neon phát sáng
- 🌋 **Volcano** - Núi lửa với lửa rơi
- 🚀 **Space** - Không gian vũ trụ với sao
- 🏯 **Dojo** - Võ đường Nhật Bản
- 🌆 **Cyber City** - Thành phố tương lai

#### 🎨 GIAO DIỆN & HIỆU ỨNG
- ✅ HP & Energy bars động
- ✅ Combo counter
- ✅ Skill cooldown display
- ✅ Hit flash effect
- ✅ Stun animation
- ✅ Particle effects
- ✅ Pause menu (ESC)
- ✅ Sound toggle
- ✅ Responsive design

---

## 🎮 HƯỚNG DẪN CHƠI

### 🕹️ ĐIỀU KHIỂN

#### Player 1 (Bên trái):
```
WASD     - Di chuyển (W: Nhảy, A: Trái, D: Phải)
F        - Đấm
G        - Chặn (giảm 70% damage)
1        - Uppercut (30 energy)
2        - Combo Rush (40 energy)
3        - Counter Shield (35 energy)
4        - Lightning Dash (25 energy)
ESC      - Tạm dừng
```

#### Player 2 (Bên phải - Chế độ PVP):
```
Arrow Keys  - Di chuyển (↑: Nhảy, ←: Trái, →: Phải)
End         - Đấm
Page Down   - Chặn
1-4         - Kỹ năng (giống Player 1)
```

### 📊 GAME MECHANICS

#### **HP System**
- Mỗi người chơi có 100 HP
- Đấm thường: 8 damage
- Chặn: giảm 70% damage (nhận 2.4 damage)
- HP = 0 → Thua

#### **Energy System**
- Tối đa: 100 energy
- Hồi phục: 0.15/frame (Training: 0.3/frame)
- Mỗi skill tiêu tốn energy khác nhau
- Không đủ energy → Không dùng skill được

#### **Combo System**
- Combo bắt đầu từ 2 hits
- Combo >= 3: Damage x1.5 + Gây choáng
- Combo reset sau 2 giây không đánh trúng

#### **Skill Cooldown**
- Uppercut: 180 frames (3 giây)
- Combo Rush: 200 frames (3.3 giây)
- Counter Shield: 240 frames (4 giây)
- Lightning Dash: 150 frames (2.5 giây)

---

## 🏆 CHẾ ĐỘ CHƠI CHI TIẾT

### ⚔️ Survival Mode
- Round 1-3: AI Easy
- Round 4-6: AI Medium
- Round 7-10: AI Hard
- Round 11+: Super AI
- Điểm: Round x 100
- High score lưu tự động

### 🏆 Tournament Mode
- 8 vòng đấu
- AI ngẫu nhiên mỗi vòng (Easy/Medium/Hard)
- Thắng 8/8 = Vô địch giải

### ⏱️ Time Attack Mode
- 60 giây
- Gây damage nhiều nhất
- Cả 2 người auto-heal
- High score lưu tự động

### 🎯 Training Mode
- Player 1 không mất HP
- Player 2 không phản công
- Năng lượng hồi nhanh
- Luyện tập kỹ năng thoải mái

---

## 🤖 HỆ THỐNG AI

### 🎮 4 Độ Khó AI

| Độ Khó | Reaction Time | Accuracy | Aggression | Skill Usage |
|--------|--------------|----------|------------|-------------|
| **Easy** | 30 frames | 50% | 30% | ❌ |
| **Medium** | 20 frames | 70% | 50% | ❌ |
| **Hard** | 10 frames | 90% | 70% | ✅ |
| **Super** | 5 frames | 95% | 90% | ✅ |

### 🧠 AI Behavior
- Tự động phát hiện khoảng cách
- Chặn khi bị tấn công
- Tiến lại khi xa
- Lùi lại khi HP thấp
- Sử dụng skill (Hard & Super)

---

## 💾 LƯU DỮ LIỆU

Game tự động lưu vào **localStorage**:
- Survival High Score
- Time Attack High Score
- Sound settings

---

## 🚀 CÀI ĐẶT & CHẠY

### ✅ Cách 1: Chạy trực tiếp
1. Mở file `game-boxing-ai-full.html` bằng trình duyệt
2. Chọn chế độ chơi
3. Chiến!

### 🌐 Cách 2: Deploy lên web
Xem hướng dẫn chi tiết: [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

**Nhanh nhất:**
1. Đổi tên file thành `index.html`
2. Upload lên GitHub Pages / Netlify / Vercel
3. Xong!

---

## 📦 CẤU TRÚC DỰ ÁN

```
py-simple/
├── game-boxing-ai-full.html    ← FILE CHÍNH (CHẠY FILE NÀY)
├── DEPLOY_GUIDE.md             ← Hướng dẫn deploy
├── README.md                   ← File này
└── game-boxing-ai-backup.html  ← Backup version
```

**Chỉ cần file:** `game-boxing-ai-full.html` (1596 dòng code)

---

## 🔧 YÊU CẦU HỆ THỐNG

### Trình duyệt hỗ trợ:
- ✅ Google Chrome (khuyến nghị)
- ✅ Microsoft Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Yêu cầu:
- HTML5 Canvas support
- JavaScript enabled
- LocalStorage enabled (cho high score)

### Hiệu năng:
- RAM: 50MB
- CPU: Bất kỳ
- FPS: 60fps ổn định

---

## 🎨 CUSTOMIZATION

### Thay đổi màu sắc
Tìm trong code:
```javascript
player1 = new Fighter(100, '#4a90e2', ...); // Màu xanh
player2 = new Fighter(750, '#e74c3c', ...); // Màu đỏ
```

### Thay đổi stats
```javascript
this.maxHp = 100;        // HP tối đa
this.maxEnergy = 100;    // Energy tối đa
this.speed = 5;          // Tốc độ di chuyển
this.jumpPower = 15;     // Lực nhảy
```

### Thêm map mới
```javascript
MAPS.newmap = {
    name: 'Map Name',
    icon: '🎨',
    draw() {
        // Canvas drawing code
    }
};
```

### Thêm skill mới
```javascript
SKILLS.newskill = {
    name: 'Skill Name',
    icon: '⚡',
    key: '5',
    energyCost: 50,
    cooldown: 240,
    execute(attacker, defender) {
        // Skill logic
    }
};
```

---

## 🐛 TROUBLESHOOTING

### ❓ Game không chạy?
- ✅ Bật JavaScript trong trình duyệt
- ✅ Dùng trình duyệt hiện đại
- ✅ Xóa cache (Ctrl+F5)

### ❓ Lag/giật?
- ✅ Đóng các tab khác
- ✅ Dùng Chrome/Edge
- ✅ Giảm độ phân giải màn hình

### ❓ Không lưu high score?
- ✅ Bật LocalStorage
- ✅ Không ở chế độ ẩn danh
- ✅ Kiểm tra quyền trình duyệt

---

## 📈 ROADMAP

### ✅ Đã hoàn thành
- [x] 6 chế độ chơi
- [x] 4 kỹ năng đặc biệt
- [x] 6 bản đồ
- [x] AI với 4 độ khó
- [x] Pause menu
- [x] Sound toggle
- [x] High score system
- [x] Responsive UI

### 🔜 Tính năng sắp tới
- [ ] Mobile touch controls
- [ ] Sound effects & music
- [ ] More characters
- [ ] Power-ups
- [ ] Online multiplayer
- [ ] Leaderboard
- [ ] Achievements

---

## 🤝 ĐÓNG GÓP

Mọi đóng góp đều được hoan nghênh!

1. Fork dự án
2. Tạo branch mới: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add some AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Tạo Pull Request

---

## 📄 LICENSE

MIT License - Tự do sử dụng cho mọi mục đích.

---

## 📞 LIÊN HỆ & HỖ TRỢ

- 💬 Issues: [GitHub Issues](https://github.com/yourusername/boxing-game/issues)
- 📧 Email: your.email@example.com
- 🌐 Website: https://yourwebsite.com

---

## 🙏 CREDITS

- **Developer**: Your Name
- **Inspiration**: Classic boxing games
- **Technology**: HTML5 Canvas, JavaScript ES6+
- **Tools**: VS Code, GitHub Copilot

---

## 🌟 STAR US!

Nếu bạn thích game này, hãy cho dự án 1 ⭐ trên GitHub!

[![GitHub stars](https://img.shields.io/github/stars/yourusername/boxing-game?style=social)](https://github.com/yourusername/boxing-game)

---

## 📸 SCREENSHOTS

### Menu chính
![Main Menu](screenshots/menu.png)

### Gameplay PVP
![PVP Mode](screenshots/pvp.png)

### AI Battle
![AI Mode](screenshots/ai.png)

### Time Attack
![Time Attack](screenshots/timeattack.png)

---

**Made with ❤️ and ☕**

🥊 **BOXING AI ULTIMATE** 🥊
