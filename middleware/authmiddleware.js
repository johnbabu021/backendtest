const authMiddleware=(req,res,next)=>{

    let cookieStuff=req.signedCookies.user
    console.log(JSON.stringify(req.signedCookies),"user")
    if(!cookieStuff){
    let auth=req.headers.authorization
    if(!auth){
        res.setHeader("WWW-Authenticate","Basic")
        res.sendStatus(401)
        res.json('not found')
    }
    else{
        // console.log(auth.split(" ")[1])
    const step1=new Buffer.from(auth.split(" ")[1])
    // console.log(auth)
    
    const step2=step1.toString().split(":")
    // console.log(step1.toString().split(":"))
    console.log(step2[0])
    if(step2[0]==='admin'&&step2[1]==='admin')
    {
        console.log('welcome user')
        res.status(200)
        next()
    }
    else{
        res.setHeader("WWW-Authenticate","Basic")
        res.sendStatus(401)
    }
    
        
        // res.status(200).json('hello')
    
    
    }
    }
    
    }

    module.exports=authMiddleware