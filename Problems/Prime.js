let count = 0;
let num = 13;
    
    for(let i = 2; i <= num; i++)
    {
        if(num % i == 0)
        {
            count++;
        }
    }
        if(count == 1)
        {
            console.log("Prime Number");
        }
        else
        {
            console.log("Not a Prime Number");
        }