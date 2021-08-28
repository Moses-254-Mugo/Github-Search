export class User {
     login : string;
     avatar_url : string;
     followers : number;
     following : number;
     bio : string;

     constructor(login: string, avatar_url: string, followers: number, following: number, bio : string){
         this.login =login;
         this.avatar_url = avatar_url;
         this.followers = followers;
         this.following = following;
         this.bio = bio;
     }


}
