
const footer = document.getElementById('footer');

//============================================



//======== Social Media ========//
const facebook = async()=>{
  try {
    window.location.assign("https://www.facebook.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('facebook').addEventListener('click',facebook);   

const instagram = async()=>{
  try {
    window.location.assign("https://www.instagram.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('instagram').addEventListener('click',instagram);   

const twitter = async()=>{
  try {
    window.location.assign("https://www.twitter.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('twitter').addEventListener('click',twitter);

const youtube = async()=>{
  try {
    window.location.assign("https://www.youtube.com")
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('youtube').addEventListener('click',youtube);

