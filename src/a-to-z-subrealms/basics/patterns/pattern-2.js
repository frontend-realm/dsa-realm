//pattern-2
    //Important:
    /* n= no. of rows or no. of lines
       c= column , how many columns are there in that row
       r= on a given row on iteration (outer loop)
       -always find a relation between these three to find no. of columns, 
       -how many times(inner loop) should run for a giver row ,
       c=n and r formula for inner loop
    */

    //patter1-Question:
    /*
        * * *
        * *
        *
    */

    function generatePattern1(n) {
        for(let row=1; row<=n; row++) {
            let print = '';
            for(let col=1; col<=n-row+1; col++) {
                print += '*'
            }
            console.log(print)
        }
    }
    generatePattern1(3)

    //patter2-Question:
    /*
        1 2 3
        1 2
        1
    */
    function generatePattern2(n) {
        for(let row=1; row<=n; row++) {
            let print = ''
            for(let col=1; col<=n-row+1; col++) {
                print += col
            }
            console.log(print)
        }
    }
    generatePattern2(3);

    //patter3-Question: Symmetric Pattern , Flip the Patten when symmetry
    /*
        *
        **
        ***
        **
        *
    */
    function generatePattern3(n) {
        for(let row=1; row<=2*n-1; row++) {
            let print = ''
            let totalCol = row>n ? 2*n-row : row
            for(let col=1; col<=totalCol; col++) {
                print += '* '
            }
            console.log(print)
        }
    }
    generatePattern3(3)

    //pattern4-Question: Traingle and Symmetric Traingle pattern
    //[space,star,space]: method to solve this space star problems
    /*
         *
        ***
       *****
    */
    function generatepattern4(n) {
        for(let row=1; row<n; row++) {
            //space
            let print = ''
            for(let col=1; col<=n-row; col++ ) {
                print += ' '
            }
            //star 
            for(let col=1; col<=2*row-1; col++) {
                print += '*'
            }
            //space
            for(let col=1; col<=n-row; col++ ) {
                print += ' '
            }
            console.log(print)
        }
    }
    generatepattern4(4)

    //pattern5-Question: Traingle and Symmetric Traingle pattern
    //[space,star,space]: method to solve this space star problems
    /*
       *****
        ***
         *
    */
    function generatePattern5(n) {
        
    }
