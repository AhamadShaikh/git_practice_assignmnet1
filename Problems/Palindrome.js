let rev = 0;
let num = 151
  let ans = num;
 
     while(num > 0)
     {
         let rem=num%10;
         rev=rev*10+rem;
         num=Math.floor(num/10);
     }
    
        if(rev==ans)
        {
            console.log("Palindrome Number");
        }
        else
        {
            console.log("Not a Palindrome Number");
        }