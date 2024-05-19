
let backgroundColor;
let grade9Color;
let grade10Color;
let grade11Color;
let grade12Color;
let mottoColor;
let titleColor;
let descColor;
let rowsHonourRoll;
let columnHonourRoll;

var index = 0;
var honorRollData = [];
var studentHonorDataList = [];
var temp;
var currentFile;
var settingFile;
var splitSetting;
let settingKey;
let value;
let settingData = [];

var startYear = 2022;
var endYear = 2023;
var yearsBack = endYear - startYear + 1;
let startYearOtherAwards = 2005;
let endYearOtherAwards = endYear;
let yearsBackOtherAwards = endYearOtherAwards-startYearOtherAwards + 1;

var data;
var sortedHonorStudentList = [];
for (var i = 0; i < yearsBack; i++) {
  studentHonorDataList[i] = [];
}
let transtionClass;
let nameFont;
let titleFont;
let logoImg;
let honourRollX;
let honourRollY;
let honorRollPages = [];
let honorRollBoxCount = 0;
let honorRollPageCount = 0;
let studentCounter = 0;
let previousStudent;
let currentYear = startYear;
let honorRollPageNum = 1;
let transtion;

let highestMarkData = [];
let highestMarkStudentList = [];
let highestMarkSortedList = [];

let otherAwardData = [];
let otherAwardStudentList = [];
let otherAwardSortedList = [];
let otherAwardPages = [];
let otherAwardPreviousStudent;
let otherAwardStudentCounter = 0;

let test;
let rowsHighestMark;
let columnHighestMark;
let highestMarkPageCount = 0;
let highestMarkPages = [];
let highestMarkStudentCounter = 0;
let highestMarkPageNum = 1;
let highestMarkCurrentYear = startYear;
let highestMarkPreviousStudent;

let otherAwardList = [];
let otherAwardCurrentYear = 0;
let otherAwardPageCount = 0;
let timer = 0;
let pageTimer = 0;

let finalPageArray = [];

function preload() {
  for (var i = 0; i < yearsBack; i++) {
    honorRollData[i] = [];
    studentHonorDataList[i] = [];
    for (var j = 9; j < 12; j++) {
      currentFile ="HonorRoll/Honor Roll-" + (startYear + i) + "-" + j + ".txt";
      honorRollData[i][j - 9] = loadStrings(currentFile);
      studentHonorDataList[i][j - 9] = [];
    }
  }

  for (let i = 0; i < yearsBack; i++) {
    highestMarkData[i] = [];
    currentFile ="HighestMarks/Highest Mark Per Subject-" + (startYear + i) + ".txt";
    highestMarkData[i] = loadStrings(currentFile);
  }
  
  for (let i = 0; i < yearsBackOtherAwards; i++) {
    otherAwardData[i] = [];
    let currentFile = "OtherAwards/Other Awards-" + (startYearOtherAwards + i) + ".txt";
    otherAwardData[i] = loadStrings(currentFile);
  }

  settingFile = loadStrings("Resources/settings.txt");
  nameFont = loadFont("Resources/Montserrat-Bold.ttf");
  titleFont = loadFont("Resources/Novusa Regular.otf");
  logoImg = loadImage("Resources/logo.png");
  otherAwardFile = loadStrings("Resources/otherAwardsDesc.txt");
}

function setup() {
  colorMode(RGB);
  
  for (var i = 0; i < yearsBack; i++) {
    for (var j = 0; j < 3; j++) {
      for (var a = 0; a < honorRollData[i][j].length; a++) {
        temp = honorRollData[i][j][a].split(",");

        let fs = String(temp[0]).split(" ");
        studentHonorDataList[i][j].push(
          new honorRollStudent(fs[0], temp[1], j + 9, startYear + i - 1)
        );
      }
    }

    for (let i = 0; i < yearsBack; i++) {}
    highestMarkStudentList[i] = [];
    for (let j = 0; j < highestMarkData[i].length; j++) {
      temp = highestMarkData[i][j].split(",");
      let fs = String(temp[0]).split(" ");
      highestMarkStudentList[i].push(new highestMarkStudent(String(fs[0]),String(temp[1].trim()), parseInt(temp[2].trim()),parseInt(temp[3].trim()),temp[4].trim(),startYear + i - 1));
    }
  }
  
  
  let tempi =0;
  while(tempi < otherAwardData.length){
    if(otherAwardData[tempi][0] == ""){
     otherAwardData.splice(tempi,1)

    }
    else{
      tempi++;
    }
  }
  
  for (let i = 0; i < otherAwardData.length; i++) {
    otherAwardStudentList[i] = [];
    for (let j = 0; j < otherAwardData[i].length; j++) {
      temp = otherAwardData[i][j].split(",");
      otherAwardStudentList[i].push(
        new otherAwardStudent(
          String(temp[0].trim()),
          String(temp[1].trim()),
          parseInt(temp[2].trim()),
          (parseInt(temp[3].trim()) -1),
          String(temp[4].trim())
        )
      );
      let test = otherAwardStudentList[i][j].awardName;
      if (test.split(" ")[test.split(" ").length - 1] != "Award") {
        otherAwardStudentList[i][j].awardName =
          otherAwardStudentList[i][j].awardName + " Award";
      }
    }
   
  }
    
  for (let i = 0; i < yearsBack; i++) {
    highestMarkStudentList[i] = sortArray(highestMarkStudentList[i]);
    for (let j = 0; j < studentHonorDataList[i].length; j++) {
      studentHonorDataList[i][j] = sortArray(studentHonorDataList[i][j]);
    }
  }
  

  for (let i = 0; i < otherAwardData.length; i++) {
    otherAwardStudentList[i] = sortArray(otherAwardStudentList[i]);
  }


  for (let i = 0; i < studentHonorDataList.length; i++) {
    for (let j = 0; j < studentHonorDataList[i].length; j++) {
      for (let a = 0; a < studentHonorDataList[i][j].length; a++) {
        sortedHonorStudentList.push(studentHonorDataList[i][j][a]);
      }
    }
  }
  for (let i = 0; i < highestMarkStudentList.length; i++) {
    for (let j = 0; j < highestMarkStudentList[i].length; j++) {
      highestMarkSortedList.push(highestMarkStudentList[i][j]);
    }
  }
  for (let i = 0; i < otherAwardStudentList.length; i++) {
    for (let j = 0; j < otherAwardStudentList[i].length; j++) {
      otherAwardSortedList.push(otherAwardStudentList[i][j]);
    }
  }
  
  otherAwardSortedList = sortArray(otherAwardSortedList)


  for (let i = 0; i < settingFile.length; i++) {
    splitSetting = settingFile[i].split("=");
    settingKey = splitSetting[0].trim();
    value = splitSetting[1].trim();
    if (!isNaN(value)) {
      value = int(value);
    }
    settingData[settingKey] = value;
  }

  for (let i = 0; i < otherAwardFile.length; i++) {
    let otherAwardAndDesc = otherAwardFile[i].split("–");
    let otherAwardName = otherAwardAndDesc[0].trim().split(" ").join("");
    let otherAwardDesc = otherAwardAndDesc[1].trim();
    otherAwardList[otherAwardName] = otherAwardDesc;
  }

  let backgroundValues = settingData.background.split(",");
  let grade9Values = settingData.grade9.split(",");
  let grade10Values = settingData.grade10.split(",");
  let grade11Values = settingData.grade11.split(",");
  let grade12Values = settingData.grade12.split(",");
  let mottoValues = settingData.motto.split(",");
  let titleValues = settingData.title.split(",");
  let descValues = settingData.description.split(",");
  rowsHonourRoll = int(settingData.rows_HonorRoll);
  columnHonourRoll = int(settingData.columns_HonorRoll);
  transtion = int(settingData.transitionTime);

  backgroundColor = color(
    int(backgroundValues[0]),
    int(backgroundValues[1]),
    int(backgroundValues[2])
  );
  mottoColor = color(
    int(mottoValues[0]),
    int(mottoValues[1]),
    int(mottoValues[2])
  );
  titleColor = color(
    int(titleValues[0]),
    int(titleValues[1]),
    int(titleValues[2])
  );
  descColor = color(int(descValues[0]), int(descValues[1]), int(descValues[2]));
  grade9Color = color(
    int(grade9Values[0]),
    int(grade9Values[1]),
    int(grade9Values[2])
  );
  grade10Color = color(
    int(grade10Values[0]),
    int(grade10Values[1]),
    int(grade10Values[2])
  );
  grade11Color = color(
    int(grade11Values[0]),
    int(grade11Values[1]),
    int(grade11Values[2])
  );
  grade12Color = color(
    int(grade12Values[0]),
    int(grade12Values[1]),
    int(grade12Values[2])
  );
  honourRollX = 180;
  honourRollY = 151;
  
  rowsHighestMark = int(settingData.rows_HighestMark);
  columnHighestMark = int(settingData.columns_HighestMark);

  rowsOtherAward = int(settingData.otherAwards_rows);
  columnOtherAward = int(settingData.otherAwards_columns);

  honorRollPages[0] = new honorRollPage(columnHonourRoll, rowsHonourRoll, startYear - 1,0,1, honourRollX, honourRollY, 393, 79);
  storeArray( sortedHonorStudentList, honorRollPages, rowsHonourRoll, columnHonourRoll);
  pageNumber(honorRollPages)
  
  highestMarkPages[0] = new highestMarkPage(columnHighestMark, rowsHighestMark, startYear - 1, 0, 1);
  storeArray(highestMarkSortedList, highestMarkPages, rowsHighestMark, columnHighestMark);
  pageNumber(highestMarkPages)

 
  otherAwardPages[0] = new otherAwardPage(columnOtherAward, rowsOtherAward, startYearOtherAwards - 1, 0, 1);
  storeArray(otherAwardSortedList, otherAwardPages, rowsOtherAward, columnOtherAward);
  pageNumber(otherAwardPages)
  
  textFont(titleFont)
  textSize(settingData.mottoTranstionSize)
  temp = new transtionPage("Honor Roll");
  temp.createCoordinates();
  finalPageArray.push(temp);
  

  for (let i = 0; i < honorRollPages.length; i++) {
    finalPageArray.push(honorRollPages[i]);
  }
  
  textFont(titleFont)
  textSize(settingData.mottoTranstionSize)
  temp = new transtionPage("Highest Marks");
  temp.createCoordinates();
  finalPageArray.push(temp);
  
  for (let i = 0; i < highestMarkPages.length; i++) {
    finalPageArray.push(highestMarkPages[i]);
  }
  
  textFont(titleFont)
  textSize(settingData.mottoTranstionSize)
  temp = new transtionPage("Marcy Awards");
  temp.createCoordinates();
  finalPageArray.push(temp);
  
  for (let i = 0; i < otherAwardPages.length; i++) {
    finalPageArray.push(otherAwardPages[i]);
  }
  
  textSize(settingData.mottoTranstionSize)
  textFont(titleFont)
  createCanvas(1920, 1080);
}

function draw() {
  background(backgroundColor);
  if(finalPageArray[timer] instanceof transtionPage){
    pageTimer++;
    if (pageTimer % (60 * 11) == 0) {
      finalPageArray[timer].reset()
      timer++;
      pageTimer = 0;
    }  
  }
  
  else{
    if (frameCount % (60 * transtion) == 0) {
      timer++;
    }
  }

  if (timer == finalPageArray.length) {
    timer = 0;
  }
  
  finalPageArray[timer].display();
}