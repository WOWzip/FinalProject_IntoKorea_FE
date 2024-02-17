import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout() {

	const nickName = sessionStorage.getItem("nickName")

	const navigate = useNavigate();
	
	const logout = () => {
        
		if(nickName != null){
			alert(nickName + "님, 성공적으로 로그아웃 됐습니다 🔒");
			sessionStorage.clear(); // 세션 값 지우기
		}
		
		navigate("/");

	};

	useEffect(() => {
		logout();
	}, []);

}

export default Logout;