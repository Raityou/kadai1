const btn = document.getElementById('greetBtn');

const messages = [
  '凶',
  '吉',
  '小吉',
  '中吉',
  '大吉'
];

btn.addEventListener('click', () => {

  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  
  alert(message);
});
