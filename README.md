# UI_Automation
# Automasi UI Saucedemo

Project ini dibuat untuk mengotomasi website [saucedemo.com](https://www.saucedemo.com) menggunakan Selenium WebDriver dan Mocha, sebagai tugas Web UI Automation DigitalSkola.

## Test Case
- Login berhasil  
- Urutkan produk dari A-Z  
- ogin gagal (negative test)  
- Validasi produk "Sauce Labs Backpack"

## Cara Menjalankan
```bash
npm install
npx mocha tests --recursive --timeout 60000 --reporter mochawesome
``

## Hasil Test
- Report HTML: `mochawesome-report/mochawesome.html`  
- Bisa dibuka di browser untuk melihat hasil

## Author
Cheps – DigitalSkola 2025
