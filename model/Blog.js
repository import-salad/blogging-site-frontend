import BlogHeader from './BlogHeader'

/**
 * model for Blog
 */
export default class Blog{
    blogID ;
    blogHeader ;
    body ;      // html form
    category ;

    constructor(blogID,blogHeader,body,category){
        this.blogID = blogID ;
        this.blogHeader = blogHeader ;
        this.body = body ;
        this.category = category ;
    }

    /*constructor(blogHeader,body,category){
        this.blogHeader = blogHeader ;
        this.body = body ;
        this.category = category ;
    }*/
}