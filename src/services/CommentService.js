import axios from 'axios' ;

const baseURL = "http://localhost:8080/comment"

export default class CommentService{

    async getComments(blogID){

        let comments ;

        await axios.get(baseURL+"/?blogID="+blogID)
        .then(response=>response.data)
        .then(res=>{comments=res})
        .catch(err=>console.log(err)) ;

        return comments ;
    }

    async addComment(blogID,comment){

        await axios.post(baseURL+"?blogID="+blogID,comment)
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;

    }

    async editComment(comment){
        
        await axios.post(baseURL+"/edit",comment)
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;
    }

    async deleteComment(blogID,commentID){

        await axios.delete(baseURL+"?blogID="+blogID+"&commentID="+commentID)
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;
    }
}