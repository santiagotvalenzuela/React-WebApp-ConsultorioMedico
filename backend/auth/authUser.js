function authUser(req,res,next){
    if(req.rol=== 4){
        next()
    }
    else{
        res.status(403)
        return res.send('Necesitas iniciar sesion')
    }
}


module.exports = {authUser};