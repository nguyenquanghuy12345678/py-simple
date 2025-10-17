// BOXING GAME - SKILLS SYSTEM
// Hệ thống kỹ năng đặc biệt cho game boxing

class SkillSystem {
    constructor() {
        this.skills = {
            // Skill 1: Uppercut - Đấm móc hàm
            uppercut: {
                name: 'Uppercut',
                damage: 20,
                cooldown: 180,
                energyCost: 30,
                icon: '⬆️',
                color: '#ff9900',
                description: 'Đấm móc hàm mạnh mẽ',
                execute: function(attacker, defender, ctx) {
                    // Visual effect
                    ctx.save();
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = 5;
                    const x = attacker.x + attacker.width/2;
                    const y = attacker.y;
                    
                    // Draw uppercut arc
                    ctx.beginPath();
                    ctx.arc(x, y + 40, 30, Math.PI, 0, false);
                    ctx.stroke();
                    
                    // Stars effect
                    for(let i = 0; i < 5; i++) {
                        ctx.fillStyle = '#ffcc00';
                        const angle = (Math.PI * 2 * i) / 5;
                        const sx = x + Math.cos(angle) * 40;
                        const sy = y + Math.sin(angle) * 40;
                        ctx.fillText('★', sx, sy);
                    }
                    ctx.restore();
                    
                    // Launch defender upward
                    if (defender) {
                        defender.velocityY = -18;
                        defender.stunned = true;
                        defender.stunnedTime = 45;
                    }
                }
            },
            
            // Skill 2: Combo Rush - Đòn liên hoàn
            comboRush: {
                name: 'Combo Rush',
                damage: 8,
                hits: 5,
                cooldown: 200,
                energyCost: 40,
                icon: '💥',
                color: '#ff0000',
                description: '5 đòn liên hoàn cực nhanh',
                execute: function(attacker, defender, ctx) {
                    let hitCount = 0;
                    const rushInterval = setInterval(() => {
                        if (hitCount >= this.hits) {
                            clearInterval(rushInterval);
                            return;
                        }
                        
                        // Visual effect for each hit
                        ctx.save();
                        ctx.fillStyle = this.color;
                        ctx.globalAlpha = 0.7;
                        const x = attacker.x + (attacker.facingRight ? 50 : -50);
                        const y = attacker.y + 20 + (hitCount * 10);
                        ctx.fillText('💥', x, y);
                        ctx.restore();
                        
                        // Deal damage
                        if (defender && !defender.isBlocking) {
                            defender.takeDamage(this.damage, attacker);
                        }
                        
                        hitCount++;
                    }, 100);
                }
            },
            
            // Skill 3: Counter Shield - Khiên phản đòn
            counterShield: {
                name: 'Counter Shield',
                cooldown: 240,
                energyCost: 35,
                duration: 90,
                icon: '🛡️',
                color: '#00ffff',
                description: 'Phản đòn mọi tấn công trong 3 giây',
                execute: function(attacker, defender, ctx) {
                    attacker.counterShieldActive = true;
                    attacker.counterShieldTime = this.duration;
                    
                    // Visual shield effect
                    const shieldInterval = setInterval(() => {
                        if (!attacker.counterShieldActive) {
                            clearInterval(shieldInterval);
                            return;
                        }
                        
                        ctx.save();
                        ctx.strokeStyle = this.color;
                        ctx.lineWidth = 3;
                        ctx.globalAlpha = 0.6;
                        
                        // Rotating shield
                        const time = Date.now() / 100;
                        for(let i = 0; i < 6; i++) {
                            const angle = (Math.PI * 2 * i / 6) + time;
                            const x1 = attacker.x + attacker.width/2 + Math.cos(angle) * 45;
                            const y1 = attacker.y + attacker.height/2 + Math.sin(angle) * 45;
                            const x2 = attacker.x + attacker.width/2 + Math.cos(angle + Math.PI/3) * 45;
                            const y2 = attacker.y + attacker.height/2 + Math.sin(angle + Math.PI/3) * 45;
                            
                            ctx.beginPath();
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.stroke();
                        }
                        ctx.restore();
                    }, 50);
                }
            },
            
            // Skill 4: Lightning Dash - Lướt chớp nhoáng
            lightningDash: {
                name: 'Lightning Dash',
                damage: 15,
                cooldown: 150,
                energyCost: 25,
                icon: '⚡',
                color: '#ffff00',
                description: 'Lướt nhanh và tấn công',
                execute: function(attacker, defender, ctx) {
                    const dashDistance = 150;
                    const direction = attacker.facingRight ? 1 : -1;
                    
                    // Lightning trail effect
                    const startX = attacker.x;
                    const endX = attacker.x + (dashDistance * direction);
                    
                    ctx.save();
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = 4;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = this.color;
                    
                    // Zigzag lightning
                    ctx.beginPath();
                    ctx.moveTo(startX, attacker.y + 40);
                    for(let i = 0; i < 5; i++) {
                        const x = startX + (dashDistance * i / 5) * direction;
                        const y = attacker.y + 40 + (i % 2 === 0 ? -15 : 15);
                        ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                    ctx.restore();
                    
                    // Move attacker
                    attacker.x = Math.max(0, Math.min(endX, 900 - attacker.width));
                    
                    // Check collision and damage
                    if (defender) {
                        const distance = Math.abs(attacker.x - defender.x);
                        if (distance < 60) {
                            defender.takeDamage(this.damage, attacker);
                            defender.velocityX = direction * 8;
                        }
                    }
                }
            },
            
            // Skill 5: Dragon Punch - Quyền rồng
            dragonPunch: {
                name: 'Dragon Punch',
                damage: 30,
                cooldown: 300,
                energyCost: 50,
                icon: '🐉',
                color: '#ff4444',
                description: 'Đòn quyền cực mạnh với hiệu ứng lửa',
                execute: function(attacker, defender, ctx) {
                    // Fire spiral effect
                    ctx.save();
                    const centerX = attacker.x + attacker.width/2;
                    const centerY = attacker.y + 20;
                    
                    // Draw fire spiral
                    for(let i = 0; i < 20; i++) {
                        const angle = (i / 20) * Math.PI * 4;
                        const radius = i * 3;
                        const x = centerX + Math.cos(angle) * radius;
                        const y = centerY + Math.sin(angle) * radius - i * 2;
                        
                        ctx.fillStyle = i % 2 === 0 ? '#ff4444' : '#ff8800';
                        ctx.globalAlpha = 0.7;
                        ctx.fillText('🔥', x, y);
                    }
                    
                    // Dragon head
                    ctx.font = 'bold 40px Arial';
                    ctx.fillText('🐉', centerX + (attacker.facingRight ? 40 : -40), centerY);
                    ctx.restore();
                    
                    // Massive damage and knockback
                    if (defender) {
                        defender.takeDamage(this.damage, attacker);
                        defender.velocityX = (attacker.facingRight ? 1 : -1) * 15;
                        defender.velocityY = -15;
                        defender.stunned = true;
                        defender.stunnedTime = 60;
                    }
                    
                    // Camera shake effect (would need to implement in main game)
                    console.log('DRAGON PUNCH! Screen shake!');
                }
            },
            
            // Skill 6: Heal - Hồi máu
            heal: {
                name: 'Meditation',
                healAmount: 25,
                cooldown: 400,
                energyCost: 40,
                icon: '💚',
                color: '#00ff00',
                description: 'Hồi 25 HP',
                execute: function(attacker, defender, ctx) {
                    // Healing particles
                    ctx.save();
                    const x = attacker.x + attacker.width/2;
                    const y = attacker.y + attacker.height/2;
                    
                    for(let i = 0; i < 10; i++) {
                        const angle = (Math.PI * 2 * i) / 10;
                        const radius = 30 + Math.sin(Date.now() / 100 + i) * 10;
                        const px = x + Math.cos(angle) * radius;
                        const py = y + Math.sin(angle) * radius;
                        
                        ctx.fillStyle = this.color;
                        ctx.globalAlpha = 0.8;
                        ctx.fillText('✨', px, py);
                    }
                    ctx.restore();
                    
                    // Heal
                    attacker.hp = Math.min(attacker.maxHp, attacker.hp + this.healAmount);
                    
                    // Visual feedback
                    console.log(`${attacker.name} healed ${this.healAmount} HP!`);
                }
            },
            
            // Skill 7: Time Freeze - Đóng băng thời gian
            timeFreeze: {
                name: 'Time Freeze',
                cooldown: 350,
                energyCost: 45,
                duration: 120,
                icon: '⏰',
                color: '#00ccff',
                description: 'Làm chậm đối thủ 4 giây',
                execute: function(attacker, defender, ctx) {
                    if (defender) {
                        defender.slowedTime = this.duration;
                        defender.originalSpeed = defender.speed;
                        defender.speed = defender.speed * 0.3;
                        
                        // Frozen effect
                        const freezeInterval = setInterval(() => {
                            if (!defender.slowedTime || defender.slowedTime <= 0) {
                                defender.speed = defender.originalSpeed;
                                clearInterval(freezeInterval);
                                return;
                            }
                            
                            ctx.save();
                            ctx.strokeStyle = this.color;
                            ctx.lineWidth = 3;
                            ctx.globalAlpha = 0.5;
                            
                            // Ice crystals around defender
                            for(let i = 0; i < 6; i++) {
                                const angle = (Math.PI * 2 * i / 6) + Date.now() / 500;
                                const x = defender.x + defender.width/2 + Math.cos(angle) * 50;
                                const y = defender.y + defender.height/2 + Math.sin(angle) * 50;
                                ctx.fillStyle = '#aaddff';
                                ctx.fillText('❄️', x, y);
                            }
                            ctx.restore();
                            
                            defender.slowedTime--;
                        }, 50);
                    }
                }
            },
            
            // Skill 8: Berserker Mode - Chế độ cuồng nộ
            berserkerMode: {
                name: 'Berserker',
                cooldown: 450,
                energyCost: 60,
                duration: 180,
                icon: '😡',
                color: '#ff0000',
                description: 'Tăng 50% sát thương trong 6 giây',
                execute: function(attacker, defender, ctx) {
                    attacker.berserkerActive = true;
                    attacker.berserkerTime = this.duration;
                    attacker.damageMultiplier = 1.5;
                    
                    // Red aura effect
                    const auraInterval = setInterval(() => {
                        if (!attacker.berserkerActive) {
                            attacker.damageMultiplier = 1.0;
                            clearInterval(auraInterval);
                            return;
                        }
                        
                        ctx.save();
                        ctx.fillStyle = this.color;
                        ctx.globalAlpha = 0.3;
                        
                        // Pulsing red aura
                        const pulseSize = 10 + Math.sin(Date.now() / 100) * 5;
                        ctx.fillRect(
                            attacker.x - pulseSize/2, 
                            attacker.y - pulseSize/2, 
                            attacker.width + pulseSize, 
                            attacker.height + pulseSize
                        );
                        
                        // Angry particles
                        for(let i = 0; i < 3; i++) {
                            const px = attacker.x + Math.random() * attacker.width;
                            const py = attacker.y - Math.random() * 20;
                            ctx.fillText('💢', px, py);
                        }
                        ctx.restore();
                    }, 100);
                }
            }
        };
        
        this.cooldowns = {};
    }
    
    // Check if skill is ready
    canUseSkill(skillName) {
        return !this.cooldowns[skillName] || this.cooldowns[skillName] <= 0;
    }
    
    // Use skill
    useSkill(skillName, attacker, defender, ctx) {
        const skill = this.skills[skillName];
        if (!skill) return false;
        
        // Check energy
        if (attacker.energy < skill.energyCost) {
            console.log('Not enough energy!');
            return false;
        }
        
        // Check cooldown
        if (!this.canUseSkill(skillName)) {
            console.log('Skill on cooldown!');
            return false;
        }
        
        // Execute skill
        skill.execute(attacker, defender, ctx);
        
        // Consume energy
        attacker.energy -= skill.energyCost;
        
        // Set cooldown
        this.cooldowns[skillName] = skill.cooldown;
        
        return true;
    }
    
    // Update cooldowns
    updateCooldowns() {
        for (let skill in this.cooldowns) {
            if (this.cooldowns[skill] > 0) {
                this.cooldowns[skill]--;
            }
        }
    }
    
    // Get skill info for display
    getSkillInfo(skillName) {
        const skill = this.skills[skillName];
        const cooldown = this.cooldowns[skillName] || 0;
        const ready = this.canUseSkill(skillName);
        
        return {
            name: skill.name,
            icon: skill.icon,
            description: skill.description,
            cooldown: cooldown,
            maxCooldown: skill.cooldown,
            ready: ready,
            energyCost: skill.energyCost
        };
    }
}

// Export for use in main game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkillSystem;
}
