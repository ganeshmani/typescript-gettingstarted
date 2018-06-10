class profile{
    private name : String;
    private date_of_birth : String;
    private city : String;
    private mobilenumber : number;

    private workplace! : String;

    private collegename! : String;

    private Friendslist! : Array<String>;

    private Familymembers! : Array<String>;

    private photosURL! : Array<String>;

    private music! : Array<String>;

    private Books! : Array<String>;

    private Movies! : Array<String>;

    constructor(name: string,dob : String,city : string,mobilenumber : number){
        this.name = name;
        this.date_of_birth = dob;
        this.city = city;
        this.mobilenumber = mobilenumber;
    }

    getname= () =>{
        return this.name;
    }

    setName = (name : String) =>{
        this.name = name;
    }

    getDOB= () =>{
        return this.date_of_birth;
    }

    setDOB = (date_of_birth : String) =>{
        this.date_of_birth = date_of_birth;
    }

    getcity= () =>{
        return this.city;
    }

    setCity = (city : String) =>{
        this.city = city;
    }

    getmobilenumber= () =>{
        return this.mobilenumber;
    }

    setMobileNumber = (mobilenumber : number) =>{
        this.mobilenumber = mobilenumber;
    }

/* ---------------------------------------------------------------------------------------- */ 
    getworkplace= () =>{
        return this.workplace;
    }

    setWorkplace = (place : String) =>{
        this.workplace = place;
    }

    getCollegeName = () =>{
        return this.collegename
    }

    setCollegeName = (collegename : String) =>{
        this.collegename = collegename;
    }

    setFriendslist = (List : Array<String>) =>{
           this.Friendslist = List;  
    }

    getFriendList = () =>{
        return this.Friendslist;
    } 

    getFamilymembers =  () => {
        return this.Familymembers;
    }

    setFamilymembers = (Members : Array<String>) => {
        this.Familymembers = Members;
    }

    getPhotosURL = () => {
        return this.photosURL;
    }

    setPhotosURL = (URL : Array<String>) => {
        this.photosURL = URL;
    }

    setMusic = (list : Array<String>) => {
         this.music = list;
    }

    getMusic = () => {
       return this.music;     
    }

    getBooks = () => {
        return this.Books;
    }

    setBooks = (books : Array<String>) => {
        this.Books = books;
    }

    getMovies = () => {
        return this.Movies;
    }

    setMovies = (movies : Array<String>) => {
        this.Movies = movies;
    }
}


var myprofile = new profile("Ganesh","15/05/1994","Chennai",9677004321);
console.log("My Mobile Number is "+myprofile.getmobilenumber());
