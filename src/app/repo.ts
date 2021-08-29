export class Repo {

        avatar_url : string;
        name: string;
        description: string;
        language: string;
        watchers:string;
        forks: string;
        default_branch: string;


   
        constructor(avatar_url: string, name: string, description: string,language: string, watchers:string,forks: string, default_branch: string){
    
            this.avatar_url = avatar_url;
            this.name = name;
            this.description = description;
            this.language = language;
            this.watchers = watchers;
            this.forks = forks;
            this.default_branch = default_branch;
    
    
        }
   
   

   
}
