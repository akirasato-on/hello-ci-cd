export function greet(name) {
  return name.trim()
    ? `こんにちは、${name.trim()}さん！`
    : "こんにちは！";
}