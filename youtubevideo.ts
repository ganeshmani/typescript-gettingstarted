class video{
    private title:String;
    private publisher : String;
    private Description: String;
    private runtime : number;
    private videoURL : String; 
    private views! : number;
    private likesCount!: number;
    private dislikesCount!: number;
    private subscribersCount! : number; 
    private relatedvideoURL : Array<String> = [];
    private comments : Array<String> = [];
    
    

    constructor(title : string,publisher : string,Description : string,runtime : number,videoURL : String){
        this.title = title;
        this.publisher = publisher;
        this.Description = Description;
        this.runtime = runtime;
        this.videoURL = videoURL;
        this.relatedvideoURL = new Array<String>();
        this.comments = new Array<String>();
    }

    gettitle = ()=>{
        return this.title;
    }

    settitle = (title : string) => {
        this.title = title;
    }

    getpublisher = ()=>{
        return this.publisher;
    }

    setpublisher = (views : number) => {
        this.views = views;
    }

    getdescription = ()=>{
        return this.Description;
    }

    setdescription = (Description : string) => {
        this.Description = Description;
    }
    getVideoURL = ()=>{
        return this.videoURL;
    }
    setvideoURL = (videoURL : string) => {
        this.videoURL = videoURL;
    }

    getruntime = ()=>{
        return this.runtime;
    }

    setruntime = (runtime : number) => {
        this.runtime = runtime;
    }

/* ------------------------------------------------------------------------------------------------ */

    getnumberofView = ()=>{
        return this.views;
    }

    setnumberOfView = (views : number) => {
        this.views = views;
    }


    getcomments = () => {
        return this.comments;
    }

    setComments = (comments : Array<String>) => {
        this.comments = comments;
    }

    getrelatedURL = () => {
        return this.relatedvideoURL;
    }

    setRelatedVideURL = (URL : Array<String>) =>{
        this.relatedvideoURL = URL;
    }   

    getlikesCount = () => {
        return this.likesCount;
    }

    setlikesCount = (count: number) => {
        this.likesCount = count;
    }

    getdislikesCount = () => {
        return this.dislikesCount;
    }

    setdislikesCount = (count: number) => {
        this.dislikesCount = count;
    }

    getsubscribersCount(){
        return this.subscribersCount;
    }

    setSubscribersCount = (count : number) =>{

        this.subscribersCount = count;

    }
}

let jurapark = new video("jurassic","universal studios","fictional movie",130,"https:youtube.com");

jurapark.setComments(["goodmoive","nice","watch it"]);

console.log("Comments Are "+jurapark.getcomments());