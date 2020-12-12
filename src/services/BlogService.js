import axios from 'axios'

const baseURL = "http://localhost:8080/blog"

export default class BlogService{
    async getBlog(blogID){
        
        let blog ;

        await axios.get(baseURL+"?blogID="+blogID)
        .then(response=>response.data)
        .then(res=>{blog=res})
        .catch(err=>console.log(err)) ;

        return blog ;
    }

    async getUserBlogs(username){
        
        let blogHeaders ;

        await axios.get(baseURL+"/user?username="+username)
        .then(response=>response.data)
        .then(res=>{blogHeaders=res})
        .catch(err=>console.log(err)) ;

        return blogHeaders ;
    }

    async addBlog(blog){
        
        await axios.post(baseURL,blog)
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;
    }

    async editBlog(blog){
        
        await axios.post(baseURL+"/edit",blog)
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;
    }

    async deleteBlog(username,blogID){

        await axios.delete(baseURL+"?username="+username+"&blogID="+blogID)
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;
    }

    async getRecommendedBlogs(category){

        let blogHeaders ;

        await axios.get(baseURL+"/recommended?category="+category)
        .then(response=>response.data)
        .then(res=>{blogHeaders=res})
        .catch(err=>console.log(err)) ;

        return blogHeaders ;
    }

    async likeBlog(blogID){

        await axios.get(baseURL+"/like?blogID="+blogID+"&inc=1")
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;

    }

    
    async notLikeBlog(blogID){

        await axios.get(baseURL+"/like?blogID="+blogID+"&inc=-1")
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;

    }

    
    async dislikeBlog(blogID){

        await axios.get(baseURL+"/dislike?blogID="+blogID+"&inc=1")
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;

    }

    
    async notDislikeBlog(blogID){

        await axios.get(baseURL+"/dislike?blogID="+blogID+"&inc=-1")
        .then(response=>response.status)
        .then(res=>{if(res==200)alert("Success")})
        .catch(err=>console.log(err)) ;

        return ;

    }
}