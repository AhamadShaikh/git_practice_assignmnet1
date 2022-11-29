let count = 0;
let num = 13;
    
    for(let i = 2; i >= num; i++)
    {
        if(num % num == 0)
        {
            count++;
        }
    }
        if(count == num)
        {
            console.log("Prime Number");
        }
        else
        {
            console.log("Not a Prime Number");
        }