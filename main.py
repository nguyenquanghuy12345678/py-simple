# -*- coding: utf-8 -*-
import sys
import io

# Cấu hình stdin và stdout với UTF-8 một lần
sys.stdin.reconfigure(encoding='utf-8')
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def greet(name: str):
    print(f"Xin chào, {name}! 👋 Chào mừng đến với py-simple.")

def add(a: float, b: float) -> float:
    return a + b

def main():
    print("=== PY-SIMPLE ===")
    try:
        name = input("Nhập tên của bạn: ")  # Sử dụng dấu tiếng Việt
        greet(name)

        print("\nTính tổng hai số:")
        x = float(input("Nhập số thứ nhất: "))
        y = float(input("Nhập số thứ hai: "))
        print(f"Tổng là: {add(x, y)}")
    except ValueError:
        print("Vui lòng nhập số hợp lệ!")

if __name__ == "__main__":
    main()