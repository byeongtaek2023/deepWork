import axios from "axios";



export const json = axios.create({
    baseURL: "http://localhost:3001/"
})

json.interceptors.request.use(
    (config) => {
        //여기에 내용 예: 인증 토큰이 필요한 경우 헤더에 추가
        return config;
    }
)

json.interceptors.response.use(
    response=>{
        //내용
        return response;
    }
)