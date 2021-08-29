export class User {
     login : string;
     avatar_url : string;
     followers : number;
     following : number;
     bio : string;
     email: string;
     location: string;
     created_at: Date

     constructor(login: string, avatar_url: string, followers: number, following: number, bio : string, email: string,location: string,  created_at: Date){
         this.login =login;
         this.avatar_url = avatar_url;
         this.followers = followers;
         this.following = following;
         this.bio = bio;
         this.email = email;
         this.location = location;
         this.created_at = created_at;
     }


}
