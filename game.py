import os
import random
import time
import sys

# Xóa màn hình (cho Windows và macOS/Linux)
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

# Khởi tạo người chơi và game
player_pos = 5
width = 20
obstacles = []
score = 0

def draw():
    clear()
    print("=== GAME TRÁNH VẬT CẢN ===")
    print(f"Điểm: {score}")
    print("=" * width)

    # Vẽ vật cản và người chơi
    for i in range(10):
        if i in obstacles:
            line = [" "] * width
            line[random.randint(0, width-1)] = "X"
            print("".join(line))
        else:
            print(" " * width)

    # Vẽ người chơi
    line = [" "] * width
    line[player_pos] = "O"
    print("".join(line))
    print("=" * width)
    print("← (A) sang trái | → (D) sang phải | (Q) thoát")

def move_player(direction):
    global player_pos
    if direction == 'a' and player_pos > 0:
        player_pos -= 1
    elif direction == 'd' and player_pos < width - 1:
        player_pos += 1

def main():
    global score, obstacles
    try:
        while True:
            obstacles = [random.randint(0, 9)]
            draw()
            print("\nNhập lệnh: ", end="")
            ch = sys.stdin.readline().strip().lower()

            if ch == 'q':
                clear()
                print("Cảm ơn bạn đã chơi! 🎮")
                break

            move_player(ch)
            if random.randint(0, width-1) == player_pos:
                clear()
                print("💥 Bạn đã va chạm! Điểm:", score)
                break

            score += 1
            time.sleep(0.3)

    except KeyboardInterrupt:
        print("\nThoát game.")

if __name__ == "__main__":
    main()
