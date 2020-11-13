/**
 * model for Comment
 */

export default class Comment{
    commentID ;
    username ;
    body ;
    creationTime ; // long ; in epoch
    constructor(commentID,username,body,creationTime){
        this.commentID=commentID ;
        this.username=username ;
        this.body=body ;
        this.creationTime=creationTime ;
    }

    /*constructor(username,body,creationTime){
        this.username=username ;
        this.body=body ;
        this.creationTime=creationTime ;
    }*/
}