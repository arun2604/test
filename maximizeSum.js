let K = 4;
   
function MaximumSum(A)
{
    let maxSum = Number.MIN_VALUE;
      
    for(let i = 0; i < K; i++)
    {
        let curr = 0;
          
        for(let j = 0; j < K; j++)
        {
              
            curr += A[j][(i + j) % K];
        }
           
        maxSum = Math.max(maxSum,
                                  curr);
    }
      
    for(let i = 0; i < K; i++)
    {
          
        let curr = 0;
        for(let j = 0; j < K; j++)
        {
            curr += A[(i + j) % K][j];
        }
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;
}
   
    let mat = [[4, 1],[ 2, 1, 2 ]];
       
    console.log(
        MaximumSum(mat));