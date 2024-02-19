import '../../../styles/MyPage.css';

import { Link } from 'react-router-dom';


const MyPage = () => {

    const email = sessionStorage.getItem("email");
    const nickName = sessionStorage.getItem("nickName");
    const provider = sessionStorage.getItem("provider");

    return (
        <>
            <h1>M Y P A G E</h1>
            <div className="container">
                <div className="info-container box">
                    <p className='nickName'>{nickName} 님 </p>
                    <p className='email'>({email})</p>
                    <div className='myBtn_group'>
                        <button className="myBtn">
                            <Link to="/ModifyNickName" className="link">닉네임 변경</Link>
                        </button>    
                        <button className="myBtn">
                            <Link to="/CheckPwd?value=modify" className="link">비밀번호 변경</Link>
                        </button>    
                        <button className="myBtn">
                            <Link to={(provider !== "none")? "/CheckCode":"/CheckPwd?value=delete"} className="link">회원 탈퇴</Link>
                        </button>  
                    </div>
                      
                </div>
                <div className="keep-container box">
                    <form>
                        <button className="keepbutton">
                            <Link to="/BookMark" className="link">즐겨찾기</Link>
                        </button>
                    </form>
                </div>

                <div className="history-container box">
                    <form>
                        <button className="historybutton">
                            <Link to="/History" className="link">여행 일기</Link>
                        </button>
                    </form>
                </div>
                
                <div className="qna-container box">
                    <form>
                        <button className="qnabutton">
                            <Link to="/QnA"  className="link">Q&A</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MyPage;