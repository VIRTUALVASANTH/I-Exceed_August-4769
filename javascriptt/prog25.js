const mysub={status:"progress",marks:[90,45,65,76,47,98]};
Object.defineProperty(mysub,"Dept",{value:"cse",writable:true});
 
mysub.Dept="ece";
console.log(mysub.Dept);
Object.defineProperty(mysub,"MinMark",{get(){return Math.min(...this.marks)}})
Object.defineProperty(mysub,"HighMark",{
     get()
      {
        return Math.min(...this.marks);
     }
    });
console.log(mysub.HighMark);
 
console.log(mysub.MinMark);
 
Object.defineProperty(mysub,"Completed",{
    set(x)
    {
        if(x)
        {
            this.status="Completed";
        }
     
    }
});
 
mysub.Completed=true
 
console.log(mysub.status);
 