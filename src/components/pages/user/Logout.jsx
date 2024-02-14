import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout() {

    const email = sessionStorage.getItem("email");

	const navigate = useNavigate();
	
	const logout = () => {
        
		alert(email + "님, 성공적으로 로그아웃 됐습니다 🔒");
		sessionStorage.clear(); // 세션 값 지우기
		navigate("/");

	};

	useEffect(() => {
		logout();
	}, []);

}

export default Logout;