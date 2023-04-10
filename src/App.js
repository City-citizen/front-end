import './App.css';
//import Header from './componets/Header';
import NavBar from './componets/Navbar';

function App() {
  return (
    <>
      <div className='login'>
        <p>CITY</p>
        <input type='text' placeholder='아이디'></input><br/>
        <input type='password' placeholder='비밀번호'></input><br/>
        <button>로그인</button>
        <button>회원가입</button><br/>
        <button id='id_pass_find'>아이디 비밀번호 찾기</button>
      </div>
      <NavBar />
    </>
  );
}

export default App;