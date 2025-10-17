import pygame
import random
import sys

# Khởi tạo pygame
pygame.init()

# Cấu hình cửa sổ
WIDTH, HEIGHT = 600, 400
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("🚗 Tránh Vật Cản")

# Màu sắc
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
BLUE = (0, 150, 255)
GRAY = (40, 40, 40)

# FPS
FPS = 60

# Người chơi
PLAYER_WIDTH, PLAYER_HEIGHT = 50, 30
player_speed = 5

# Vật cản
obstacle_width = 40
obstacle_height = 20

# Font
font = pygame.font.SysFont("consolas", 22)

# Vẽ người chơi
def draw_player(x, y):
    pygame.draw.rect(WIN, BLUE, (x, y, PLAYER_WIDTH, PLAYER_HEIGHT))

# Vẽ vật cản
def draw_obstacles(obstacles):
    for obs in obstacles:
        pygame.draw.rect(WIN, RED, obs)

# Hàm hiển thị điểm
def draw_score(score):
    text = font.render(f"Score: {score}", True, WHITE)
    WIN.blit(text, (10, 10))

# Hàm màn hình game over
def game_over_screen(final_score):
    WIN.fill(BLACK)
    game_over_text = font.render("💥 GAME OVER 💥", True, RED)
    score_text = font.render(f"Final Score: {final_score}", True, WHITE)
    restart_text = font.render("Nhấn SPACE để chơi lại, ESC để thoát", True, WHITE)
    WIN.blit(game_over_text, (WIDTH//2 - 100, HEIGHT//2 - 60))
    WIN.blit(score_text, (WIDTH//2 - 80, HEIGHT//2 - 20))
    WIN.blit(restart_text, (WIDTH//2 - 180, HEIGHT//2 + 20))
    pygame.display.update()

    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    return True  # Chơi lại
                elif event.key == pygame.K_ESCAPE:
                    pygame.quit()
                    sys.exit()
    return False

# Hàm chính
def main():
    # Khởi tạo các biến game
    player_x = WIDTH // 2 - PLAYER_WIDTH // 2
    player_y = HEIGHT - PLAYER_HEIGHT - 10
    obstacles = []
    obstacle_speed = 4
    score = 0

    clock = pygame.time.Clock()
    running = True

    while running:
        clock.tick(FPS)
        WIN.fill(GRAY)

        # Tạo vật cản ngẫu nhiên
        if random.randint(1, 25) == 1:
            x = random.randint(0, WIDTH - obstacle_width)
            obstacles.append(pygame.Rect(x, 0, obstacle_width, obstacle_height))

        # Di chuyển vật cản
        for obs in obstacles[:]:
            obs.y += obstacle_speed
            if obs.y > HEIGHT:
                obstacles.remove(obs)
                score += 1

        # Kiểm tra va chạm
        player_rect = pygame.Rect(player_x, player_y, PLAYER_WIDTH, PLAYER_HEIGHT)
        for obs in obstacles:
            if player_rect.colliderect(obs):
                if game_over_screen(score):
                    main()  # Chơi lại
                return

        # Nhập bàn phím
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and player_x > 0:
            player_x -= player_speed
        if keys[pygame.K_RIGHT] and player_x < WIDTH - PLAYER_WIDTH:
            player_x += player_speed

        # Vẽ tất cả
        draw_player(player_x, player_y)
        draw_obstacles(obstacles)
        draw_score(score)

        pygame.display.update()

        # Thoát game
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
                pygame.quit()
                sys.exit()

if __name__ == "__main__":
    main()