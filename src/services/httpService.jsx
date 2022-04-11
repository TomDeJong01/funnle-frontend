export class HttpService {

    static getAssignments() {
        const serverUrl = process.env.REACT_APP_API_URL
        const apiPort = process.env.REACT_APP_API_PORT
        const apiPath = process.env.REACT_APP_API_PATH

         console.log(serverUrl)
         console.log(apiPort)
         console.log(apiPath)
        return new Promise(function (resolve, reject) {
            // fetch(serverUrl + ':' + apiPort + apiPath + 'get', {
            fetch('http://localhost:2394/api/v1/assignments/get', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((response) => {
                if(response.status === 200) {
                    response.json().then((result) => {
                        resolve(result.data);
                    })
                } else {
                    reject(response);
                }
            }).catch(error => {
                alert(error)
            })
        })
    }

}

export default HttpService;
