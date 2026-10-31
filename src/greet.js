export function greet(name) {
  return name.trim()
    ? `こんにちは、${name.trim()}さん！`
    : "名前を入力してください";
}
