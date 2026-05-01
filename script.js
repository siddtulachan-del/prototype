function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const tabs = document.querySelectorAll('.screen-tabs button');
  const map = { s1:0, s2:1, s3:2, s4:3, s5:4 };
  tabs.forEach((t,i) => t.classList.toggle('active', i === map[id]));
  window.scrollTo(0,0);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function selectPriority(el) {
  document.querySelectorAll('.priority-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}
