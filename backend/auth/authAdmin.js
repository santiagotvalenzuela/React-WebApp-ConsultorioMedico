function authAdmin(req,res,next){
    if(req.rol=== 1){
        next()
    }
    else{
        res.status(403)
        return res.send('Necesitas iniciar sesion')
    }
}


module.exports = {authAdmin};