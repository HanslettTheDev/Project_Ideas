#Python Quadratic Equation solver

#Making the statements and formula's
import math
try:
    a = float(input('A = '))
    b = float(input('B = '))
    c = float(input('C = '))
except:
    input("An error eccured.. press Enter key to exit")
    exit()

d = (b**2) - (4*a*c)

quadratic_formula1 = (-b + d / (2 * a))
quadratic_formula2 = (-b - d / (2 * a))

#if its a positive/negative number send this response to the user

if d < 0:
    print("Equation has no real roots")
    input("press any Enter to exit...")
    exit()
elif d == 0:
    x = (-b + math.sqrt(d)) / (2 * a)
    print("Equation Has one solution ", x)
    input("press Enter key to exit...")
    exit()
else:
    x1 = (-b + math.sqrt(d)) / (2 * a)
    x2 = (-b - math.sqrt(d)) / (2 * a)
    print("This equation has 2 solution: ",x1," and ",x2)
    input("press Enter key to exit...")
    exit()



