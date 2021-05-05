function authSec(req,res,next){
    if(req.rol=== 2){
        next()
    }
    else{
        res.status(403)
        return res.send('Necesitas iniciar sesion')
    }
}


module.exports = {authSec};