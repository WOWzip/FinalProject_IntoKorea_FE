import '../../../styles/MyPage.css';

import { Link } from 'react-router-dom';



const MyPage = () => {

    const email = sessionStorage.getItem("email");
    const nickName = sessionStorage.getItem("nickName");

    return (
        <>
            <h1>M Y P A G E</h1>
            <div className="container">
                <div className="info-container box">
                <p className='nickName'>{nickName} 님</p>
                <br/>
                <br/>
                <br/>
                <p className='email'>{email}</p>
                </div>
                <div className="keep-container box">
                    <form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="keep button">
                            <Link to="/BookMark" className="link">즐겨찾기</Link>
                        </button>
                    </form>
                </div>

                <div className="history-container box">
                    <form>
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="history button">
                            <Link to="/History" className="link">여행 일기</Link>
                        </button>
                    </form>
                </div>
                
                <div className="qna-container box">
                    <form>
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="qna button">
                            <Link to="/QnA"  className="link">Q&A</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MyPage;