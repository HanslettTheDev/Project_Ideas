"""
this program is used to calculate the product of a matrix by 
multiplying the rows by the column and getting the determinant and finding values of x
"""
col1 = (1,1,3)
col2 = (4,5,-2)
col3 = (6,8,10)
row1 = (1,0,0)
row2 = (0,1,0)
row3 = (0,0,1)

def matrix_calculator(row1,row2,row3,col1,col2,col3):
    nrow1 = row1[0] * col1[0] + row1[1] * col2[0] + row1[2] * col3[0]
    nrow2 = row1[0] * col1[1] + row1[1] * col2[1] + row1[2] * col3[1]
    nrow3 = row1[0] * col1[2] + row1[1] * col2[2] + row1[2] * col3[2]
    nrow4 = row2[0] * col1[0] + row2[1] * col2[0] + row2[2] * col3[0]
    nrow5 = row2[0] * col1[1] + row2[1] * col2[1] + row2[2] * col3[1]
    nrow6 = row2[0] * col1[2] + row2[1] * col2[2] + row2[2] * col3[2]
    nrow7 = row3[0] * col1[0] + row3[1] * col2[0] + row3[2] * col3[0]
    nrow8 = row3[0] * col1[1] + row3[1] * col2[1] + row3[2] * col3[1]
    nrow9 = row3[0] * col1[2] + row3[1] * col2[2] + row3[2] * col3[2]
    matrix1 = nrow1,nrow2,nrow3
    matrix_2 = nrow4,nrow5,nrow6
    matrix_3 = nrow7,nrow8,nrow9
    print(matrix1)
    print(matrix_2)
    print(matrix_3)

def determinant_of_a_matrix(row1,row2,row3):
    cover1 = (row1[0] * (row2[1] * row3[2]) - (row2[2] * row3[1]))
    cover2 = (row1[1] * (row2[0] * row3[2]) - (row2[2] * row3[0]))
    cover3 = (row1[2] * (row2[0] * row3[1]) - (row2[1] * row3[0]))
    detA = cover1 - cover2 + cover3
    print(cover1)
    print(cover2)
    print(cover3)
    print("detA = " + str(detA))

determinant_of_a_matrix(row1,row2,row3)
matrix_calculator(row1,row2,row3,col1,col2,col3)


