// BOXING GAME - MAPS SYSTEM
// Hệ thống các map đấu khác nhau

class MapSystem {
    constructor() {
        this.maps = {
            // Map 1: Classic Ring - Sàn đấu cổ điển
            classic: {
                name: 'Classic Ring',
                background: '#1a1a2e',
                floor: '#8B4513',
                icon: '🥊',
                draw: function(ctx, canvas) {
                    // Background gradient
                    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    gradient.addColorStop(0, '#1a1a2e');
                    gradient.addColorStop(1, '#16213e');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Ring ropes
                    ctx.strokeStyle = '#ff0000';
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.moveTo(0, 100);
                    ctx.lineTo(canvas.width, 100);
                    ctx.moveTo(0, 200);
                    ctx.lineTo(canvas.width, 200);
                    ctx.stroke();
                    
                    // Floor
                    ctx.fillStyle = this.floor;
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
                    
                    // Floor lines
                    ctx.strokeStyle = '#654321';
                    ctx.lineWidth = 2;
                    for (let i = 0; i < canvas.width; i += 50) {
                        ctx.beginPath();
                        ctx.moveTo(i, canvas.height - 100);
                        ctx.lineTo(i, canvas.height);
                        ctx.stroke();
                    }
                }
            },
            
            // Map 2: Neon Arena - Võ đài neon
            neon: {
                name: 'Neon Arena',
                background: '#0a0a1a',
                floor: '#1a1a3a',
                icon: '🌃',
                draw: function(ctx, canvas) {
                    // Dark background
                    ctx.fillStyle = this.background;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Neon grid floor
                    ctx.strokeStyle = '#00ffff';
                    ctx.lineWidth = 2;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#00ffff';
                    
                    // Vertical lines
                    for (let i = 0; i < canvas.width; i += 40) {
                        const alpha = 0.3 + Math.sin(Date.now() / 500 + i) * 0.2;
                        ctx.globalAlpha = alpha;
                        ctx.beginPath();
                        ctx.moveTo(i, canvas.height - 100);
                        ctx.lineTo(i, canvas.height);
                        ctx.stroke();
                    }
                    
                    // Horizontal lines
                    for (let i = canvas.height - 100; i < canvas.height; i += 20) {
                        const alpha = 0.3 + Math.sin(Date.now() / 500 + i) * 0.2;
                        ctx.globalAlpha = alpha;
                        ctx.beginPath();
                        ctx.moveTo(0, i);
                        ctx.lineTo(canvas.width, i);
                        ctx.stroke();
                    }
                    
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                    
                    // Neon pillars
                    const colors = ['#ff00ff', '#00ffff', '#ffff00'];
                    for (let i = 0; i < 3; i++) {
                        ctx.fillStyle = colors[i];
                        ctx.shadowBlur = 20;
                        ctx.shadowColor = colors[i];
                        ctx.fillRect(i * 300 + 100, 50, 10, canvas.height - 150);
                    }
                    ctx.shadowBlur = 0;
                }
            },
            
            // Map 3: Volcano - Núi lửa
            volcano: {
                name: 'Volcano Stage',
                background: '#2a0a0a',
                floor: '#4a1a1a',
                icon: '🌋',
                draw: function(ctx, canvas) {
                    // Red-orange gradient background
                    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    gradient.addColorStop(0, '#1a0000');
                    gradient.addColorStop(0.5, '#2a0a0a');
                    gradient.addColorStop(1, '#4a1a00');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Lava floor
                    ctx.fillStyle = '#ff4400';
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
                    
                    // Lava waves
                    ctx.strokeStyle = '#ffaa00';
                    ctx.lineWidth = 3;
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        for (let x = 0; x < canvas.width; x += 20) {
                            const y = canvas.height - 90 + i * 20 + Math.sin((x + Date.now() / 100) / 30) * 10;
                            if (x === 0) ctx.moveTo(x, y);
                            else ctx.lineTo(x, y);
                        }
                        ctx.stroke();
                    }
                    
                    // Floating embers
                    ctx.fillStyle = '#ffcc00';
                    for (let i = 0; i < 15; i++) {
                        const x = (i * 60 + Date.now() / 20) % canvas.width;
                        const y = canvas.height - 100 - ((Date.now() / 10 + i * 30) % 300);
                        ctx.globalAlpha = 0.7;
                        ctx.fillText('🔥', x, y);
                    }
                    ctx.globalAlpha = 1;
                    
                    // Rock platforms
                    ctx.fillStyle = '#3a1a1a';
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 5);
                }
            },
            
            // Map 4: Ice Palace - Cung điện băng
            ice: {
                name: 'Ice Palace',
                background: '#e6f7ff',
                floor: '#b3e0ff',
                icon: '❄️',
                draw: function(ctx, canvas) {
                    // Light blue gradient
                    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    gradient.addColorStop(0, '#e6f7ff');
                    gradient.addColorStop(1, '#b3d9ff');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Ice crystals background
                    ctx.strokeStyle = '#99ccff';
                    ctx.lineWidth = 2;
                    ctx.globalAlpha = 0.3;
                    for (let i = 0; i < 20; i++) {
                        const x = (i * 50 + Math.sin(Date.now() / 1000 + i) * 20) % canvas.width;
                        const y = (i * 30 + Math.cos(Date.now() / 1000 + i) * 20) % (canvas.height - 100);
                        
                        ctx.beginPath();
                        for (let j = 0; j < 6; j++) {
                            const angle = (Math.PI * 2 * j) / 6;
                            const px = x + Math.cos(angle) * 15;
                            const py = y + Math.sin(angle) * 15;
                            if (j === 0) ctx.moveTo(px, py);
                            else ctx.lineTo(px, py);
                        }
                        ctx.closePath();
                        ctx.stroke();
                    }
                    ctx.globalAlpha = 1;
                    
                    // Ice floor
                    const iceGradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
                    iceGradient.addColorStop(0, '#cce6ff');
                    iceGradient.addColorStop(1, '#99ccff');
                    ctx.fillStyle = iceGradient;
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
                    
                    // Ice reflections
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 2;
                    ctx.globalAlpha = 0.5;
                    for (let i = 0; i < canvas.width; i += 100) {
                        ctx.beginPath();
                        ctx.moveTo(i, canvas.height - 100);
                        ctx.lineTo(i + 50, canvas.height);
                        ctx.stroke();
                    }
                    ctx.globalAlpha = 1;
                    
                    // Falling snowflakes
                    ctx.fillStyle = '#ffffff';
                    for (let i = 0; i < 30; i++) {
                        const x = (i * 30 + Date.now() / 50) % canvas.width;
                        const y = ((Date.now() / 30 + i * 20) % canvas.height);
                        ctx.fillText('❄', x, y);
                    }
                }
            },
            
            // Map 5: Space Station - Trạm vũ trụ
            space: {
                name: 'Space Station',
                background: '#000033',
                floor: '#1a1a4a',
                icon: '🚀',
                draw: function(ctx, canvas) {
                    // Space background
                    ctx.fillStyle = '#000033';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Stars
                    ctx.fillStyle = '#ffffff';
                    for (let i = 0; i < 100; i++) {
                        const x = (i * 73) % canvas.width;
                        const y = (i * 97) % canvas.height;
                        const size = (i % 3) + 1;
                        ctx.fillRect(x, y, size, size);
                    }
                    
                    // Twinkling stars
                    const twinkle = Math.sin(Date.now() / 200);
                    ctx.globalAlpha = 0.5 + twinkle * 0.5;
                    for (let i = 0; i < 20; i++) {
                        const x = (i * 137) % canvas.width;
                        const y = (i * 157) % canvas.height;
                        ctx.fillText('✨', x, y);
                    }
                    ctx.globalAlpha = 1;
                    
                    // Earth in background
                    const earthGrad = ctx.createRadialGradient(150, 150, 10, 150, 150, 80);
                    earthGrad.addColorStop(0, '#0066ff');
                    earthGrad.addColorStop(0.5, '#0044aa');
                    earthGrad.addColorStop(1, '#002266');
                    ctx.fillStyle = earthGrad;
                    ctx.beginPath();
                    ctx.arc(150, 150, 60, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Space floor with grid
                    ctx.fillStyle = '#1a1a4a';
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
                    
                    // Futuristic grid
                    ctx.strokeStyle = '#00ff00';
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = 0.5;
                    for (let i = 0; i < canvas.width; i += 30) {
                        ctx.beginPath();
                        ctx.moveTo(i, canvas.height - 100);
                        ctx.lineTo(i, canvas.height);
                        ctx.stroke();
                    }
                    for (let i = canvas.height - 100; i < canvas.height; i += 20) {
                        ctx.beginPath();
                        ctx.moveTo(0, i);
                        ctx.lineTo(canvas.width, i);
                        ctx.stroke();
                    }
                    ctx.globalAlpha = 1;
                }
            },
            
            // Map 6: Dojo - Võ đường truyền thống
            dojo: {
                name: 'Traditional Dojo',
                background: '#f5e6d3',
                floor: '#d4a574',
                icon: '🏯',
                draw: function(ctx, canvas) {
                    // Beige background
                    ctx.fillStyle = '#f5e6d3';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Paper wall texture
                    ctx.strokeStyle = '#d4a574';
                    ctx.lineWidth = 4;
                    for (let i = 0; i < canvas.width; i += 150) {
                        ctx.strokeRect(i + 10, 50, 130, canvas.height - 200);
                    }
                    
                    // Wooden floor
                    ctx.fillStyle = '#d4a574';
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
                    
                    // Wood grain
                    ctx.strokeStyle = '#b8935e';
                    ctx.lineWidth = 2;
                    for (let i = 0; i < canvas.width; i += 80) {
                        for (let j = 0; j < 5; j++) {
                            ctx.beginPath();
                            const y = canvas.height - 95 + j * 20;
                            ctx.moveTo(i, y);
                            ctx.quadraticCurveTo(i + 40, y + (j % 2 ? 5 : -5), i + 80, y);
                            ctx.stroke();
                        }
                    }
                    
                    // Bamboo decorations
                    ctx.fillStyle = '#4a7c4e';
                    ctx.strokeStyle = '#2a5c2e';
                    ctx.lineWidth = 3;
                    for (let i = 0; i < 3; i++) {
                        const x = 100 + i * 300;
                        ctx.strokeRect(x, 80, 8, 200);
                        ctx.fillText('🎋', x - 10, 60);
                    }
                    
                    // Japanese characters (decoration)
                    ctx.font = 'bold 40px Arial';
                    ctx.fillStyle = '#8b0000';
                    ctx.globalAlpha = 0.3;
                    ctx.fillText('武道', canvas.width / 2 - 40, 150);
                    ctx.globalAlpha = 1;
                }
            },
            
            // Map 7: Cyber City - Thành phố tương lai
            cyber: {
                name: 'Cyber City',
                background: '#0a0a1f',
                floor: '#1f1f3f',
                icon: '🌆',
                draw: function(ctx, canvas) {
                    // Dark cyberpunk background
                    ctx.fillStyle = '#0a0a1f';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Cityscape silhouette
                    ctx.fillStyle = '#1a1a2f';
                    const buildings = [
                        {x: 0, h: 150}, {x: 100, h: 200}, {x: 200, h: 120},
                        {x: 300, h: 180}, {x: 400, h: 140}, {x: 500, h: 220},
                        {x: 600, h: 160}, {x: 700, h: 190}, {x: 800, h: 130}
                    ];
                    
                    buildings.forEach(b => {
                        ctx.fillRect(b.x, canvas.height - 100 - b.h, 90, b.h);
                        
                        // Windows
                        ctx.fillStyle = '#ffff00';
                        for (let i = 0; i < b.h / 20; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Math.random() > 0.3) {
                                    ctx.fillRect(b.x + 10 + j * 25, canvas.height - 100 - b.h + i * 20 + 5, 15, 10);
                                }
                            }
                        }
                        ctx.fillStyle = '#1a1a2f';
                    });
                    
                    // Holographic floor
                    ctx.strokeStyle = '#ff00ff';
                    ctx.lineWidth = 2;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = '#ff00ff';
                    
                    for (let i = 0; i < canvas.width; i += 50) {
                        const offset = Math.sin(Date.now() / 200 + i) * 10;
                        ctx.globalAlpha = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(i, canvas.height - 100 + offset);
                        ctx.lineTo(i, canvas.height);
                        ctx.stroke();
                    }
                    
                    ctx.shadowBlur = 0;
                    ctx.globalAlpha = 1;
                    
                    // Flying cars
                    ctx.font = '20px Arial';
                    const carX = (Date.now() / 10) % (canvas.width + 100);
                    ctx.fillText('🚗', carX, 120);
                }
            },
            
            // Map 8: Jungle Temple - Đền trong rừng
            jungle: {
                name: 'Jungle Temple',
                background: '#1a3a1a',
                floor: '#5a4a3a',
                icon: '🌴',
                draw: function(ctx, canvas) {
                    // Green jungle background
                    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                    gradient.addColorStop(0, '#0d2d0d');
                    gradient.addColorStop(1, '#1a3a1a');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Vines
                    ctx.strokeStyle = '#2d5a2d';
                    ctx.lineWidth = 4;
                    for (let i = 0; i < 10; i++) {
                        const x = i * 90 + 50;
                        ctx.beginPath();
                        ctx.moveTo(x, 0);
                        for (let y = 0; y < canvas.height - 100; y += 30) {
                            const offset = Math.sin(y / 20 + i) * 15;
                            ctx.lineTo(x + offset, y);
                        }
                        ctx.stroke();
                        
                        // Leaves on vines
                        ctx.fillStyle = '#3d7a3d';
                        for (let y = 20; y < canvas.height - 100; y += 60) {
                            ctx.fillText('🍃', x + Math.sin(y / 20 + i) * 15, y);
                        }
                    }
                    
                    // Temple stones floor
                    ctx.fillStyle = '#5a4a3a';
                    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
                    
                    // Stone tiles
                    ctx.strokeStyle = '#3a2a1a';
                    ctx.lineWidth = 2;
                    for (let i = 0; i < canvas.width; i += 60) {
                        for (let j = canvas.height - 100; j < canvas.height; j += 40) {
                            ctx.strokeRect(i + 5, j + 5, 50, 30);
                        }
                    }
                    
                    // Moss patches
                    ctx.fillStyle = '#2d5a2d';
                    ctx.globalAlpha = 0.4;
                    for (let i = 0; i < 15; i++) {
                        const x = (i * 73) % canvas.width;
                        const y = canvas.height - 90 + (i % 3) * 25;
                        ctx.fillRect(x, y, 20, 15);
                    }
                    ctx.globalAlpha = 1;
                    
                    // Temple ruins decoration
                    ctx.fillStyle = '#6a5a4a';
                    ctx.fillRect(50, canvas.height - 200, 100, 100);
                    ctx.fillRect(750, canvas.height - 250, 120, 150);
                }
            }
        };
        
        this.currentMap = 'classic';
    }
    
    // Set current map
    setMap(mapName) {
        if (this.maps[mapName]) {
            this.currentMap = mapName;
            return true;
        }
        return false;
    }
    
    // Draw current map
    drawCurrentMap(ctx, canvas) {
        const map = this.maps[this.currentMap];
        if (map && map.draw) {
            map.draw(ctx, canvas);
        }
    }
    
    // Get all map names
    getAllMaps() {
        return Object.keys(this.maps).map(key => ({
            id: key,
            name: this.maps[key].name,
            icon: this.maps[key].icon
        }));
    }
    
    // Get current map info
    getCurrentMapInfo() {
        const map = this.maps[this.currentMap];
        return {
            id: this.currentMap,
            name: map.name,
            icon: map.icon
        };
    }
}

// Export for use in main game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MapSystem;
}
