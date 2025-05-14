//Pattern-1
    //Important: Trick To Solve Any Patterns
    /*
        -patterns helps you to solve the matrices question and 2-D Array
        -step1- no. of times outer loop should run = no. lines or no. of rows
        -step2- how many times inner loop should run will decalre by in each row how many columns should there
              - how many columns should be there in a given row, inner loop should run
        -step3- what u need to print 
    */

    //patter1-Question:
    /*
        * * *
        * * *
        * * *
    */
    function generatePattern1(n) {
        for(let row=1; row<=n; row++)  {
            let print = ''
            for(let col=1; col<=n; col++) {
               print += '* '
            }
            console.log(print);
        }
    }
    generatePattern1(5)

    //pattern2-Question:
    /*
        * 
        * *
        * * *
    */
    function generatePattern2(n) {
        for(let row=1; row<=n; row++) {
            let print = ''
            for(let col=1; col<=row; col++) {
                print +='* '
            }
            console.log(print)
        }
    }
    generatePattern2(5)

    //patter3-Question:
    /*
        1
        1 2 
        1 2 3
    */
    function genratePatter3(n) {
        for(let row=1; row<=n; row++) {
            let print =''
            for(let col=1; col<=row; col++) {
                print += col
            }
            console.log(print)
        }
    }
    genratePatter3(5)

    //patter4-Question:
    /*
        1
        2 2 
        3 3 3
    */
    function generatePattern4(n) {
        for(let row=1; row<=n; row++) {
            let print = '';
            for(let col=1; col<=row; col++) {
                print += row;
            }
            console.log(print);
        }
    }
    generatePattern4(4); 