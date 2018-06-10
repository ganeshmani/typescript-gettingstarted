var profile = /** @class */ (function () {
    function profile(name, dob, city, mobilenumber) {
        var _this = this;
        this.getname = function () {
            return _this.name;
        };
        this.setName = function (name) {
            _this.name = name;
        };
        this.getDOB = function () {
            return _this.date_of_birth;
        };
        this.setDOB = function (date_of_birth) {
            _this.date_of_birth = date_of_birth;
        };
        this.getcity = function () {
            return _this.city;
        };
        this.setCity = function (city) {
            _this.city = city;
        };
        this.getmobilenumber = function () {
            return _this.mobilenumber;
        };
        this.setMobileNumber = function (mobilenumber) {
            _this.mobilenumber = mobilenumber;
        };
        /* ---------------------------------------------------------------------------------------- */
        this.getworkplace = function () {
            return _this.workplace;
        };
        this.setWorkplace = function (place) {
            _this.workplace = place;
        };
        this.getCollegeName = function () {
            return _this.collegename;
        };
        this.setCollegeName = function (collegename) {
            _this.collegename = collegename;
        };
        this.setFriendslist = function (List) {
            _this.Friendslist = List;
        };
        this.getFriendList = function () {
            return _this.Friendslist;
        };
        this.getFamilymembers = function () {
            return _this.Familymembers;
        };
        this.setFamilymembers = function (Members) {
            _this.Familymembers = Members;
        };
        this.getPhotosURL = function () {
            return _this.photosURL;
        };
        this.setPhotosURL = function (URL) {
            _this.photosURL = URL;
        };
        this.setMusic = function (list) {
            _this.music = list;
        };
        this.getMusic = function () {
            return _this.music;
        };
        this.getBooks = function () {
            return _this.Books;
        };
        this.setBooks = function (books) {
            _this.Books = books;
        };
        this.getMovies = function () {
            return _this.Movies;
        };
        this.setMovies = function (movies) {
            _this.Movies = movies;
        };
        this.name = name;
        this.date_of_birth = dob;
        this.city = city;
        this.mobilenumber = mobilenumber;
    }
    return profile;
}());
var myprofile = new profile("Ganesh", "15/05/1994", "Chennai", 9677004321);
console.log("My Mobile Number is " + myprofile.getmobilenumber());
