import qrcode

url = "https://mikaaaeee.github.io/business-card/"

qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("assets/qr-code.png")
print("QR siap: assets/qr-code.png")