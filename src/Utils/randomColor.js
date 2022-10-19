export default function randomColor() {
  const randomHex = Math.round(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  return randomHex;
}
