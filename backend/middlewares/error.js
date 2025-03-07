 class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
};

export const errorMiddleware = (err,req,res,next)=>{
    err.message=err.message || "Internal Server Error.";
    err.statusCode = err.statusCode || 500;

    if(err.name==="jsonWenToken"){
        const message="jason web token is invalid, try again.";
        err= new ErrorHandler(message,400);
    }
    if(err.name==="TokenExpireError"){
        const message="jason web token is expire, try again.";
        err= new ErrorHandler(message,400);
    }
    if(err.name==="CastError"){
        const message=`Invali ${err.path}`;
        err= new ErrorHandler(message,400);
    }

    const errorMessage = err.errors ? Object.values(err.errors).map((error)=>error.message).join(" ") : err.message

    return res.status(err.statusCode).json({
        success:"false",
        message:errorMessage,
    });
};

export default ErrorHandler;