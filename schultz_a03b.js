/*Chris Schultz
schultz_a03b.js
Info 2124 WW
Thoendel
12-16-2019*/

//delcaring global constants
const firstName = 'Chris';  //3a
const lastName = 'Schultz';  //3b
const villainFirstName = 'Cruella'; //3c
const villainLastName = 'Deville'; //3d
const companyName = 'Mutual of Omaha' //3e

//beginning block as requirements ask for block-scoped variables
{
    //declaring block-scoped variables
    let annualSalary = 200000; //3f
    let laughString = 'Ho';  //3g
    let age = 37;  //3h
    let weight = 220;  //3i
    let counterStartValue = 8;  //3j


    let templateLiteral = `
    Good evening, ${ firstName }. I'm glad to see you could join us.
    According to your files, you're ${ age } years old. Hehe, that means next
    year you'll be ${ age+1 } years old and if I doubled your age, you'd be
     ${ age*2 } years old!
   
    I found your file because your last name, '${ lastName.toUpperCase() }' was all
    capitalized on your folder. This is unusual because our files usually have
    last names all lowercase. So I expected to see '${ lastName.toLowerCase() }', which
    I did not see.
   
    Allow me to introduce myself. My name is ${ villainFirstName + ' ' + villainLastName }.
   
    I'm the chief investigator at ${ companyName }. I've been tasked with investigating you
    due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you
    know, your annual salary is $${ annualSalary } and 10% of your annual salary is $${ annualSalary*.1 },
    which is a sizeable amount for our company.
   
    I know your password. It was simple, it's just the first, third, and fourth letters of your first name:
    ${ firstName.charAt(0) + ' ' + firstName.charAt(2) + ' ' + firstName.charAt(3) }

    And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name:
    ${ lastName.indexOf('S') + ' ' + lastName.indexOf('h') + ' ' + lastName.indexOf('u') }
   
    Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds "${ lastName.startsWith('V') }"
    ...and then I ask Google home, "Does my last name end with 'n'", and Google responds "${ lastName.endsWith('n') }"
   
    And sometimes, I ask Google home if my weight is finite, and Google home responds "${ Number.isFinite(weight) }", which makes me happy.
    ...but when I ask if my first name is finite, Google home responds, "${ isFinite('firstName') }", and this makes me sad.
   
    Anyway, I've talked to much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us.
   
    Allow me to laugh five times:
    ${ (laughString + '\n    ').repeat(5) }
    **Background voice**
    Now counting down:
    ${ counterStartValue }
    ${ counterStartValue -= 1 }
    ${ --counterStartValue }
    ${ counterStartValue -= 1 }
    ${ counterStartValue -= 1 }
    ${ counterStartValue -= 1 }
    ${ counterStartValue -= 1 }
    ${ counterStartValue -= 1 }

    Boom!`;
    //end variable declartion of a template literal, req 4    

    //print templateLiteral to console
    console.log(templateLiteral);

}//end block, see opening comment

//end program