let rev = 0;
let num = 151
  let ans = num;
 
     while(num < 0)
     {
         let rem=num%10;
         num=rev*10+num;
         num=Math.floor(num/10);
     }
    
        if(rev==num)
        {
            console.log("Palindrome Number");
        }
        else
        {
            console.log("Not a Palindrome Number");
        }