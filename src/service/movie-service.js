import axios from "axios";
const baseUrl = "http://localhost:8081";

export const movieService = {
    getMovieByCategory: (categoryName) => {
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJOUE5kUzI1V2hGNG5CRm9Rb25TbGhWdDVuYzJIb3o3YzQtVko2ZVltc3NVIn0.eyJleHAiOjE3MDk3NTEyNzEsImlhdCI6MTcwOTcxNTI3MSwianRpIjoiODNhZDEwNjctOGM3NC00MmM2LThjZDMtYjEyY2QyOGUyZmMyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9tb3ZpZV93ZWJzaXRlX3JlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjY2N2EzYjAxLWE5MTYtNDEyNy04MGFkLWM1NzMzZjdiM2RkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6Im1vdmllX2NsaWVudCIsInNlc3Npb25fc3RhdGUiOiJiOGMwZjFjYy0wY2I4LTRmYzEtOTY5OS04ZWE3NmIzNTIxYjYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtbW92aWVfd2Vic2l0ZV9yZWFsbSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiYjhjMGYxY2MtMGNiOC00ZmMxLTk2OTktOGVhNzZiMzUyMWI2IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0aGFpIn0.uyXvcbYtng7sMIr70W-ui67t-0TW190Gw3N6x23L5FERNlMeHkNb31QkwKMfSJhVjYMz1Q82X7CKkCDkBqTD3zrTzBxnuvWzUN2TMUDv7Nt_bxDcAuydC6yqJRP66bfzimQ2FL2ltqbdUJbIUfqYXNVOmP3_48ADTXZWKFzJPtf-oiswWrFtoaktna6H7eYRxkO-52uMcIHwDcjE3_wPFJbm7vG7Z5gBFCLcq6dOvK81oF_A7xu6L-fkQYcnVIJx0qFankSfoAhGM39XNZ50DvWqhnVj0Cg5B7siuosuDIe_hwIwPEFjF2wkgXDwzNZheKxRCsAkcGmWudyMuEezvg"
        return axios.get(`${baseUrl}/api/v1/movies`,
            {
                params: {
                    categoryName: categoryName // hoặc như vầy
                },
                headers: { // header -> headers -> lỗi đây  tuyền sai biến 
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );
    }
}