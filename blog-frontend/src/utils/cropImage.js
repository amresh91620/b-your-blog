// src/utils/cropImage.js
export default function getCroppedImg(imageSrc, pixelCrop) {
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');

  return new Promise((resolve, reject) => {
    img.src = imageSrc;
    img.onload = () => {
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        img,
        pixelCrop.x * scaleX,
        pixelCrop.y * scaleY,
        pixelCrop.width * scaleX,
        pixelCrop.height * scaleY,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      canvas.toBlob((blob) => {
        if (!blob) return reject("Canvas is empty");
        const file = new File([blob], "avatar.jpeg", { type: "image/jpeg" });
        resolve(file);
      }, "image/jpeg");
    };
    img.onerror = (e) => reject(e);
  });
}
