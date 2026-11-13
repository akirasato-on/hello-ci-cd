export function greet(name) {
  return name.trim()
    ? `ようこそ、${name.trim()}さん！`
    : "名前を入力してください";
}
