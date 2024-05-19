class Student {
  constructor(lastName, firstName, grade, generation) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.grade = grade;
    this.generation = generation;
    this.index = 0;
  }
  nameOfStudent() {
    return this.lastName + ", " + this.firstName;
  }
  generationOfStudent(mark) {
    if (mark == null && !(this instanceof otherAwardStudent)) {
      return (
        "Gr. " +
        this.grade +
        ", " +
        this.generation +
        "-" +
        (this.generation + 1)
      );
    } else if (this.grade == 0) {
      return this.generation + "-" + (this.generation + 1);
    } else if (this instanceof otherAwardStudent) {
      return (
        "Gr. " +
        this.grade +
        "," +
        this.generation +
        "-" +
        (this.generation + 1)
      );
    } else {
      return (
        "Gr. " +
        this.grade +
        "," +
        this.generation +
        "-" +
        (this.generation + 1) +
        " " +
        mark +
        "%"
      );
    }
  }
  xCoordStudent(pageObj) {
    return (
      pageObj.spaceFromLeft +
      pageObj.length * (this.index % pageObj.column) +
      (pageObj.lengthBox - textWidth(this.nameOfStudent())) / 2
    );
  }
  yCoordStudent(pageObj) {
    return (
      pageObj.spaceFromTop +
      pageObj.textY * Math.floor(this.index / pageObj.column)
    );
  }
  xCoordGeneration(pageObj, mark) {
    if (mark == null || mark == 0) {
      mark = "";
    }
    return (
      pageObj.spaceFromLeft +
      pageObj.length * (this.index % pageObj.column) +
      (pageObj.lengthBox - textWidth(this.generationOfStudent(mark))) / 2
    );
  }
  yCoordGeneration(pageObj) {
    return (
      pageObj.spaceFromTop +
      pageObj.textY * Math.floor(this.index / pageObj.column) +
      25
    );
  }
}

class honorRollStudent extends Student {
  constructor(lastName, firstName, grade, generation) {
    super(lastName, firstName, grade, generation, index);
  }
  compareTo1(other) {
    if (this.lastName > other.lastName) {
      return true;
    } else if (this.lastName < other.lastName) {
      return false;
    } else {
      if (this.firstName > other.firstName) {
        return true;
      } else if (this.firstName < other.firstName) {
        return false;
      }
    }
  }
  displayNG(pageObj) {
    if (this.grade == 9) {
      fill(grade9Color);
    }
    if (this.grade == 10) {
      fill(grade10Color);
    }
    if (this.grade == 11) {
      fill(grade11Color);
    }
    if (this.grade == 12) {
      fill(grade12Color);
    }
    text(
      this.nameOfStudent(),
      this.xCoordStudent(pageObj),
      this.yCoordStudent(pageObj)
    );
    text(
      this.generationOfStudent(),
      this.xCoordGeneration(pageObj),
      this.yCoordGeneration(pageObj)
    );
  }
}

class highestMarkStudent extends Student {
  constructor(lastName, firstName, grade, mark, course, generation) {
    super(lastName, firstName, grade, generation, index);
    this.mark = mark;
    this.course = course;
    this.index = 0;
  }
  compareTo1(other) {
    if (this.grade > other.grade) {
      return true;
    } else if (this.grade < other.grade) {
      return false;
    } else {
      if (this.lastName > other.lastName) {
        return true;
      } else if (this.lastName < other.lastName) {
        return false;
      } else {
        if (this.firstName > other.firstName) {
          return true;
        } else if (this.firstName < other.firstName) {
          return false;
        } else {
          if (this.course > other.course) {
            return true;
          } else if (this.course < other.course) {
            return false;
          }
        }
      }
    }
  }
  xCoordCourse(pageObj) {
    return (
      pageObj.spaceFromLeft +
      pageObj.length * (this.index % pageObj.column) +
      (pageObj.lengthBox - textWidth(this.course)) / 2
    );
  }
  yCoordCourse(pageObj) {
    return (
      pageObj.spaceFromTop +
      pageObj.textY * Math.floor(this.index / pageObj.column) +
      50
    );
  }
  displayNGC(pageObj) {
        if (this.grade == 9) {
      fill(grade9Color);
    }
    if (this.grade == 10) {
      fill(grade10Color);
    }
    if (this.grade == 11) {
      fill(grade11Color);
    }
    if (this.grade == 12) {
      fill(grade12Color);
    }
    text(
      this.nameOfStudent(),
      this.xCoordStudent(pageObj),
      this.yCoordStudent(pageObj)
    );
    text(
      this.generationOfStudent(this.mark),
      this.xCoordGeneration(pageObj, this.mark),
      this.yCoordGeneration(pageObj)
    );
    text(this.course, this.xCoordCourse(pageObj), this.yCoordCourse(pageObj));
  }
}

class otherAwardStudent extends Student {
  constructor(lastName, firstName, grade, generation, awardName) {
    super(lastName, firstName, grade, generation);
    this.awardName = awardName;
  }
  compareTo1(other) {
    if(this.generation > other.generation){
      return true;
    }
    else if(this.generation < other.generation){
      return false;
    }
    else{
      if (this.grade > other.grade) {
        return true;
    } 
      else if (this.grade < other.grade) {
        return false;
      } else {
        if (this.lastName > other.lastName) {
          return true;
        } else if (this.lastName < other.lastName) {
          return false;
        } else {
          if (this.firstName > other.firstName) {
            return true;
          } else if (this.firstName < other.firstName) {
            return false;
          } else {
            if (this.awardName > other.awardName) {
              return true;
            } else if (this.awardName < other.awardName) {
              return false;
            }
          }
        }
      }
    }

  }

  calculateAwardHeight(pageObj) {
    return Math.ceil(
      textWidth(otherAwardList[this.awardName.split(" ").join("")]) /
        pageObj.length
    );
  }
  displayNGA(pageObj) {
    text(
      this.nameOfStudent(),
      this.xCoordStudent(pageObj),
      this.yCoordStudent(pageObj) - 20
    );

    var adj = 0;
    if (this.calculateAwardHeight(pageObj) > 4) {
      adj = (this.calculateAwardHeight(pageObj) - 4) * 10;
    }
    textSize(settingData.awardNameSize);
    text(
      this.generationOfStudent() + ", " + this.awardName.replaceAll("^", "'"),
      this.xCoordAward(pageObj),
      this.yCoordGeneration(pageObj) - adj
    );
    textSize(settingData.awardSize);

    text(
      otherAwardList[this.awardName.split(" ").join("")],
      this.xCoordDesc(pageObj),
      this.yCoordGeneration(pageObj) + 30 - adj,
      466
    );
  }
  xCoordAward(pageObj) {
    return (
      pageObj.spaceFromLeft +
      pageObj.length * (this.index % pageObj.column) +
      (pageObj.length -
        textWidth(
          this.generationOfStudent() +
            ", " +
            this.awardName.replaceAll("^", "'")
        )) /
        2
    );
  }

  yCoordAward(pageObj) {
    let textHeight =
      (pageObj.length -
        7 * Math.floor(textWidth(this.awardName) / pageObj.wid)) /
      2;
    return (
      pageObj.spaceFromTop +
      pageObj.textY * Math.floor(this.index / pageObj.column) +
      (pageObj.length -
        7 * Math.floor(textWidh(this.awardName) / pageObj.wid)) /
        2
    );
  }
  xCoordDesc(pageObj) {
    return (
      pageObj.spaceFromLeft +
      pageObj.length * (this.index % pageObj.column) +
      20
    );
  }
}