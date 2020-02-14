let slideshow = {
photoList: ["charlie","webster", "runnner"],
currentPhotoIndex: 0,
nextPhoto: function() {
    if(this.currentPhotoIndex < this.photoList.length) {
        this.currentPhotoIndex++;
    console.log(photoList[this.currentPhotoIndex])}
    else {console.log("End of slideshow")
        }
    },
prevPhoto: function() {
    if(this.currentPhotoIndex > 0) {
    this.currentPhotoIndex--;
console.log(photoList[this.currentPhotoIndex])}
else {console.log("Beginning of slideshow")
    },
getCurrentPhoto: function() {
    return this.photoList[currentPhotoIndex]

}
console.log("git practice rawrapolyoley");