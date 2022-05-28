const withAuth = (req,res,next) => {
    if(!req.session.loggedIn){
        res.dorect('/login')
    } else {
        next();
    }

};