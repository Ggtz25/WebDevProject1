const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const tweetButton = document.getElementById("tweetButton");
const maxChars = 160;

function updateCharacterCount(){ 
    const remaining = maxChars - tweetInput.value.length;
    charCount.textContent = remaining + "characters remaining";
    if(remaining<0){
        charCount.textContent = "Character limit exceeded! (160 max)";
        charCount.style.color = "red";
        tweetButton.disabled = true;
    } else {
        charCount.style.color = "black";
        tweetButton.disabled = false;
    }
}
function validateTweet(){
    if(tweetInput.value.length === 0){
        alert("Tweet cannot be empty!");
        return;
    }
    if(tweetInput.value.length > maxChars){
        alert("Tweet exceeds 160 character limit!");
        tweetButton.disabled = true;
        return;
    }
    alert("Tweet submitted successfully!");
    tweetInput.value = "";
    updateCharacterCount();
}