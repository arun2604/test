arr = [ -1, 0, 1, 2, -1, 4];
      
    function findTriplets(arr) {
        let triplest = false;
        for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log(arr[i]," ",arr[j]," ",arr[k]);
                    triplest = true;
                     
                }
            }
        }
        if(triplest === false) {
            console.log(" not exist ");
        }
    }
   }
    findTriplets(arr);