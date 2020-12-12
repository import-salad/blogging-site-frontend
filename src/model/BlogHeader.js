/**
 * model for BlogHeader
 */

export default class BlogHeader{
    blogID ;
    username ;
    creationTime ;
    lastUpdatedTime ;
    hits ;
    heading ;
    category ;
    likes;
    dislikes;

    constructor(blogID,username,creationTime,lastUpdatedTime,hits,heading,category,likes,dislikes ){
        this.blogID = blogID ;
        this.username = username;
        this.creationTime = creationTime ;
        this.lastUpdatedTime = lastUpdatedTime ;
        this.hits = hits ;
        this.heading = heading ;
        this.category = category ;
        this.likes = likes ;
        this.dislikes = dislikes ;

    }

    /*constructor(username,creationTime,lastUpdatedTime,hits,heading,category){
        this.username = username;
        this.creationTime = creationTime ;
        this.lastUpdatedTime = lastUpdatedTime ;
        this.hits = hits ;
        this.heading = heading ;
        this.category = category ;
    }*/
}