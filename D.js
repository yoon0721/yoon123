

function register() {
  const username = document.querySelector("#signUp-username").value;
  const password = document.querySelector("#signUp-password").value;

  if (!username || !password) {
    alert("아이디와 비밀번호를 입력하세요.");
  }

  if (localStorage.getItem(username)) {
    alert("이미 존재하는 아이디입니다.");
  }else{
      localStorage.setItem(username, password);
      alert("회원가입 성공!");
  }
}

function login() {
  const username = document.querySelector("#login-username").value;
  const password = document.querySelector("#login-password").value;

  const storedPassword = localStorage.getItem(username);

  if (!storedPassword) {
    alert("존재하지 않는 아이디입니다.");
  }

  if (storedPassword === password) {
    alert(username +"님 환영합니다!");
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}
