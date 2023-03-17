recuStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            print(student_grade[0])
            recuStudents.append(student_grade[0])


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    recuStudentsFile.writelines(recuStudents)