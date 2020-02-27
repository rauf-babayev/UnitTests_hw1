const getSumOrMultiply = (a ,b) => {
    if ((a !== 0) && !a || (b !== 0) && !b) {
        return 'Please input right data!';
    }

    return a % 2 === 0 ? a * b : a + b;
};

const defineWeekDay = number => {
    const weekDayz = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = ' ';

    if (!number) return result;

    for (let i = 0; i < weekDayz.length; i++) {
        if((number - 1) === i) {
            result = weekDayz[i];
        }
    }
    
    return result;
};

const defineQuarter = (x, y) => {
    let result = '';
    
    if (!x && (x !== 0) || !y && (y !== 0)) {
        result = 'Wrong Input!';   
    } else if (x === 0 && y === 0) {
        result = 'The dot is in the center';
    } else if (x >= 0 && y >= 0) {
        result = 'The dot is in the 1st quarter';
    } else if (x >= 0 && y <= 0) {
        result = 'The dot is in the 4nd quarter';
    } else if (x <= 0 && y <= 0) {
        result = 'The dot is in the 3rd quarter';
    } else if (x <= 0 && y >= 0) {
        result = 'The dot is in the 2th quarter';
    }
    return result;
};

const getSumOfPositives = (num1, num2, num3) => {
    let result = 0;

    if (!num1 || !num2 || !num3) {
        return 'Wrong Input!';
    };
    num1 > 0 && (result += num1);
    num2 > 0 && (result += num2);
    num3 > 0 && (result += num3);

    return result;
};

const getMaxSum = (num1, num2, num3) => {
    let multiply = num1 * num2 * num3;
    let sum = num1 + num2 + num3;
    
    if (!num1 && (num1 !== 0) || !num2 && (num2 !== 0) || !num3 && (num3 !== 0)) {
        return 'Wrong Input!';
    }
    
    return multiply > sum ? (multiply + 3) : (sum + 3);
};

const getGrade = mark => {
    let result = ' '
    console.log(mark, 'Mark');
    
    if (mark < 0 || mark > 100 || !mark && (mark !== 0) || (mark === -0) && mark !== 0) {
        return 'Please Try Again'
    } else if (mark >= 0 && mark <= 19) {
        result = 'F';
    } else if (mark >= 20 && mark <= 39) {
        result = 'E';
    } else if (mark >= 40 && mark <= 59) {
        result = 'D';
    } else if (mark >= 60 && mark <= 74) {
        result = 'C';
    } else if (mark >= 75 && mark <= 89) {
        result = 'B';
    } else if (mark >= 90 && mark <= 100) {
        result = 'A';
    }
    
    return result; 
};

const getSumOfEvens = () => {
    let sum = 0;
    let quantity = 0;
    
    for (let n = 1; n < 99; n++) {
        if (n % 2 === 0) {
            sum += n;
            quantity++;
        }
    }

    return `The Sum is ${sum} and the Quantity is ${quantity}`; 
};

const getSimpleNumber = num => {
    let result = 'Simple';

    if (!num || num === 0) {
        result = 'Wrong Input!';
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0){            
            result = 'Comp';
        }   
    } 
      
    return result;
};

const getSquareNum = num => {
    let square = 0;
    if (!num) return 'Wrong Input!'
    square = num ** (1/2);
       
    return ~~square;
};

const getFactorial = n => {
    let multiply = 1;
    
    if (n === 0) return multiply;
    if (!n || n < 0 || n === -0) return 'Wrong Input!';
    for (let i = 1; i <= n; i++) {
        multiply *= i; 
    }

    return multiply;
};

const getSumOfDigits = num => {
    let sum = 0;
    let i = 0;
    
    if (!num) return 'Wrong Input!';
    while (num) {
        i = num % 10;
        num = (num - i) / 10;
        sum += i;
    }
    
    return sum;
};

const getReverseSequence = num => {
    let result = 0;
    let i = 0;

    if (!num) return 'Wrong Input!';
    while (num) {
        i = num % 10;
        num = (num - i) / 10;
        result = (result * 10) + i;

    if (!num) {
        return result;
    }
    }  
};

const getMinValue = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let min = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }

    return min;
};

const getMaxValue = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let max = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
};

const getIndexOfMinElement = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let min = array[0];
    let indexOfMin = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            indexOfMin = i;
        }
    }
    
    return indexOfMin;
    
};

const getIndexOfMaxElement = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let max = array[0];
    let indexOfMax = 0;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indexOfMax = i;
        }
    }
    
    return indexOfMax;
};

const getSumOfOddIndex = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            sum += array[i];
        }
    }

    return sum;
};

const getReverseArray = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let reverse = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        reverse[reverse.length] = array[i];     
    }
    
    return reverse;
};

const getQuantityOfOddElements = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let quantity = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            quantity++;
        }
    }
    
    return quantity;
};

const reverseHalfAnArray = array => {
    if (!array || array.length === 0 || (typeof array !== 'object')) return 'Wrong Input!';
    let half1 = [];
    let half2 = [];
    let reverse = [];
    let j = (array.length) / 2;
    
    for (let i = 0; i < j; i++) {
        half1[half1.length] = array[i];
    }
    for (let i = j; i <= array.length - 1; i++) {
        half2[half2.length] = array[i];        
    }
    reverse = [...half2,...half1];

    return reverse;    
};