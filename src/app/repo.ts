export class Repo {

        avatar_url : string;
        name: string;
        description: string;
        language: string;
        watchers:string;
        forks: string;
        html_url: string;


   
        constructor(avatar_url: string, name: string, description: string,language: string, watchers:string,forks: string, html_url: string){
    
            this.avatar_url = avatar_url;
            this.name = name;
            this.description = description;
            this.language = language;
            this.watchers = watchers;
            this.forks = forks;
            this.html_url = html_url;
    
    
        }
   
   

   
}
