
function displayHomePage(req, res){
    // display the hompage
    res.render("home.ejs");
}

module.exports = {
    displayHomePage,
}