let url = 'https://golnk.ru/ZaRVJ';
let response = await fetch(url);
let commits = await response.json(); // читаем ответ в формате JSON
console.log(commits[0].author.login);