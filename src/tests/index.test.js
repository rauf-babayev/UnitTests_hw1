describe('Home Work 1', () => {
    describe('№1 Conditional Operators', () => {
        describe('getSumOrMultiply', () => {
            it('should be defined', () => {
                assert.isDefined(getSumOrMultiply);
            });

            it('should return sum (5, 5)', () => {
                const firstNum = 5;
                const secondNum = 5;
                const expected = 10;

                const actual = getSumOrMultiply(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });

            it('should return product (4, 7)', () => {
                const firstNum = 4;
                const secondNum = 7;
                const expected = 28;

                const actual = getSumOrMultiply(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });
            
            it('should return product (0, 7)', () => {
                const firstNum = 0;
                const secondNum = 7;
                const expected = 0;

                const actual = getSumOrMultiply(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });

            it('should return product (undefined, undefined)', () => {
                const firstNum = undefined;
                const secondNum = undefined;
                const expected = 'Please input right data!';

                const actual = getSumOrMultiply(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });
        });
        
        describe('defineWeekdDay', () => {
            it('should be defined', () => {
                assert.isDefined(defineWeekDay);
            });

            it('should return \'\' (0)', () => {
                const number = 0;
                const expected = ' ';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return \'\' (undefined)', () => {
                const number = undefined;
                const expected = ' ';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return Monday (1)', () => {
                const number = 1;
                const expected = 'Monday';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return Sunday (7)', () => {
                const number = 7;
                const expected = 'Sunday';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return Thursday (4)', () => {
                const number = 4;
                const expected = 'Thursday';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return \'\' (8)', () => {
                const number = 8;
                const expected = ' ';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return \'\' (\'Word\')', () => {
                const number = 'Word';
                const expected = ' ';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });
        });

        describe('defineQuarter', () => {
            it('should be defined', () => {
                assert.isDefined('defineQuarter');
            });

            it('should return The dot is in the center (0, 0)', () => {
                const firstNum = 0;
                const secondNum = 0;
                const expected = 'The dot is in the center';

                const actual = defineQuarter(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });

            it('should return The dot is in the 4nd quarter (5, -5)', () => {
                const firstNum = 5;
                const secondNum = -5;
                const expected = 'The dot is in the 4nd quarter';

                const actual = defineQuarter(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });

            it('should return The dot is in the 3rd quarter (-5, -5)', () => {
                const firstNum = -5;
                const secondNum = -5;
                const expected = 'The dot is in the 3rd quarter';

                const actual = defineQuarter(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Wrong Input! (undefined, undefined)', () => {
                const firstNum = undefined;
                const secondNum = undefined;
                const expected = 'Wrong Input!';

                const actual = defineQuarter(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Wrong Input! (0, undefined)', () => {
                const firstNum = 0;
                const secondNum = undefined;
                const expected = 'Wrong Input!';

                const actual = defineQuarter(firstNum, secondNum);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getSumOfPositives', () => {
            it('should be defined',() => {
                assert.isDefined(getSumOfPositives);
            });

            it('should return sum of positives (2, 3, 6)', () => {
                const firstNum = 2;
                const secondNum = 3;
                const thirdNum = 6;
                const expected = 11;

                const actual = getSumOfPositives(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return sum of positives (2, -3, 6)', () => {
                const firstNum = 2;
                const secondNum = -3;
                const thirdNum = 6;
                const expected = 8;

                const actual = getSumOfPositives(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return sum of positives (2, -3, -6)', () => {
                const firstNum = 2;
                const secondNum = -3;
                const thirdNum = -6;
                const expected = 2;

                const actual = getSumOfPositives(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return sum of positives (-2, -3, -6)', () => {
                const firstNum = -2;
                const secondNum = -3;
                const thirdNum = -6;
                const expected = 0;

                const actual = getSumOfPositives(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should Wrong Input! (undefined, 2, undefined)', () => {
                const firstNum = undefined;
                const secondNum = 2;
                const thirdNum = undefined;
                const expected = 'Wrong Input!';

                const actual = getSumOfPositives(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });
        }); 
        
        describe('getMaxSum', () => {
            it('should be defined', () => {
                assert.isDefined(getMaxSum);
            });

            it('should return max sum expression (2, 3, 6)', () => {
                const firstNum = 2;
                const secondNum = 3;
                const thirdNum = 6;
                const expected = 39;

                const actual = getMaxSum(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return max sum expression (1, 2, 3)', () => {
                const firstNum = 1;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 9;

                const actual = getMaxSum(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return max sum expression (0, 2, 3)', () => {
                const firstNum = 0;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 8;

                const actual = getMaxSum(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return max sum expression (0, 0, 0)', () => {
                const firstNum = 0;
                const secondNum = 0;
                const thirdNum = 0;
                const expected = 3;

                const actual = getMaxSum(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Wrong Input!(undefined, 3, 5)', () => {
                const firstNum = undefined;
                const secondNum = 3;
                const thirdNum = 5;
                const expected = 'Wrong Input!';

                const actual = getMaxSum(firstNum, secondNum, thirdNum);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getGrade', () => {
            it('should be defined', () => {
                assert.isDefined(getGrade);
            });

            it('should return Grade (77)', () => {
                const firstNum = 77;
                const expected = 'B';

                const actual = getGrade(firstNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Please Try Again (101)', () => {
                const firstNum = 101;
                const expected = 'Please Try Again';

                const actual = getGrade(firstNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Please Try Again (-101)', () => {
                const firstNum = -101;
                const expected = 'Please Try Again';

                const actual = getGrade(firstNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Please Try Again (undefined)', () => {
                const firstNum = undefined;
                const expected = 'Please Try Again';

                const actual = getGrade(firstNum);

                assert.deepEqual(actual, expected);
            });

            it('should return Grade (0)', () => {
                const firstNum = 0;
                const expected = 'F';

                const actual = getGrade(firstNum);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('№2 Loops', () => {
        describe('getSumOfEvens', () => {
            it('should be defined', () => {
                assert.isDefined('getSumOfEvens');
            });

            it('should return sum of evens & quantity of them', () => {
                const expected = `The Sum is 2450 and the Quantity is 49`;

                const actual = getSumOfEvens();

                assert.deepEqual(actual, expected);
            });
        });

        describe('getSimpleNumber', () => {
            it('should be defined', () => {
                assert.isDefined(getSimpleNumber);
            });

            it('should return simple number (5)', () => {
                const num = 5;
                const expected = 'Simple';

                const actual = getSimpleNumber(num);

                assert.deepEqual(actual, expected);
            });

            it('should return comp number (6)', () => {
                const num = 6;
                const expected = 'Comp';

                const actual = getSimpleNumber(num);

                assert.deepEqual(actual, expected);
            });

            it('should return simple number (0)', () => {
                const num = 0;
                const expected = 'Wrong Input!';

                const actual = getSimpleNumber(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getSimpleNumber(num);

                assert.deepEqual(actual, expected);
            });

            it('should return simple number (-5)', () => {
                const num = -5;
                const expected = 'Simple';

                const actual = getSimpleNumber(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const num = null;
                const expected = 'Wrong Input!';

                const actual = getSimpleNumber(num);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getSquareNum', () => {
            it('should be defined', () => {
                assert.isDefined('getSquareNum');
            });

            it('should return the square of (9)', () => {
                const num = 9;
                const expected = 3;

                const actual = getSquareNum(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getSquareNum(num);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getFactorial', () => {
            it('should be defined', () => {
                assert.isDefined('getFactorial');
            });

            it('should return factorial of (6)', () => {
                const num = 6;
                const expected = 720;

                const actual = getFactorial(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (-6)', () => {
                const num = -6;
                const expected = 'Wrong Input!';

                const actual = getFactorial(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getFactorial(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (0)', () => {
                const num = 0;
                const expected = 1;

                const actual = getFactorial(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const num = null;
                const expected = 'Wrong Input!';

                const actual = getFactorial(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (1)', () => {
                const num = 1;
                const expected = 1;

                const actual = getFactorial(num);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getSumOfDigits', () => {
            it('should be defined', () => {
                assert.isDefined('getSumOfDigits');
            });

            it('should return sum of (565)', () => {
                const num = 565;
                const expected = 16;

                const actual = getSumOfDigits(num);

                assert.deepEqual(actual, expected);
            });

            it('should return sum of (505)', () => {
                const num = 505;
                const expected = 10;

                const actual = getSumOfDigits(num);

                assert.deepEqual(actual, expected);
            });

            it('should return sum of (500)', () => {
                const num = 500;
                const expected = 5;

                const actual = getSumOfDigits(num);

                assert.deepEqual(actual, expected);
            });

            it('should return sum of (undefined)', () => {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getSumOfDigits(num);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getReverseSequence', () => {
            it('should be defined',() => {
                assert.isDefined('getReverseSequence');
            });

            it('should return reverse of (564)', () => {
                const num = 564;
                const expected = 465;

                const actual = getReverseSequence(num);

                assert.deepEqual(actual, expected);
            });

            it('should return reverse of (560)', () => {
                const num = 560;
                const expected = 65;

                const actual = getReverseSequence(num);

                assert.deepEqual(actual, expected);
            });

            it('should return reverse of (500)', () => {
                const num = 500;
                const expected = 5;

                const actual = getReverseSequence(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getReverseSequence(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const num = null;
                const expected = 'Wrong Input!';

                const actual = getReverseSequence(num);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (0)', () => {
                const num = 0;
                const expected = 'Wrong Input!';

                const actual = getReverseSequence(num);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('№3 Arrays', () => {
        describe('getMinValue', () => {
            it('should be defined', () => {
                assert.isDefined('getMinValue');
            });

            it('should return minimal element', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = -1;

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return minimal element', () => {
                const array = [1, 2, -1, 5, 6, 0,-1];
                const expected = -1;

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return minimal element', () => {
                const array = [1, 1, 1, 1, 1];
                const expected = 1;

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return minimal element', () => {
                const array = [5];
                const expected = 5;

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return minimal element', () => {
                const array = [5, 3];
                const expected = 3;

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getMaxValue', () => {
            it('should be defined', () => {
                assert.isDefined('getMaxValue');
            });

            it('should return maximal element', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = 6;

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return maximal element', () => {
                const array = [15, 15, 15, 15];
                const expected = 15;

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return maximal element', () => {
                const array = [1, 2, 6, 5, 6, 0,-1];
                const expected = 6;

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return maximal element', () => {
                const array = [5];
                const expected = 5;

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return maximal element', () => {
                const array = [5, 9];
                const expected = 9;

                const actual = getMaxValue(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getIndexOfMinElement', () => {
            it('should be defined', () => {
                assert.isDefined('getIndexOfMinElement');
            });

            it('should return index of minimal element', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = 6;

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of minimal element', () => {
                const array = [1, 2, -1, 5, 6, 0,-1];
                const expected = 2;

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of minimal element', () => {
                const array = [-1, -1, -1, -1];
                const expected = 0;

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of minimal element', () => {
                const array = [5];
                const expected = 0;

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of minimal element', () => {
                const array = [5, 3];
                const expected = 1;

                const actual = getIndexOfMinElement(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getIndexOfMaxElement', () => {
            it('should be defined', () => {
                assert.isDefined('getIndexOfMaxElement');
            });

            it('should return index of maximal element', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = 4;

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of maximal element', () => {
                const array = [1, 2, 3, 5, 6, 6,-1];
                const expected = 4;

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of maximal element', () => {
                const array = [5, 5, 5, 5, 5];
                const expected = 0;

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of maximal element', () => {
                const array = [5];
                const expected = 0;

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });

            it('should return index of maximal element', () => {
                const array = [5, 3];
                const expected = 0;

                const actual = getIndexOfMaxElement(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getSumOfOddIndex', () => {
            it('should be defined', () => {
                assert.isDefined('getSumOfOddIndex');
            });

            it('should return the sum of the elements with odd index', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = 7;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the sum of the elements with odd index', () => {
                const array = [5];
                const expected = 0;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the sum of the elements with odd index', () => {
                const array = [5, 3];
                const expected = 3;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getReverseArray', () => {
            it('should be defined', () => {
                assert.isDefined('getReverseArray');
            });

            it('should return the reverse array', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = [-1, 0, 6, 5, 3, 2, 1];

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the reverse array', () => {
                const array = [5];
                const expected = [5];

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the reverse array', () => {
                const array = [5, 3];
                const expected = [3, 5];

                const actual = getReverseArray(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('getQuantityOfOddElements', () => {
            it('should be defined', () => {
                assert.isDefined('getQuantityOfOddElements');
            });

            it('should return the quantity of odd elements', () => {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = 4;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getMinValue(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the quantity of odd elements', () => {
                const array = [5];
                const expected = 1;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the quantity of odd elements', () => {
                const array = [5, 3];
                const expected = 2;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual, expected);
            });
        });

        describe('reverseHalfAnArray', () => {
            it('should be defined', () => {
                assert.isDefined(reverseHalfAnArray);
            });

            it('should return the reverse array', () => {
                const array = [1, 2, 3, 4, 5, 6];
                const expected = [4, 5, 6, 1, 2, 3];

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', () => {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', () => {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', () => {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the reverse array', () => {
                const array = [5];
                const expected = [5];

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the reverse array', () => {
                const array = [5, 3];
                const expected = [3, 5];

                const actual = reverseHalfAnArray(array);

                assert.deepEqual(actual, expected);
            });
        });
    });
}); 