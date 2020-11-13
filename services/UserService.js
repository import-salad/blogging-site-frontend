import axios from 'axios'

const baseURL = "http://localhost:8080/user"

export default class UserService{
    async register(user){
        let result=false ;
        await axios.post(baseURL,user)
        .then(response => {
            if (response) {
                alert('Registered');
                result=true ;
            }
        })
        .catch(err=>{console.log(err)}) ;
        return result;
    }

    async validateUser(username,password){
        let isValid=false ;
        await axios.get(baseURL+"?username="+username+"&password="+password)
        .then(response=> response.data)
        .then(data=>{isValid=data})
        .catch(err=>console.log(err)) ;

        return isValid ;
    }
}