function pageNumber(pageArr){
  let pageCounter = 0;
  let changeInYear = 0;
  for(let i =0;i<pageArr.length-1;i++){
    pageCounter++;
    if (pageArr[i].generation !=pageArr[i+1].generation){
          for (let j =0;j<pageCounter;j++){
            pageArr[changeInYear+j].pageCounter = pageCounter;
          }
      changeInYear+=pageCounter
          pageCounter = 0;
    }
  }
   for (let j =0;j<pageCounter;j++){
      pageArr[changeInYear+j].pageCounter = pageCounter+1;
       }
  pageArr[pageArr.length-1].pageCounter = pageCounter+1
}

function storeArray(sortedArr, pageArr, rows, columns) {
  let pageIndex = 0;
  let studentIndex = 0;
  let sortedStudentIndex = 0;
  let iterations = 0;
  let yr = 0;
  let pageIndex2 = 1;
  
  while (sortedStudentIndex < sortedArr.length) {

    if (sortedStudentIndex > 0) {
      if ( sortedArr[sortedStudentIndex].generation != sortedArr[sortedStudentIndex - 1].generation) {
        yr++;
        pageIndex2 =0;
        for (let a = studentIndex; a < rows * columns; a++) {
          pageArr[pageIndex].listOfStudents[a] = "";
          studentIndex++;
        }
      }
    }

    if (studentIndex == rows * columns) {
      pageIndex++;
      pageIndex2++;
      studentIndex = 0;
      
      if(pageArr[0] instanceof honorRollPage){
        honorRollPages[pageIndex] = new honorRollPage(columns, rows, startYear - 1 + yr, 0, pageIndex2, honourRollX, honourRollY, 393, 79);
      } 
      else if(pageArr[0] instanceof highestMarkPage){
        highestMarkPages[pageIndex] = new highestMarkPage(columns, rows, startYear - 1+ yr, 0, pageIndex2);
      }
      else if(pageArr[0] instanceof otherAwardPage){
        otherAwardPages[pageIndex] = new otherAwardPage(columns, rows, startYearOtherAwards - 1+ yr, 0, pageIndex2);
      }
      
    }

    if (pageIndex < pageArr.length) {
      pageArr[pageIndex].listOfStudents[studentIndex] =
      sortedArr[sortedStudentIndex];
      pageArr[pageIndex].listOfStudents[studentIndex].index = studentIndex;
      studentIndex++;
      sortedStudentIndex++;
    }
  }
}


function sortArray(arr) {
  for (var finish = arr.length - 1; finish > 0; finish--) {
    let biggestLocation = 0;

    for (var i = 1; i <= finish; i++) {
      if (arr[i].compareTo1(arr[biggestLocation])) {
        biggestLocation = i;
      }
    }
    let temp = arr[finish];
    arr[finish] = arr[biggestLocation];
    arr[biggestLocation] = temp;
  }
  return arr;
}

function makePages(studentArr,pageArr,rows,columns,cYear,X,Y,spacingX,spacingY,type) {
  let pageCount;
  let studentCounter = 0;
  let pageNum = 1;
  let currentYear = 0;

  for (let i = 0; i < studentArr.length; i++) {
    let currentStudent = studentArr[i];
    if (previousStudent && currentStudent.generation != previousStudent.generation && type != "OtherAwards") {
      pageCount = ceil(studentCounter / (columns * rows));
      for (let j = 0; j < pageCount; j++) {
        if (type == "Honor") {
          pageArr[j] = new honorRollPage(columns,rows,cYear,pageCount,pageNum,X,Y,393,79);
        }
        if (type == "HighestMark") {
          pageArr[j] = new highestMarkPage( columns, rows, cYear, pageCount, pageNum);
        }
        if (type == "OtherAwards") {
          pageArr[j] = new otherAwardPage(columns, rows, cYear, pageCount, pageNum);
        }

        pageNum++;
      }

      cYear = cYear + 1;

      studentCounter = 0;
    } else {
      studentCounter++;
    }
    previousStudent = currentStudent;
  }
  if (previousStudent) {
    currentYear = previousStudent.generation;
    pageCount = ceil(studentCounter / (columns * rows));
    pageNum = 1;
  }

  for (let i = 0; i < pageCount; i++) {
    if (type == "Honor") {
      pageArr.push( new honorRollPage( columns, rows, cYear, pageCount, pageNum, X, Y, 393, 79));
      pageNum++;
    }
    if (type == "HighestMark") {
      pageArr.push(new highestMarkPage(columns, rows, cYear, pageCount, pageNum));
      pageNum++;
    }

    if (type == "OtherAwards") {
      pageArr.push(new otherAwardPage(columns, rows, cYear, pageCount, pageNum));
      pageNum++;
    }
  }
}

function boxes(row, column, spacingX, spacingY, length, wid, rectX, rectY, pageObj) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let index = i * column + j;
      if (pageObj.listOfStudents[index] != "" && pageObj.listOfStudents[index]) {
        push();
        noFill();
        stroke(135, 135, 135, 255);
        strokeWeight(3);
        rect(rectX + spacingX * j, rectY + spacingY * i, length, wid, 2);
        pop();
      }
    }
  }
}