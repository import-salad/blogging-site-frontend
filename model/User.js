 /**
  * model for user
  */
 export default class User{
    username;
    emailID ;
    password ;
    interests ;
    constructor(username,emailID,password,interests){
        this.emailID = emailID ;
        this.username = username ;
        this.password = password ;
        this.interests = interests ;
    }
 }