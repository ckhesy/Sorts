/**
 * 方法说明：选择排序
 * @param {Array} arr 待排序数组
 * @return {Array}
 */
function selectionSort(arr) {
    var len = arr.length;
    var minIndex;
    // var temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j; //将最小数的索引保存
            }
        }
        // temp = arr[i];
        // arr[i] = arr[minIndex];
        // arr[minIndex] = temp;
        [arr[i], arr[minIndex]] = [arr[minIndex, arr[i]]]; // ES6 解构交换变量
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
