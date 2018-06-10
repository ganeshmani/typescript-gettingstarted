var video = /** @class */ (function () {
    function video(title, publisher, Description, runtime, videoURL) {
        var _this = this;
        this.relatedvideoURL = [];
        this.comments = [];
        this.gettitle = function () {
            return _this.title;
        };
        this.settitle = function (title) {
            _this.title = title;
        };
        this.getpublisher = function () {
            return _this.publisher;
        };
        this.setpublisher = function (views) {
            _this.views = views;
        };
        this.getdescription = function () {
            return _this.Description;
        };
        this.setdescription = function (Description) {
            _this.Description = Description;
        };
        this.getVideoURL = function () {
            return _this.videoURL;
        };
        this.setvideoURL = function (videoURL) {
            _this.videoURL = videoURL;
        };
        this.getruntime = function () {
            return _this.runtime;
        };
        this.setruntime = function (runtime) {
            _this.runtime = runtime;
        };
        /* ------------------------------------------------------------------------------------------------ */
        this.getnumberofView = function () {
            return _this.views;
        };
        this.setnumberOfView = function (views) {
            _this.views = views;
        };
        this.getcomments = function () {
            return _this.comments;
        };
        this.setComments = function (comments) {
            _this.comments = comments;
        };
        this.getrelatedURL = function () {
            return _this.relatedvideoURL;
        };
        this.setRelatedVideURL = function (URL) {
            _this.relatedvideoURL = URL;
        };
        this.getlikesCount = function () {
            return _this.likesCount;
        };
        this.setlikesCount = function (count) {
            _this.likesCount = count;
        };
        this.getdislikesCount = function () {
            return _this.dislikesCount;
        };
        this.setdislikesCount = function (count) {
            _this.dislikesCount = count;
        };
        this.setSubscribersCount = function (count) {
            _this.subscribersCount = count;
        };
        this.title = title;
        this.publisher = publisher;
        this.Description = Description;
        this.runtime = runtime;
        this.videoURL = videoURL;
        this.relatedvideoURL = new Array();
        this.comments = new Array();
    }
    video.prototype.getsubscribersCount = function () {
        return this.subscribersCount;
    };
    return video;
}());
var jurapark = new video("jurassic", "universal studios", "fictional movie", 130, "https:youtube.com");
jurapark.setComments(["goodmoive", "nice", "watch it"]);
console.log("Comments Are " + jurapark.getcomments());
