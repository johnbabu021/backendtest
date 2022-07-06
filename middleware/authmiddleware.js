const authMiddleware=(req,res,next)=>{

    let cookieStuff=req.signedCookies.user
    console.log(req.signedCookies,'cookies')
    console.log(req.cookies)
    // console.log(JSON.stringify(req.signedCookies),"user")
    console.log(cookieStuff)
    if(!cookieStuff){
    let auth=req.headers.authorization
    if(!auth){
        res.setHeader("WWW-Authenticate","Basic")
        res.sendStatus(401)
    }
    else{
    const step1=new Buffer.from(auth.split(" ")[1])
    const step2=step1.toString().split(":")

    if(step2[0]==='admin'&&step2[1]==='admin')
    {
        console.log('welcome user')
        res.cookie('user', 'admin', {signed: true})
        res.status(200)
        next()
    }
    else{
        res.setHeader("WWW-Authenticate","Basic")
        res.sendStatus(401)
    }    
    }
    }
    else{
        if(req.signedCookies.user==='admin'){
            res.status(200)
next()
        }
        else{
            res.setHeader("WWW-Authenticate","Basic")
            res.sendStatus(401)
        }
    }    
    }

    module.exports=authMiddleware