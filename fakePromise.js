export class fakePromise{
    constructor(executer){
        this.onSuccess=null;
        this.onfailure-null;

        this.resolve=(value)=>{
            if(this.onSuccess){
                this.onSuccess(value);
            }
        }

        this.reject=(value)=>{
            if(this.onfailure){
                this.onfailure(value);
            }
        }

        executer(this.resolve,this.reject);
    }

    then(func){
        this.onSuccess=func;
        return this;
    }

    catch(func){
        this.onfailure=func;
        return this;
    }
}

