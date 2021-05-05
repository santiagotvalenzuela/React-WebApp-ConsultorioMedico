function authMedic(req,res,next){
    if(req.rol=== 3){
        next()
    }
    else{
        res.status(403)
        return res.send('Necesitas iniciar sesion')
    }
}


module.exports = {authMedic};