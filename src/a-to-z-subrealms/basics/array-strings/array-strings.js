//Basics Of Arrays & Strings

// Arrays:
    //1D array:
    let arr1D = [1,3,10,5,33];
    console.log(arr1D);
    //accessing values from an array:
    console.log(arr1D[3]); //using index of the given array
    console.log(arr1D[0]); //accessing first value of the given array
    console.log(arr1D.length); //gives you the length or size of the given array
    console.log(arr1D[arr1D.length-1]); //accessing last item of the given array

    //modifying a given array:
    arr1D[1] = 2; // we change the value of the array which is ar position 1 index level, array[index]
    console.log(arr1D)

    //2D array:
    //array[row][column] //acces the values
    let arr2D = [
        [1,2,3],
        [2,3,1]
    ]
    console.log(arr2D[0][2])

//strings:
    let str = 'Ritesh Ranjan';
    console.log(str);
    //acccessing the character from a string;
    console.log(str[4],str.charAt(3))

    //modifying the character in the string:
    // str.charAt(1) = 'A'; //error will throw u can do it 
    str[1] = 'A' //will not throw error but also dont change the string
    console.log(str)