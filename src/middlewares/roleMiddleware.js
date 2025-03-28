
const authorizedRoles=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res
            .status(403)
            .json({messege:'Access denied'})
        }
        next();
    }
}


module.exports = authorizedRoles;